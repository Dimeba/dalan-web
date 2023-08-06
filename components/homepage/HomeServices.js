// styles
import styles from './HomeServices.module.scss'

const HomeServices = () => {
	const services = [1, 2, 3, 4]

	return (
		<section id='services' className={styles.services}>
			{services &&
				services.map((service, index) => (
					<div key={index} className={styles.service}>
						<h3>Acquisitions</h3>
						<p>
							Unlock real estate success with our expert acquisitions service.
							We navigate complexities, analyze markets, and tailor strategies
							to your goals. Access exclusive opportunities for maximum returns.
						</p>
						<button className='button-white'>Learn More</button>
					</div>
				))}
		</section>
	)
}

export default HomeServices
