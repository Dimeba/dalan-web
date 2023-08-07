// styles
import styles from './HomeNews.module.scss'

// components
import NewsCard from '../NewsCard'
import Link from 'next/link'

const HomeNews = ({ news }) => {
	return (
		<section className={styles.news}>
			<div className='sectionContainer'>
				<h2 className={styles.title}>Recent News</h2>

				{news.map(article => (
					<NewsCard
						key={article.sys.id}
						title={article.fields.title}
						publisher={article.fields.publisher}
						date={article.fields.date}
						link={article.fields.link}
						photo={article.fields.image}
					/>
				))}

				<div style={{ gridColumn: 'span 12' }}>
					<Link href='/news'>
						<button className='button-blue'>More Articles</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default HomeNews
