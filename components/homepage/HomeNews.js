// styles
import styles from './HomeNews.module.scss'

// components
import NewsCard from '../NewsCard'
import Link from 'next/link'

const HomeNews = () => {
	const recentNews = [1, 2, 3, 4]

	return (
		<section className={styles.news}>
			<div className='sectionContainer'>
				<h2 className={styles.title}>Recent News</h2>

				{recentNews &&
					recentNews.map((article, index) => <NewsCard key={index} />)}

				<div style={{ gridColumn: 'span 12' }}>
					<Link href='/portfolio'>
						<button className='button-blue'>More Articles</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default HomeNews
