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

	return (
		<main>
			<section className={styles.mapContainer}>
				<Map portfolio={portfolio.items} />
			</section>
		</main>
	)
}
