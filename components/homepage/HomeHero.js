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
							<li
								style={{ color: '#0567fe', whiteSpace: 'nowrap' }}
								key={service.sys.id}
							>
								{service.fields.title}
							</li>
						))}
						<li>Real&nbsp;Estate</li>
					</ul>
				</div>
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
