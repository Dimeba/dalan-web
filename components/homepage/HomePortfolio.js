// styles
import styles from './HomePortfolio.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

// contentful
import { createClient } from 'contentful'

const HomePortfolio = async ({ homepage }) => {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const portfolioPage = await client.getEntries({
		content_type: 'portfolioPage'
	})

	const recentClosings = portfolioPage.items[0].fields.featuredDeals

	return (
		<section>
			<div className='sectionContainer'>
				<h2 className={styles.title}>Highlighted Deals</h2>
			</div>

			<div className={styles.portfolio}>
				{recentClosings &&
					recentClosings.map(property => (
						<div key={property.sys.id} className={styles.propertyCard}>
							{property.fields.photo && (
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
							)}
							<div className={styles.propertyText}>
								<p>
									<b>{property.fields.address}</b>
								</p>
								<p>
									{property.fields.city}, {property.fields.state}{' '}
									{property.fields.zip}
								</p>
								<br />
								{property.fields.equityOrDebt && (
									<p>Equity/Debt: {property.fields.equityOrDebt}</p>
								)}
								{property.fields.type && <p>Type: {property.fields.type}</p>}
							</div>
						</div>
					))}
			</div>

			{homepage && (
				<div className='sectionContainer'>
					<div style={{ gridColumn: 'span 12' }}>
						<Link href='/portfolio'>
							<button className='button-blue'>See Full Portfolio</button>
						</Link>
					</div>
				</div>
			)}
		</section>
	)
}

export default HomePortfolio
