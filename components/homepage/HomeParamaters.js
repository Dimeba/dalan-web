// styles
import styles from './HomeParamaters.module.scss'

const Paramaters = () => {
	return (
		<section className={styles.paramaters}>
			<div className='sectionContainer'>
				<div className={styles.description}>
					<h2>Target Deal Parameters</h2>
					<p>
						Dalan RE is a fully vertically integrated investor with a proven
						track record of making a wide range of successful real estate
						investments in both equity and debt. Dalan has the ability to work
						with larger private equity firms but keeps the values of a family
						office.
					</p>
				</div>

				<div className={styles.paramaterColumn}>
					<h3>Acquisitions</h3>
					<ul>
						<li>Property Type: Multifamily</li>
						<li>Property Type: Multifamily</li>
						<li>Property Type: Multifamily</li>
						<li>Property Type: Multifamily</li>
						<li>Property Type: Multifamily</li>
						<li>Property Type: Multifamily</li>
					</ul>
				</div>

				<div className={styles.paramaterColumn}>
					<h3>Credit</h3>
					<ul>
						<li>Property Type: Multifamily</li>
						<li>Property Type: Multifamily</li>
						<li>Property Type: Multifamily</li>
						<li>Property Type: Multifamily</li>
						<li>Property Type: Multifamily</li>
						<li>Property Type: Multifamily</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Paramaters
