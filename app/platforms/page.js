// components
import HomeHero from '@/components/homepage/HomeHero'
import HomeAbout from '@/components/homepage/HomeAbout'
import HomeServices from '@/components/homepage/HomeServices'
import HomeParamaters from '@/components/homepage/HomeParamaters'
import HomePortfolio from '@/components/homepage/HomePortfolio'
import HomeNews from '@/components/homepage/HomeNews'

// contentful
import { createClient } from 'contentful'

export default async function Home() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const services = await client.getEntries({
		content_type: 'service',
		order: 'sys.createdAt'
	})

	return (
		<main>
			<HomeServices services={services.items} noMargins={true} />
		</main>
	)
}
