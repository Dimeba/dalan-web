// components
import TitleTextPhotoSection from '@/components/TitleTextPhotoSection'
import TeamSection from '@/components/about/TeamSection'
import Partners from '@/components/about/Partners'
import History from '@/components/History'

// contentful
import { createClient } from 'contentful'

export default async function News() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const team = await client.getEntries({
		content_type: 'team',
		order: 'sys.createdAt'
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

				<TeamSection
					title='Leadership'
					team={team.items.filter(
						item => item.fields.type == 'Senior Leadership'
					)}
				/>
				<TeamSection
					team={team.items.filter(item => item.fields.type == 'Leadership')}
				/>
				<TeamSection
					title='Advisors'
					team={team.items.filter(item => item.fields.type == 'Advisors')}
				/>
				<TeamSection
					title='Team'
					team={team.items.filter(item => item.fields.type == 'Team')}
				/>
				<Partners partners={pageContent.fields.partners} />
				<History history={history.items} />
			</section>
		</main>
	)
}
