'use client'

// styles
import styles from './Footer.module.scss'

// components
import Link from 'next/link'

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
								<Link href=''>Acquisitions</Link>
							</li>
							<li>
								<Link href=''>Credit</Link>
							</li>
							<li>
								<Link href=''>Management</Link>
							</li>
							<li>
								<Link href=''>Rentals</Link>
							</li>
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
						</ul>
					</div>
					<div className={styles.footerColumn}>
						<ul>
							<li>
								info@dalan-re.com <br />
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
					<p>Dalan Re © Copyright {year}</p>

					<ul>
						<li>
							<Link href='https://www.linkedin.com/company/dalan-management/'>
								LinkedIn
							</Link>
						</li>
						<li>
							<Link href='https://www.instagram.com/dalanmanagement/'>
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
