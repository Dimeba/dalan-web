// styles
import './globals.scss'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
	subsets: ['latin'],
	weight: '400'
})

// components
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
	title: 'Dalan Real Estate',
	description:
		'Dalan RE is a fully vertically integrated investor with a proven track record of making a wide range of successful real estate investments in both equity and debt. Dalan has the ability to work with larger private equity firms but keeps the values of a family office.',
	icons: {
		icon: '/favicon.svg'
	}
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={roboto.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
