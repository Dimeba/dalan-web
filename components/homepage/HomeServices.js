// styles
import styles from './HomeServices.module.scss'

// components
import Link from 'next/link'

const HomeServices = ({ services }) => {
	return (
		<section id='services' className={styles.services}>
			{services &&
				services.map(service => (
					<div key={service.sys.id} className={styles.service}>
						<h3>{service.fields.title}</h3>
						<p className={styles.summary}>{service.fields.summary}</p>
						<Link href={`/services/${service.fields.title.toLowerCase()}`}>
							<button className='button-white'>Learn More</button>
						</Link>
					</div>
				))}
		</section>
	)
}

export default HomeServices
