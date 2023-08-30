// styles
import styles from './Portfolio.module.scss'

// contentful
import { createClient } from 'contentful'

// components
import Map from '@/components/Map'
import HomePortfolio from '@/components/homepage/HomePortfolio'

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
							<h4>3 Million SF</h4>
							<p>Residential and Commercial real estate across the US</p>
						</div>
						<div>
							<h4>$2.5+ Billion</h4>
							<p>Assets under Management</p>
						</div>
						<div>
							<h4>7 Focused Markets</h4>
							<p>with competitive advantages</p>
						</div>
						<div>
							<h4>72% Multifamily | 16% Retail | 12% Office</h4>
							<p>Portfolio Allocation (by Asset Class)</p>
						</div>
					</div>
				</div>
			</section>
			<HomePortfolio portfolio={portfolio.items} homepage={false} />
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
