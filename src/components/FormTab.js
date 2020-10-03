import React from 'react';

function FormTab({ tabId, text, isSelected, setCurrentTab }) {
	return (
		<li
			className={isSelected ? 'tab-item selected' : 'tab-item'}
			onClick={() => setCurrentTab(tabId)}
		>
			<button className="form-tab">{text}</button>
		</li>
	);
}

export default FormTab;
