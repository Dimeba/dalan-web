// components
import TitleTextPhotoSection from '@/components/TitleTextPhotoSection'

// contentful
import { createClient } from 'contentful'

export default async function News() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

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
