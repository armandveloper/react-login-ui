import React, { useState } from 'react';
import FormTabList from './FormTabList';
import FormCardView from './FormCardView';

function FormCard() {
	const [currentTab, setCurrentTab] = useState('login');

	return (
		<div className="form-card">
			<FormTabList
				setCurrentTab={setCurrentTab}
				currentTab={currentTab}
			/>
			<FormCardView currentTab={currentTab} />
		</div>
	);
}

export default FormCard;
