import { redirect } from 'next/navigation'

// components
import TitleTextPhotoSection from '@/components/TitleTextPhotoSection'

import { getContentfulClient } from '@/lib/contentful'

export default async function News() {
	const client = getContentfulClient()

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
