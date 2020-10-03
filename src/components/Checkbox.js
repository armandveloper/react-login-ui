import React from 'react';

function Checkbox({ label, name }) {
	return (
		<div className="checkbox-container">
			<label htmlFor={name}>
				<input className="checkbox" type="checkbox" id={name} />
				<span>{label}</span>
			</label>
		</div>
	);
}

export default Checkbox;
