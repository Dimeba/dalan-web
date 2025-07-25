// components
import TitleTextPhotoSection from '@/components/TitleTextPhotoSection'
import Partners from '@/components/about/Partners'
import History from '@/components/History'
import Paramaters from '@/components/homepage/HomeParamaters'

// contentful
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default async function News() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const history = await client.getEntries({
		content_type: 'history',
		order: 'sys.createdAt'
	})

	const about = await client.getEntries({
		content_type: 'aboutPage'
	})

	const pageContent = about.items[0]

	return (
		<main>
			<section>
				<TitleTextPhotoSection
					title={pageContent.fields.title}
					summary={pageContent.fields.description}
				/>

				<Paramaters
					hideTitle={true}
					acquisitionsTitle='Our Mission'
					acquisitionsParameters={documentToReactComponents(
						pageContent.fields.mission
					)}
					creditParameters={documentToReactComponents(
						pageContent.fields.values
					)}
					creditTitle='Core Values'
					richText={true}
				/>

				<Partners partners={pageContent.fields.partners} />
				<History history={history.items} />
			</section>
		</main>
	)
}
