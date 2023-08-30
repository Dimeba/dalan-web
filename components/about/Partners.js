// styles
import styles from './TeamSection.module.scss'

// components
import Image from 'next/image'

const Partners = ({ partners }) => {
	return (
		<section>
			<div className='sectionContainer'>
				<h3 style={{ gridColumn: 'span 12', textAlign: 'center' }}>
					Key Partners
				</h3>
				{partners &&
					partners.map(partner => (
						<div key={partner.sys.id} className={styles.partner}>
							<div className={styles.partnerPhoto}>
								<Image
									src={'https:' + partner.fields.file.url}
									fill
									quality={100}
									sizes='(max-width: 768px) 100vw, 768px'
									style={{ objectFit: 'contain' }}
									alt='Section Image'
									priority={true}
									as='img'
								/>
							</div>
						</div>
					))}
			</div>
		</section>
	)
}

export default Partners
