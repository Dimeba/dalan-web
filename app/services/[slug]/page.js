// components
import TitleTextPhotoSection from '@/components/TitleTextPhotoSection'
import RepresentativeTransactions from '@/components/RepresentativeTransactions'

// contentful
import { createClient } from 'contentful'

const client = createClient({
	space: process.env.space,
	accessToken: process.env.accessToken
})

export async function generateStaticParams() {
	const services = await client.getEntries({
		content_type: 'service'
	})

	return services.items.map(service => ({
		slug: service.fields.title.toLowerCase()
	}))
}

export default async function Service({ params }) {
	const { slug } = params

	const services = await client.getEntries({
		content_type: 'service'
	})

	const service = services.items.find(
		item => item.fields.title.toLowerCase() == slug
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
