// styles
import styles from './History.module.scss'

const History = ({ history }) => {
	return (
		<div className='sectionContainer'>
			<h3 className={styles.pageTitle}>History</h3>
			<div className={styles.historyContainer}>
				<div className={styles.history}>
					{history.map(event => (
						<div key={event.sys.id} className={styles.event}>
							<div className={styles.circle}></div>
							<div className={styles.content}>
								<h4>
									{event.fields.date} / {event.fields.name}
								</h4>
								<p>{event.fields.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default History
