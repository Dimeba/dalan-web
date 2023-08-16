// styles
import styles from './TeamSection.module.scss'

// components
import TeamCard from './TeamCard'

const TeamSection = ({ title, team }) => {
	return (
		<div className='sectionContainer' style={{ marginBottom: '5rem' }}>
			<h3 className={styles.title}>{title}</h3>
			{team.map(item => (
				<TeamCard
					key={item.sys.id}
					name={item.fields.name}
					title={item.fields.title}
					photo={item.fields.photo.fields.file.url}
					bio={item.fields.bio}
					linkedin={item.fields.linkedin}
					vcard={item.fields.vcard.fields.file.url}
				/>
			))}
		</div>
	)
}

export default TeamSection
