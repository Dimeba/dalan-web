import { createClient } from 'contentful'

function getContentfulConfig() {
	const space =
		process.env.CONTENTFUL_SPACE_ID ??
		process.env.space ??
		process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
	const accessToken =
		process.env.CONTENTFUL_ACCESS_KEY ??
		process.env.accessToken ??
		process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY

	if (!space || !accessToken) {
		throw new Error(
			'Missing Contentful configuration. Expected CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_KEY.'
		)
	}

	return { space, accessToken }
}

export function getContentfulClient() {
	return createClient(getContentfulConfig())
}
