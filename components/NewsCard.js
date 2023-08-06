// styles
import styles from './homepage/HomeNews.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

const NewsCard = () => {
	return (
		<div className={styles.card}>
			<div className={styles.photo}>
				<Image
					src='/portfolio-sample.jpg'
					fill
					quality={100}
					sizes='(max-width: 768px) 100vw, 768px'
					style={{ objectFit: 'cover' }}
					alt='Section Image'
					priority={true}
					as='img'
				/>
			</div>

			<div className={styles.content}>
				<p className={styles.source}>
					<b>The Real Deal</b> / Jul 21, 2022
				</p>
				<p className={styles.newsTitle}>
					KKR, Dalan buy Downtown Brooklyn rental tower from Brookfield for
					$190M
				</p>
			</div>

			<Link href=''>
				<p className={styles.link}>Read More</p>
			</Link>
		</div>
	)
}

export default NewsCard
