import React from "react";
import styles from "./Contact.module.css";
import { useState } from "react";
import { sendContactForm } from "../../../lib/api";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

const Contact = ({ sectionTitle }) => {
	const [state, setState] = useState(initState);
	const [touched, setTouched] = useState({});

	const { values, isLoading, error } = state;

	const onBlur = ({ target }) =>
		setTouched((prev) => ({ ...prev, [target.name]: true }));

	const handleChange = ({ target }) =>
		setState((prev) => ({
			...prev,
			values: {
				...prev.values,
				[target.name]: target.value,
			},
		}));

	const onSubmit = async (event) => {
		event.preventDefault();
		setState((prev) => ({
			...prev,
			isLoading: true,
		}));
		try {
			await sendContactForm(values);
			setTouched({});
			setState(initState);
			console.log({
				title: "Message sent.",
				status: "success",
				duration: 2000,
				position: "top",
			});
		} catch (error) {
			setState((prev) => ({
				...prev,
				isLoading: false,
				error: error.message,
			}));
		}
	};
	return (
		<>
			<section className={styles.cardContentsWrapper}>
				<h1 className={styles.title}>{sectionTitle}</h1>
				<p>Get in touch! I'd love to chat (: </p>
				<form className={styles.formElement}>
					<input
						className={styles.inputField}
						type="text"
						name="name"
						placeholder="Name"
						value={values.name}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<input
						className={styles.inputField}
						type="email"
						name="email"
						placeholder="example@email.com"
						value={values.email}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<input
						className={styles.inputField}
						type="text"
						name="subject"
						placeholder="Subject"
						value={values.subject}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<textarea
						className={styles.inputField}
						rows={6}
						name="message"
						placeholder="Write your message"
						value={values.message}
						onChange={handleChange}
					></textarea>
					<button
						className={styles.formButton}
						type="submit"
						onClick={onSubmit}
					>
						Send
					</button>
				</form>
				<div className={styles.socials}>
					<a
						href="https://www.linkedin.com/in/ester-cortes-288722244/"
						target="_blank"
						className={styles.socialsIconContainer}
					>
						<div>
							<img
								src="./linkedin_icon.svg"
								alt="bright purple linkedin icon"
							/>
						</div>
						<span>LinkedIn</span>
					</a>
					<a
						href="https://github.com/Kristallers"
						target="_blank"
						className={styles.socialsIconContainer}
					>
						<div>
							<img src="./github_icon.svg" alt="bright purple github icon" />
						</div>
						<span>Github</span>
					</a>
				</div>
			</section>
		</>
	);
};

export default Contact;
