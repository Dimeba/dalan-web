// styles
import styles from './TeamSection.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

const TeamCard = ({ name, title, photo, id }) => {
	return (
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
			<Link href={`/team/${id}`}>
				<p className={styles.button}>Read Bio</p>
			</Link>
		</div>
	)
}

export default TeamCard
