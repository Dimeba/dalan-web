// styles
import styles from './TitleTextPhotoSection.module.scss'

// components
import Image from 'next/image'
import ContactForm from './ContactForm'
import CareersSection from './CareersSection'

const TitleTextPhotoSection = ({
	title,
	summary,
	photo,
	description,
	contact,
	careers,
	openPositions
}) => {
	return (
		<div className='sectionContainer'>
			{title && <h2 className={styles.title}>{title}</h2>}

			{summary && <p className={styles.summary}>{summary}</p>}

			{photo && (
				<div className={styles.photo}>
					<Image
						src={'https:' + photo}
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
				{description && <p style={{ fontSize: '1rem' }}>{description}</p>}
				{contact && <ContactForm />}
				{careers && <CareersSection openPositions={openPositions} />}
			</div>
		</div>
	)
}

export default TitleTextPhotoSection
