// styles
import styles from './TeamMemberSection.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

const TeamMemberSection = ({
	name,
	title,
	bio,
	photo,
	linkedin,
	vcard,
	setShowModal
}) => {
	return (
		<div className={styles.modal}>
			<div className='sectionContainer'>
				<p className={styles.back} onClick={() => setShowModal(false)}>
					Back
				</p>
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
				<div className={styles.bio}>
					<div>
						<h3>{name}</h3>
						<p>{title}</p>
					</div>

					<p>{bio}</p>

					<div className={styles.links}>
						{linkedin && (
							<Link href={linkedin}>
								<p className={styles.link}>Visit LinkedIn</p>
							</Link>
						)}
						{vcard && (
							<Link href={vcard}>
								<p className={styles.link}>Download vCard</p>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TeamMemberSection
