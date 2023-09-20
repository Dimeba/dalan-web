// styles
import styles from './homepage/HomeNews.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

const NewsCard = ({ title, publisher, date, link, photo }) => {
	return (
		<div className={styles.card}>
			{photo && (
				<div className={styles.photo}>
					<Image
						src={'https:' + photo.fields.file.url}
						fill
						quality={100}
						sizes='(max-width: 768px) 100vw, 768px'
						style={{ objectFit: 'cover' }}
						alt='Section Image'
						priority={true}
						as='img'
					/>
				</div>
			)}

			<div className={styles.content}>
				<p className={styles.source}>
					<b>{publisher}</b> / {date}
				</p>
				<p className={styles.newsTitle}>{title}</p>
			</div>

			<Link href={link}>
				<p className={styles.link}>Read More</p>
			</Link>
		</div>
	)
}

export default NewsCard
