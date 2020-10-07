import React from 'react';

// STYLE
import './TextInput.scss';

const TextInput = ({ id, label, placeholder, error, errorLabel, disabled, onChange }) => {
	return (
		<div className="TextInput">
			<p className="TextInput__label">{label}</p>
			<input
				id={id}
				className="TextInput__input"
				placeholder={placeholder}
				disabled={disabled}
				onChange={(e) => onChange(e.target.value)} />
			{ error ? <p className="TextInput__error">{errorLabel}</p> : null }
		</div>
	);
};

export { TextInput };
