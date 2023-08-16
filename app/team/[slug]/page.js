// components
import TitleTextPhotoSection from '@/components/TitleTextPhotoSection'
import TeamMemberSection from '@/components/TeamMemberSection'

// contentful
import { createClient } from 'contentful'

const client = createClient({
	space: process.env.space,
	accessToken: process.env.accessToken
})

export async function generateStaticParams() {
	const team = await client.getEntries({
		content_type: 'team'
	})

	return team.items.map(member => ({
		slug: member.fields.name.toLowerCase()
	}))
}

export default async function Member({ params }) {
	const { slug } = params

	const team = await client.getEntries({
		content_type: 'team'
	})

	const member = team.items.find(
		item => item.fields.name.toLowerCase().replace(/ /g, '-') == slug
	)

	console.log(member)

	return (
		<main>
			<section>
				<TeamMemberSection member={member} />
			</section>
		</main>
	)
}
