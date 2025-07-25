import { redirect } from 'next/navigation'

// components
import TitleTextPhotoSection from '@/components/TitleTextPhotoSection'

// contentful
import { createClient } from 'contentful'

export default async function News() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const careers = await client.getEntries({
		content_type: 'careersPage'
	})

	const openPositions = await client.getEntries({
		content_type: 'openPositions'
	})

	const pageContent = careers.items[0]

	redirect('/team')

	return (
		<main>
			<section>
				<TitleTextPhotoSection
					title={pageContent.fields.title}
					summary={pageContent.fields.description}
					photo={pageContent.fields.photo.fields.file.url}
					careers={true}
					openPositions={openPositions.items}
				/>
			</section>
		</main>
	)
}
