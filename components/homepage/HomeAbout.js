// styles
import styles from './HomeAbout.module.scss'

// components
import Image from 'next/image'

const HomeAbout = () => {
	return (
		<section className={styles.about}>
			<div className='sectionContainer'>
				<div className={styles.photo}>
					<Image
						src='/symbol-collage.jpg'
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
					<p>
						Dalan Real Estate is a vertically-integrated real estate firm made
						up of four subsidiaries: Dalan Acquisitions, Dalan Credit, Dalan
						Management and Dalan Rentals. Dalan Real Estate leverages its
						expertise and wide range of capabilities to identify opportunity,
						unlock value, and create growth.
					</p>
				</div>
			</div>
		</section>
	)
}

export default HomeAbout
