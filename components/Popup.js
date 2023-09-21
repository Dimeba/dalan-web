// styles
import styles from '@/app/portfolio/Portfolio.module.scss'

// components
import Image from 'next/image'

const Popup = ({ activeProperty }) => {
	return (
		<div className={styles.popupContainer}>
			<div className={styles.popupMargins}>
				<div className={styles.popup}>
					{activeProperty.fields.photo && (
						<div className={styles.photo}>
							<Image
								src={'https:' + activeProperty.fields.photo.fields.file.url}
								fill
								quality={100}
								sizes='(max-width: 768px) 100vw, 768px'
								style={{ objectFit: 'cover' }}
								alt='Section Image'
								priority={true}
								as='img'
							/>
						</div>
					)}
					<div className={styles.content}>
						<h4>{activeProperty.fields.name}</h4>
						<p>Equity / Debt: {activeProperty.fields.equityOrDebt}</p>
						<p>Type: {activeProperty.fields.type}</p>
						<p>Address: {activeProperty.fields.address}</p>
						<p>City: {activeProperty.fields.city}</p>
						<p>State: {activeProperty.fields.state}</p>
						<p>Zip: {activeProperty.fields.zip}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Popup
