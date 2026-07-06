// styles
import styles from './HomeHero.module.scss'

// components
import Link from 'next/link'

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.titleBlock}>
				<h1>Dalan Real Estate</h1>
				<h2>
					A Vertically Integrated Real Estate Investment
					<br />
					and Operating Firm
				</h2>
			</div>

			<div className='button-row'>
				<Link href='/platforms'>
					<button className='button-blue-white'>Our Platforms</button>
				</Link>
				<Link href='/contact'>
					<button className='button-white'>Contact Us</button>
				</Link>
			</div>
		</section>
	)
}

export default Hero
