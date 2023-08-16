// styles
import styles from '@/app/careers/Careers.module.scss'

// components
import Link from 'next/link'

const CareersSection = ({ openPositions }) => {
	return (
		<div className={styles.careers}>
			<h3>Open Positions</h3>
			{openPositions.map(position => (
				<div className={styles.position} key={position.sys.id}>
					<h4>{position.fields.title}</h4>
					<Link href={'https:' + position.fields.document.fields.file.url}>
						<p>Download PDF</p>
					</Link>
				</div>
			))}
		</div>
	)
}

export default CareersSection
