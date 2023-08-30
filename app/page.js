// components
import HomeHero from '@/components/homepage/HomeHero'
import HomeAbout from '@/components/homepage/HomeAbout'
import HomeServices from '@/components/homepage/HomeServices'
import HomeParamaters from '@/components/homepage/HomeParamaters'
import HomePortfolio from '@/components/homepage/HomePortfolio'
import HomeNews from '@/components/homepage/HomeNews'

// contentful
import { createClient } from 'contentful'

export default async function Home() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const homepage = await client.getEntries({
		content_type: 'homepage'
	})

	const services = await client.getEntries({
		content_type: 'service',
		order: 'sys.createdAt'
	})

	const news = await client.getEntries({
		content_type: 'news',
		order: 'sys.createdAt'
	})

	const portfolio = await client.getEntries({
		content_type: 'portfolio'
	})

	const homepageContent = homepage.items[0]

	return (
		<main>
			<HomeHero
				title={homepageContent.fields.title}
				services={services.items}
			/>
			<HomeAbout
				aboutText={homepageContent.fields.aboutText}
				aboutPhoto={homepageContent.fields.aboutPhoto}
			/>
			<HomeServices services={services.items} />
			<HomeParamaters
				acquisitionsParameters={homepageContent.fields.acquisitionsParameters}
				creditParameters={homepageContent.fields.creditParameters}
			/>
			<HomePortfolio portfolio={portfolio.items} homepage={true} />
			<HomeNews
				news={news.items.filter(article => article.fields.featured == true)}
			/>
		</main>
	)
}
