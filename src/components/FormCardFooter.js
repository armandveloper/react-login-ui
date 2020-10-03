import React from 'react';

function FormCardFooter({ currentTab }) {
	return currentTab === 'login' ? (
		<div className="form-card-footer">
			<a href="!#" className="link">
				Forgot Password?
			</a>
			<p className="or">or</p>
			<p className="form-card-text">
				Don't have an account?{' '}
				<a href="!#" className="link">
					Sign up instead
				</a>
			</p>
		</div>
	) : (
		<div className="form-card-footer">
			<p className="form-card-text">
				Already have an account?{' '}
				<a href="!#" className="link">
					Sign in instead
				</a>
			</p>
		</div>
	);
}

export default FormCardFooter;
