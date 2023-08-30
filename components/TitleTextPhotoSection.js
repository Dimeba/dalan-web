// styles
import styles from './TitleTextPhotoSection.module.scss'

// components
import Image from 'next/image'
import ContactForm from './ContactForm'
import CareersSection from './CareersSection'

// contentful
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const TitleTextPhotoSection = ({
	title,
	summary,
	photo,
	description,
	largeDescription,
	customText1,
	customText2,
	contact,
	careers,
	openPositions
}) => {
	return (
		<div className='sectionContainer'>
			{title && <h2 className={styles.title}>{title}</h2>}

			{summary && (
				<div className={styles.summary}>
					{typeof summary == 'object' ? (
						documentToReactComponents(summary)
					) : (
						<p>{summary}</p>
					)}
				</div>
			)}

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

			{customText1 && (
				<div className={styles.content}>
					<div className={styles.customText}>
						{documentToReactComponents(customText1)}
					</div>
				</div>
			)}

			<div className={styles.content}>
				{description && <p style={{ fontSize: '1rem' }}>{description}</p>}
				{largeDescription && <p>{largeDescription}</p>}
				{customText2 && (
					<div className={styles.customText}>
						{documentToReactComponents(customText2)}
					</div>
				)}
				{contact && <ContactForm />}
				{careers && <CareersSection openPositions={openPositions} />}
			</div>
		</div>
	)
}

export default TitleTextPhotoSection
