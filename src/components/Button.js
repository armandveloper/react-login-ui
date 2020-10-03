import React from 'react';

function Button({ text, isLink }) {
	return isLink ? (
		<a href="!#" className="button">
			{text}
		</a>
	) : (
		<button className="button">{text}</button>
	);
}

export default Button;
