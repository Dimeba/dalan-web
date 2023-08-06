// styles
import styles from './HomePortfolio.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

const HomePortfolio = () => {
	const recentClosings = [1, 2, 3, 4]

	return (
		<section>
			<div className='sectionContainer'>
				<h2 className={styles.title}>Recent Closings</h2>
			</div>

			<div className={styles.portfolio}>
				{recentClosings &&
					recentClosings.map((closing, index) => (
						<div key={index} className={styles.propertyCard}>
							<Image
								src='/portfolio-sample.jpg'
								fill
								quality={100}
								sizes='(max-width: 768px) 100vw, 768px'
								style={{ objectFit: 'cover' }}
								alt='Section Image'
								priority={true}
								as='img'
							/>
							<div className={styles.propertyText}>
								<p>
									<b>1 Main Street</b>
								</p>
								<p>New York, NY 10001</p>
								<br />
								<p>Equity/Debt: Equity</p>
								<p>Type: Mixed</p>
							</div>
						</div>
					))}
			</div>

			<div className='sectionContainer'>
				<div style={{ gridColumn: 'span 12' }}>
					<Link href='/portfolio'>
						<button className='button-blue'>See Full Portfolio</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default HomePortfolio
