'use client'
import { useState } from 'react'

// styles
import styles from './Header.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'
import Hamburger from './Hamburger'

// Menu
export const menu = [
	{
		url: '/about',
		text: 'About Us'
	},
	{
		url: '/team',
		text: 'Our Team'
	},
	{
		url: '/platforms',
		text: 'Our Platforms'
	},
	{
		url: '/portfolio',
		text: `Portfolio`
	},
	{
		url: '/news',
		text: 'News'
	},
	// {
	// 	url: '/careers',
	// 	text: 'Careers'
	// },
	{
		url: '/contact',
		text: 'Contact Us'
	}
]

const Header = () => {
	// Mobile Menu

	const [menuOpen, setMenuOpen] = useState(false)
	const [menuClass, setMenuClass] = useState(styles.menuBtnClosed)

	const toggleMenu = () => {
		if (!menuOpen) {
			setMenuClass(styles.menuBtnOpen)
			setMenuOpen(true)
		} else {
			setMenuClass(styles.menuBtnClosed)
			setMenuOpen(false)
		}
	}

	const closeMenu = () => {
		setMenuClass(styles.menuBtnClosed)
		setMenuOpen(false)
	}

	return (
		<header className={`${styles.header} ${menuOpen ? styles.openMenu : ''}`}>
			<div className={styles.headerElements}>
				<div className={styles.logoNav}>
					<Link href='/'>
						<Image
							src='/logo.svg'
							width={136}
							height={20}
							alt='Dalam Logo'
							priority={true}
							as='img'
						/>
					</Link>

					<Hamburger toggleMenu={toggleMenu} menuClass={menuClass} />
				</div>

				<nav className={menuOpen ? '' : styles.hidden}>
					<ul>
						{menu.map(mapItem => (
							<Link key={mapItem.url} href={mapItem.url}>
								<li onClick={() => closeMenu()} className='nav-li'>
									{mapItem.text}
								</li>
							</Link>
						))}
					</ul>
					<div className='button-row'>
						<Link href='https://investors.dalanre.com/' target='_blank'>
							<button onClick={() => closeMenu()} className='button-dark'>
								Investor Portal
							</button>
						</Link>
						<Link
							href='https://listings.dalanrentals.com/searchlisting.aspx?ftst=&amp;LocationGeoId=0&amp;renewpg=1&amp;LatLng=%2837.09024,-95.712891%29&amp;'
							target='_blank'
						>
							<button onClick={() => closeMenu()} className='button-blue'>
								Rent Here
							</button>
						</Link>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
