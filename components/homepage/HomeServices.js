// styles
import styles from './HomeServices.module.scss'

// components
import Link from 'next/link'

const HomeServices = ({ services, noMargins, title }) => {
	return (
		<section
			id='services'
			className={`${styles.services} ${noMargins ? styles.withHeroTitle : ''}`}
			style={noMargins && { margin: '0' }}
		>
			{title && <h2 className={styles.title}>{title}</h2>}

			<div className={styles.columns}>
				{services &&
					services.map(service => (
						<div key={service.sys.id} className={styles.service}>
							<h3>{service.fields.title}</h3>
							<p className={styles.summary}>{service.fields.summary}</p>
							<Link
								className={styles.learnMore}
								href={`/services/${service.fields.title
									.toLowerCase()
									.replace(/\s/g, '-')}`}
							>
								<button className='button-white'>Learn More</button>
							</Link>
						</div>
					))}
			</div>
		</section>
	)
}

export default HomeServices
