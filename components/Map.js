'use client'

// styles
import styles from '@/app/portfolio/Portfolio.module.scss'

// components
import Popup from './Popup'

// hooks
import { useCallback, useMemo, useRef, useState } from 'react'

// maps
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoBox
} from '@react-google-maps/api'

const Map = ({ portfolio }) => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.googleMaps
	})

	const mapRef = useRef()
	const center = useMemo(() => ({ lat: 40.7128, lng: -74.006 }), [])
	const options = useMemo(
		() => ({
			mapId: '58a5a52bed788a28',
			disableDefaultUI: true,
			clickableIcons: false
		}),
		[]
	)
	const onLoad = useCallback(map => (mapRef.current = map), [])

	// popup
	const [showPopup, setShowPopup] = useState(false)
	const [activeProperty, setActiveProperty] = useState()

	const handleClick = id => {
		setShowPopup(true)
		setActiveProperty(portfolio.find(property => property.sys.id == id))
	}

	if (!isLoaded) return <div>Loading...</div>

	return (
		<>
			<GoogleMap
				zoom={12}
				center={center}
				mapContainerClassName={styles.map}
				options={options}
				onLoad={onLoad}
			>
				{portfolio.map(property => (
					<Marker
						key={property.sys.id}
						position={{
							lat: property.fields.location.lat,
							lng: property.fields.location.lon
						}}
						icon={
							property.fields.equityOrDebt == 'Equity'
								? '/pin.svg'
								: '/pin-blue.svg'
						}
						onClick={() => handleClick(property.sys.id)}
					/>
				))}
			</GoogleMap>

			{showPopup && <Popup activeProperty={activeProperty} />}
		</>
	)
}

export default Map
