import React from 'react';

function Input({ label, type, isRequired, name, value, setState, error }) {
	let className = isRequired ? 'form-group required' : 'form-group';
	className = error ? className + ' error' : className;
	return (
		<div className={className}>
			<label htmlFor={name}>
				{label}
				{isRequired ? <sup>*</sup> : null}
			</label>
			<input
				className="form-control"
				type={type}
				id={name}
				value={value}
				onChange={({ target }) => {
					let text = target.value.trim();
					setState((state) => ({
						...state,
						[name]: text,
					}));
				}}
			/>
		</div>
	);
}

export default Input;
