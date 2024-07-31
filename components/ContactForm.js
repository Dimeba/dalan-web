// styles
import styles from './ContactForm.module.scss'

const ContactForm = () => {
	return (
		<form
			className={styles.form}
			name='contact'
			netlify-honeypot='bot-field'
			data-netlify='true'
		>
			<input type='hidden' name='form-name' value='contact' />

			<input id='name' name='name' type='text' placeholder='Name' />
			<select id='inquary' name='inquiryType' defaultValue='defaultOption'>
				<option disabled hidden value='defaultOption'>
					Subject
				</option>
				<option value='type1'>Acquisitions</option>
				<option value='type2'>Credit</option>
				<option value='type3'>Management</option>
				<option value='type3'>Leasing</option>
				<option value='type3'>General Inquiry</option>
			</select>

			<input type='text' id='phone' name='phone' placeholder='Phone Number' />
			<input type='email' id='email' name='email' placeholder='Email Address' />
			<textarea placeholder='Message'></textarea>

			<button className='button-blue'>Send Message</button>
		</form>
	)
}

export default ContactForm
