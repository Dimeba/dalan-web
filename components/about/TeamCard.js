'use client'

// styles
import styles from './TeamSection.module.scss'

// hooks
import { useState } from 'react'

// components
import Image from 'next/image'
import TeamMemberSection from '../TeamMemberSection'

const TeamCard = ({ name, title, photo, bio, linkedin, vcard }) => {
	const [showModal, setShowModal] = useState(false)

	return (
		<>
			<div className={styles.teamCard}>
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
				<h4>{name}</h4>
				<p>{title}</p>
				<p onClick={() => setShowModal(true)} className={styles.button}>
					Read Bio
				</p>
			</div>
			{showModal && (
				<TeamMemberSection
					name={name}
					title={title}
					bio={bio}
					linkedin={linkedin}
					vcard={vcard}
					photo={photo}
					setShowModal={setShowModal}
				/>
			)}
		</>
	)
}

export default TeamCard
