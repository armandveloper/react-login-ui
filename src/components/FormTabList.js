import React from 'react';
import FormTab from './FormTab';

function FormTabList({ currentTab, setCurrentTab }) {
	return (
		<ul className="form-tab-list">
			<FormTab
				tabId="login"
				setCurrentTab={setCurrentTab}
				text="sign in"
				isSelected={currentTab === 'login' ? true : false}
			/>
			<FormTab
				tabId="register"
				setCurrentTab={setCurrentTab}
				text="sign up"
				isSelected={currentTab === 'register' ? true : false}
			/>
		</ul>
	);
}

export default FormTabList;
