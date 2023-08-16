// components
import TitleTextPhotoSection from '@/components/TitleTextPhotoSection'
import TeamSection from '@/components/about/TeamSection'
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

	return (
		<main>
			<section>
				<TitleTextPhotoSection
					title='About Dalan RE'
					summary='Dalan RE is a fully vertically integrated investor with a proven track record of making a wide range of successful real estate investments in both equity and debt. Dalan has the ability to work with larger private equity firms but keeps the values of a family office.'
				/>

				<TeamSection
					title='Senior Leadership'
					team={team.items.filter(
						item => item.fields.type == 'Senior Leadership'
					)}
				/>
				<TeamSection
					title='Management'
					team={team.items.filter(item => item.fields.type == 'Management')}
				/>
				<TeamSection
					title='Team'
					team={team.items.filter(item => item.fields.type == 'Team')}
				/>
				<History history={history.items} />
			</section>
		</main>
	)
}
