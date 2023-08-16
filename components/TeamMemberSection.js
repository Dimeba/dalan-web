'use client'

// styles
import styles from './TeamMemberSection.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

const TeamMemberSection = ({ member }) => {
	return (
		<>
			{member && (
				<div className='sectionContainer'>
					<div className={styles.photo}>
						<Image
							src={'https:' + member.fields.photo.fields.file.url}
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
							<h3>{member.fields.name}</h3>
							<p>{member.fields.title}</p>
						</div>

						<p>{member.fields.bio}</p>

						<div className={styles.links}>
							{member.fields.linkedin && (
								<Link href={member.fields.linkedin}>
									<p className={styles.link}>Visit LinkedIn</p>
								</Link>
							)}
							{member.fields.vcard && (
								<Link href={member.fields.vcard.fields.file.url}>
									<p className={styles.link}>Download vCard</p>
								</Link>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default TeamMemberSection
