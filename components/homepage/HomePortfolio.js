// styles
import styles from './HomePortfolio.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

const HomePortfolio = ({ portfolio }) => {
	const recentClosings = portfolio.filter(property => property.fields.featured)

	return (
		<section>
			<div className='sectionContainer'>
				<h2 className={styles.title}>Recent Closings</h2>
			</div>

			<div className={styles.portfolio}>
				{recentClosings &&
					recentClosings.map(property => (
						<div key={property.sys.id} className={styles.propertyCard}>
							<Image
								src={'https:' + property.fields.photo.fields.file.url}
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
									<b>{property.fields.address}</b>
								</p>
								<p>
									{property.fields.city}, {property.fields.state}{' '}
									{property.fields.zip}
								</p>
								<br />
								<p>Equity/Debt: {property.fields.equityOrDebt}</p>
								<p>Type: {property.fields.type}</p>
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
