/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
		googleMaps: process.env.GOOGLE_MAPS_API
	},
	images: {
		domains: ['images.ctfassets.net']
	}
}

module.exports = nextConfig
