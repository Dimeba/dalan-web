// components
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// contentful
import { createClient } from 'contentful'

export default async function Terms() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const terms = await client.getEntries({
		content_type: 'terms'
	})

	const pageContent = terms.items[0]

	return (
		<main>
			<section>
				<div className='sectionContainer'>
					<div className='fullWidthDiv termsAndPrivacy'>
						<h2>{pageContent.fields.title}</h2>
						<div>{documentToReactComponents(pageContent.fields.content)}</div>
					</div>
				</div>
			</section>
		</main>
	)
}
