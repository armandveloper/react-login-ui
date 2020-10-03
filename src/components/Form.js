import React from 'react';

function Form({ children, handleSubmit }) {
	return (
		<form className="form" onSubmit={handleSubmit}>
			{children}
		</form>
	);
}

export default Form;
