import React, { useState } from 'react';
import Form from './Form';
import Input from './Input';
import CheckBox from './Checkbox';
import Button from './Button';
import FormCardFooter from './FormCardFooter';

function FormCardView({ currentTab }) {
	const [state, setState] = useState({
		email: '',
		password: '',
		password2: '',
	});
	const [errors, setErrors] = useState({});
	const handleSubmit = (e) => {
		e.preventDefault();
		let mensajes = {};
		if (state.email === '') {
			mensajes.email = 'Email is required';
		}
		if (state.password === '') {
			mensajes.password = 'Password is required';
		}
		if (state.password2 === '' && !(currentTab === 'login')) {
			mensajes.password2 = 'Passwords does not match';
		}
		setErrors(mensajes);
	};

	return (
		<div className="form-card-view">
			<Form handleSubmit={handleSubmit}>
				<Input
					isRequired={currentTab === 'register'}
					value={state.email}
					setState={setState}
					label="Email"
					type="email"
					name="email"
					error={errors['email']}
				/>
				<Input
					isRequired={currentTab === 'register'}
					value={state.password}
					setState={setState}
					label="Password"
					type="password"
					name="password"
					error={errors['password']}
				/>
				{currentTab === 'login' ? (
					<CheckBox label="Remember me" name="remember" />
				) : (
					<Input
						isRequired={currentTab === 'register'}
						value={state.password2}
						setState={setState}
						label="Confirm password"
						type="password"
						name="password2"
						error={errors['password2']}
					/>
				)}
				<Button text="Sign in" />
			</Form>
			<FormCardFooter currentTab={currentTab} />
		</div>
	);
}

export default FormCardView;
