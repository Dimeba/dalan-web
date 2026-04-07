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
					acquisitionsTitle='Our Mission'
					acquisitionsParameters={
						pageFields.mission
							? documentToReactComponents(pageFields.mission)
							: null
					}
					acquisitionsExtraTitle='Our Approach'
					acquisitionsExtraParagraphs={[
						'At Dalan Real Estate, our approach is rooted in disciplined execution, data-driven decision-making, and a fully integrated operating model. We combine institutional rigor with hands-on market expertise to identify opportunities, manage risk, and unlock value across every stage of the investment lifecycle.',
						'We invest with conviction - grounded in deep market knowledge, thoughtful underwriting, and a long-term perspective - while remaining agile in dynamic environments, leaning into opportunities when fundamentals are strong and dislocation is temporary. Our vertically integrated platform enables seamless alignment across acquisitions, credit, management, and leasing, ensuring that strategy and execution remain tightly connected.',
						'Above all, our approach is people-driven. We are committed to delivering exceptional service to our residents, transparent communication with our partners, and fostering a collaborative culture within our teams - because strong relationships are foundational to long-term success.'
					]}
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
