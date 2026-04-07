// components
import TitleTextPhotoSection from '@/components/TitleTextPhotoSection'

import { getContentfulClient } from '@/lib/contentful'

export default async function News() {
	const client = getContentfulClient()

	const contact = await client.getEntries({
		content_type: 'contactPage'
	})

	const pageContent = contact.items[0]

	return (
		<main>
			<section>
				<TitleTextPhotoSection
					title={pageContent.fields.title}
					summary={pageContent.fields.description}
					photo={pageContent.fields.photo.fields.file.url}
					contact={true}
				/>
			</section>
		</main>
	)
}
