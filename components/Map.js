'use client'

// styles
import styles from '@/app/portfolio/Portfolio.module.scss'

// hooks
import { useCallback, useMemo, useRef, useState } from 'react'

// maps
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

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

	if (!isLoaded) return <div>Loading...</div>

	return (
		<>
			<GoogleMap
				zoom={11}
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
						icon='/pin.svg'
					/>
				))}
			</GoogleMap>
		</>
	)
}

export default Map
