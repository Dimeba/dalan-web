// components
import TitleTextPhotoSection from '@/components/TitleTextPhotoSection'
import Partners from '@/components/about/Partners'
import History from '@/components/History'
import Paramaters from '@/components/homepage/HomeParamaters'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getContentfulClient } from '@/lib/contentful'

export default async function News() {
	const client = getContentfulClient()

	const history = await client.getEntries({
		content_type: 'history',
		order: 'sys.createdAt'
	})

	const about = await client.getEntries({
		content_type: 'aboutPage'
	})

	const pageContent = about.items[0]
	const pageFields = pageContent?.fields ?? {}

	return (
		<main>
			<section>
				<TitleTextPhotoSection
					title={pageFields.title}
					summary={pageFields.description}
				/>

				<Paramaters
					hideTitle={true}
					acquisitionsTitle='Our Mission and Approach'
					acquisitionsParameters={
						pageFields.mission
							? documentToReactComponents(pageFields.mission)
							: null
					}
					creditParameters={
						pageFields.values
							? documentToReactComponents(pageFields.values)
							: null
					}
					creditTitle='Core Values'
					richText={true}
				/>

				<Partners partners={pageFields.partners ?? []} />
				<History history={history.items ?? []} />
			</section>
		</main>
	)
}
