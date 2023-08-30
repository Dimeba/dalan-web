import TitleTextPhotoSection from '../TitleTextPhotoSection'

const HomeAbout = ({ aboutText, aboutPhoto }) => {
	return (
		<section>
			<TitleTextPhotoSection
				largeDescription={aboutText}
				photo={aboutPhoto.fields.file.url}
			/>
		</section>
	)
}

export default HomeAbout
