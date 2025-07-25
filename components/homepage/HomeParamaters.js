// styles
import styles from './HomeParamaters.module.scss'

const Paramaters = ({
	customTitle = 'Target Deal Parameters',
	hideTitle = false,
	acquisitionsParameters,
	acquisitionsTitle = 'Acquisitions',
	creditParameters,
	creditTitle = 'Credit',
	richText = false
}) => {
	return (
		<section className={styles.paramaters}>
			<div className='sectionContainer'>
				{!hideTitle && (
					<div className={styles.description}>
						<h2>{customTitle}</h2>
					</div>
				)}

				<div
					className={hideTitle ? styles.richTextColumn : styles.paramaterColumn}
				>
					<h3>{acquisitionsTitle}</h3>
					<ul>
						{!richText ? (
							acquisitionsParameters.map(item => <li key={item}>{item}</li>)
						) : (
							<div className={styles.richText}>{acquisitionsParameters}</div>
						)}
					</ul>
				</div>

				<div
					className={hideTitle ? styles.richTextColumn : styles.paramaterColumn}
				>
					<h3>{creditTitle}</h3>
					<ul>
						{!richText ? (
							creditParameters.map(item => <li key={item}>{item}</li>)
						) : (
							<div className={styles.richText}>{creditParameters}</div>
						)}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Paramaters
