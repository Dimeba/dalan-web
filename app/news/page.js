// styles
import styles from './News.module.scss'

// components
import NewsCard from '@/components/NewsCard'

// contentful
import { createClient } from 'contentful'

export default async function News() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const news = await client.getEntries({
		content_type: 'news',
		order: 'sys.createdAt'
	})

	return (
		<main>
			<section>
				<div className='sectionContainer'>
					<h2 className={styles.title}>In The News</h2>
					{news.items.map(article => (
						<NewsCard
							key={article.sys.id}
							title={article.fields.title}
							publisher={article.fields.publisher}
							date={article.fields.date}
							link={article.fields.link}
							photo={article.fields.image}
						/>
					))}
				</div>
			</section>
		</main>
	)
}
