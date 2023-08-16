// styles
import styles from './Portfolio.module.scss'

// contentful
import { createClient } from 'contentful'

// components
import Map from '@/components/Map'

export default async function News() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const portfolio = await client.getEntries({
		content_type: 'portfolio'
	})

	const portfolioPage = await client.getEntries({
		content_type: 'portfolioPage'
	})

	const pageContent = portfolioPage.items[0]

	return (
		<main>
			<section className={styles.mapContainer}>
				<div className={styles.pageTitle}>
					<h2>{pageContent.fields.title}</h2>
				</div>
				<Map portfolio={portfolio.items} />
				<div className={styles.highlightsContainer}>
					<div className={styles.highlights}>
						<div>
							<h4>{pageContent.fields.totalAssets}</h4>
							<p>Total Assets Under Management</p>
						</div>
						<div>
							<h4>{pageContent.fields.totalSf}</h4>
							<p>SF Under Management</p>
						</div>
						<div>
							<h4>{pageContent.fields.totalDeals}</h4>
							<p>Total Deals Closed in 2023</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='sectionContainer'>
					<div className={styles.portfolioList}>
						<h3>Equity</h3>
						<ul>
							{portfolio.items
								.filter(item => item.fields.equityOrDebt == 'Equity')
								.map(property => (
									<li key={property.sys.id}>{property.fields.address}</li>
								))}
						</ul>
					</div>
				</div>
			</section>
			<section>
				<div className='sectionContainer'>
					<div className={styles.portfolioList}>
						<h3>Debt</h3>
						<ul>
							{portfolio.items
								.filter(item => item.fields.equityOrDebt == 'Debt')
								.map(property => (
									<li key={property.sys.id}>{property.fields.address}</li>
								))}
						</ul>
					</div>
				</div>
			</section>
		</main>
	)
}
