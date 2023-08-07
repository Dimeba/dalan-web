/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY
	},
	images: {
		domains: ['images.ctfassets.net']
	}
}

module.exports = nextConfig
