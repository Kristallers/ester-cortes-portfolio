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
				<form>
					<input
						type="text"
						name="name"
						value={values.name}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<input
						type="email"
						name="email"
						value={values.email}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<input
						type="text"
						name="subject"
						value={values.subject}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<textarea
						name="message"
						placeholder="write your message"
						value={values.message}
						onChange={handleChange}
						onBlur={onBlur}
					></textarea>
					<button type="submit" onClick={onSubmit}>
						Send
					</button>
				</form>
			</section>
		</>
	);
};

export default Contact;
