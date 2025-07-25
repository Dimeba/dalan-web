// styles
import styles from './homepage/HomePortfolio.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

// contentful
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const RepresentativeTransactions = ({ transactions }) => {
	const maxTransactions = 4
	const placeholders = Array.from(
		{ length: maxTransactions - transactions.length },
		(_, i) => i
	)

	return (
		<section>
			<div className='sectionContainer'>
				<h2 className={styles.title}>Representative Transactions</h2>
			</div>

			<div className={styles.portfolio}>
				{transactions &&
					transactions.map(property => (
						<div key={property.sys.id} className={styles.propertyCard}>
							<Image
								src={'https:' + property.fields.photo.fields.file.url}
								fill
								quality={100}
								sizes='(max-width: 768px) 100vw, 768px'
								style={{ objectFit: 'cover' }}
								alt='Section Image'
								priority={true}
								as='img'
							/>
							<div className={styles.propertyText}>
								<p>
									<b>{property.fields.address}</b>
								</p>
								<p>
									{property.fields.city}, {property.fields.state}{' '}
									{property.fields.zip}
								</p>
								<br />

								<div>
									{documentToReactComponents(property.fields.customText)}
								</div>
							</div>
						</div>
					))}

				{placeholders.map(i => (
					<div
						key={i}
						className={styles.propertyCard}
						style={{ backgroundColor: '#031d44' }}
					>
						<div className={styles.propertyText}></div>
					</div>
				))}
			</div>

			<div className='sectionContainer'>
				<div style={{ gridColumn: 'span 12' }}>
					<Link href='/portfolio'>
						<button className='button-blue'>See Full Portfolio</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default RepresentativeTransactions
