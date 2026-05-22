// components
import TitleTextPhotoSection from '@/components/TitleTextPhotoSection'
import TeamSection from '@/components/about/TeamSection'
import Partners from '@/components/about/Partners'
import History from '@/components/History'

import { getContentfulClient } from '@/lib/contentful'

export default async function News() {
	const client = getContentfulClient()

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

	const careers = await client.getEntries({
		content_type: 'careersPage'
	})

	const openPositions = await client.getEntries({
		content_type: 'openPositions'
	})

	const pageContent = about.items[0]
	const careersPageContent = careers.items[0]

	// sorting team

	const sortedTeam = team.items.slice().sort((a, b) => {
		const nameA = a.fields.name.toLowerCase()
		const nameB = b.fields.name.toLowerCase()

		if (nameA < nameB) {
			return -1
		}
		if (nameA > nameB) {
			return 1
		}
		return 0
	})

	return (
		<main>
			<section>
				<TeamSection title='C-Suite' team={pageContent.fields.executiveTeam} />
				<TeamSection
					title='Executive Leadership'
					team={pageContent.fields.creditExecutives}
				/>
				<TeamSection
					title='Senior Leadership'
					hidePhoto
					team={pageContent.fields.seniorLeadership}
				/>
				{/* <TeamSection
					title='Advisors'
					team={team.items.filter(item => item.fields.type == 'Advisors')}
				/> */}
				<TeamSection
					title='Team'
					team={sortedTeam.filter(item => item.fields.type == 'Team')}
				/>

				<TitleTextPhotoSection
					title={careersPageContent.fields.title}
					summary={careersPageContent.fields.description}
					photo={careersPageContent.fields.photo.fields.file.url}
					careers={true}
					openPositions={openPositions.items}
				/>
			</section>
		</main>
	)
}
