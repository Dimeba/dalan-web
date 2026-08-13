// styles
import styles from '@/app/careers/Careers.module.scss'

// components
import Link from 'next/link'

const CareersSection = ({ openPositions }) => {
	return (
		<div className={styles.careers}>
			<h3>Open Positions</h3>
			<div className={styles.position}>
				{/* <h4>{position.fields.title}</h4> */}
				<Link
					href={'https://www.linkedin.com/company/dalan-re/'}
					target='_blank'
				>
					<p>Visit Our LinkedIn</p>
				</Link>
			</div>
		</div>
	)
}

export default CareersSection
