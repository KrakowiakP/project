import "../../App.scss";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export const Registration = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const register = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const auth = getAuth();

		if (password.length >= 7) {
			try {
				const resourse = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);
				console.log(resourse.user);
				alert("User created successfully");
			} catch (error: any) {
				const { message } = error;
				if (message.includes("Email already in use!"))
					alert("Email already exists!");
			}
		} else alert("Hasło minimum 7 znaków!");
	};

	const handleEmail = (event: ChangeEvent<HTMLInputElement>) =>
		setEmail(event.target.value);

	const handlePassword = (event: ChangeEvent<HTMLInputElement>) =>
		setPassword(event.target.value);
	return (
		<div>
			<form onSubmit={register}>
				<label htmlFor="email">
					Email:
					<input type="email" id="email" value={email} onChange={handleEmail} />
				</label>
			</form>
		</div>
	);
};
