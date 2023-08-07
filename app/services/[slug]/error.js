'use client'

import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export default function Error({ error, reset }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	redirect('/')

	return (
		<div style={{ marginTop: '200px' }}>
			<h2>Something went wrong!</h2>
		</div>
	)
}
