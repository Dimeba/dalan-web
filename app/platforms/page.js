// components
import HomeServices from '@/components/homepage/HomeServices'

import { getContentfulClient } from '@/lib/contentful'

export default async function Home() {
	const client = getContentfulClient()

	const services = await client.getEntries({
		content_type: 'service',
		order: 'sys.createdAt'
	})

	return (
		<main>
			<HomeServices
				services={services.items}
				noMargins={true}
				title='Four integrated businesses. One unified vision.'
			/>
		</main>
	)
}
