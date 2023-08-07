// styles
import styles from './HomeHero.module.scss'

// components
import Link from 'next/link'

const Hero = ({ title, services }) => {
	return (
		<section className={styles.hero}>
			<div>
				<h1>{title}</h1>
				<div className={styles.listContainer}>
					<ul>
						{services.map(service => (
							<li key={service.sys.id}>{service.fields.title}</li>
						))}
						<li>Real&nbsp;Estate</li>
					</ul>
				</div>
			</div>

			<div className='button-row'>
				<Link href='/#services'>
					<button className='button-blue-white'>Our Services</button>
				</Link>
				<button className='button-white'>Contact Us</button>
			</div>
		</section>
	)
}

export default Hero
