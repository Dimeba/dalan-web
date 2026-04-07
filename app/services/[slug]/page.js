// components
import TitleTextPhotoSection from '@/components/TitleTextPhotoSection'
import RepresentativeTransactions from '@/components/RepresentativeTransactions'

import { getContentfulClient } from '@/lib/contentful'

const client = getContentfulClient()

export async function generateStaticParams() {
	const services = await client.getEntries({
		content_type: 'service'
	})

	const slugs = services.items.map(service => ({
		slug: service.fields.title.replace(/\s/g, '-').toLowerCase()
	}))

	return slugs
}

export default async function Service({ params }) {
	const { slug } = params
	const decodedSlug = decodeURIComponent(slug).replace(/\s/g, '-')

	const services = await client.getEntries({
		content_type: 'service'
	})

	const service = services.items.find(
		item => item.fields.title.replace(/\s/g, '-').toLowerCase() == decodedSlug
	)

	return (
		<main>
			<section>
				<TitleTextPhotoSection
					title={service.fields.title}
					summary={service.fields.summary}
					photo={
						service.fields.serviceImage &&
						service.fields.serviceImage.fields.file.url
					}
					description={service.fields.description}
					customText1={service.fields.customText1}
					customText2={service.fields.customText2}
				/>
			</section>

			{service.fields.transactions && (
				<RepresentativeTransactions
					transactions={service.fields.transactions}
				/>
			)}
		</main>
	)
}
