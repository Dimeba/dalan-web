'use client'

// styles
import styles from './Footer.module.scss'

// components
import Link from 'next/link'
import Image from 'next/image'

// menu
import { menu } from './Header'

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<>
			<footer className={styles.footer}>
				<div className='sectionContainer'>
					<div className={styles.footerColumn}>
						<ul>
							{menu &&
								menu.map((item, index) => (
									<li key={index}>
										<Link href={item.url}>{item.text}</Link>
									</li>
								))}
						</ul>
					</div>
					<div className={styles.footerColumn}>
						<ul>
							<li>
								<Link href='https://investors.dalanmanagement.com/'>
									Investor Portal
								</Link>
							</li>
							<li>
								<Link href='https://www.dalanrentals.com/'>Rent Here</Link>
							</li>
							<li>
								<Link href='/services/acquisitions'>Acquisitions</Link>
							</li>
							<li>
								<Link href='/services/credit'>Credit</Link>
							</li>
							<li>
								<Link href='/services/management'>Management</Link>
							</li>
							<li>
								<Link href='/services/rentals'>Rentals</Link>
							</li>
						</ul>
					</div>
					<div className={styles.footerColumn}>
						<ul>
							<li>
								<Link href='/terms'>Terms of Use</Link>
							</li>
							<li>
								<Link href='/privacy'>Privacy Policy</Link>
							</li>
							<li>
								<Link href='/NY-Fair-Housing-Notice.pdf' target='_blank'>
									NY Fair Housing Notice
								</Link>
							</li>
							<li>
								<Link
									href='/NY-Notice-Tenants-Reasonable-Accomodation.pdf'
									target='_blank'
								>
									NY Notice Tenants Reasonable Accomodation
								</Link>
							</li>
						</ul>
					</div>
					<div className={styles.footerColumn}>
						<ul>
							<li>
								Help@DalanRe.com <br />
								(212) 929-0510
							</li>

							<li>
								134 West 25th Street
								<br />
								5th Floor
								<br />
								New York, NY 10001
							</li>
						</ul>
					</div>
				</div>
			</footer>
			<div className={styles.credits}>
				<div>
					<p>DalanRe © Copyright {year}</p>

					<Image
						src='/equal-housing-opportunity.png'
						width={60}
						height={30}
						alt='Equal housing opportunity logo'
					/>

					<ul>
						<li>
							<Link href='https://www.linkedin.com/company/dalan-management/'>
								LinkedIn
							</Link>
						</li>
						<li>
							<Link href='https://www.instagram.com/dalanrealestate/'>
								Instagram
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Footer
