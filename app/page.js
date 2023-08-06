// components
import HomeHero from '@/components/homepage/HomeHero'
import HomeAbout from '@/components/homepage/HomeAbout'
import HomeServices from '@/components/homepage/HomeServices'
import HomeParamaters from '@/components/homepage/HomeParamaters'
import HomePortfolio from '@/components/homepage/HomePortfolio'
import HomeNews from '@/components/homepage/HomeNews'

export default function Home() {
	return (
		<main>
			<HomeHero />
			<HomeAbout />
			<HomeServices />
			<HomeParamaters />
			<HomePortfolio />
			<HomeNews />
		</main>
	)
}
