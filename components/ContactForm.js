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
			<select id='inquary' name='inquiryType' defaultValue='inquiryType'>
				<option disabled hidden value='defaultOption'>
					How can we help?
				</option>
				<option value='type1'>Type 1</option>
				<option value='type2'>Type 2</option>
				<option value='type3'>Type 3</option>
			</select>

			<input type='text' id='phone' name='phone' placeholder='Phone Number' />
			<input type='email' id='email' name='email' placeholder='Email Address' />
			<textarea placeholder='Message'></textarea>

			<button className='button-blue'>Send Message</button>
		</form>
	)
}

export default ContactForm
