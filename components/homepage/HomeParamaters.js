// styles
import styles from './HomeParamaters.module.scss'

const Paramaters = ({ acquisitionsParameters, creditParameters }) => {
	return (
		<section className={styles.paramaters}>
			<div className='sectionContainer'>
				<div className={styles.description}>
					<h2>Target Deal Parameters</h2>
				</div>

				<div className={styles.paramaterColumn}>
					<h3>Acquisitions</h3>
					<ul>
						{acquisitionsParameters.map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>

				<div className={styles.paramaterColumn}>
					<h3>Credit</h3>
					<ul>
						{creditParameters.map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Paramaters
