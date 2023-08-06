// styles
import styles from './HomeHero.module.scss'

// components
import Link from 'next/link'

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div>
				<h1>Dalan</h1>
				<div className={styles.listContainer}>
					<ul>
						<li>Acquisitions</li>
						<li>Credit</li>
						<li>Management</li>
						<li>Rentals</li>
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
