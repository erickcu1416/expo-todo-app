import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const AlertContext = createContext({name: 'Alert',});

export const AlertContextProvider = ({
	children,
	initialState = { showAlert: false, title: '', subtitle: '', success: false },
}) => {
	const [state, setState] = useState(initialState);

	// Listen to Firebase authentication state changes
	useEffect(() => {
		
	}, []);

	const handleShowAlert = data => {
		setState({ ...state, showAlert: true, title: data.title, subtitle: data.subtitle, success: data.success ? data.success : false} );
	};

	const handleHideAlert = (data) => {
		setState({ ...state, showAlert: false, success: false });
	}


	const value = {
		...state,
		handleShowAlert,
		handleHideAlert
	};

	return <AlertContext.Provider value={value}>{children}</AlertContext.Provider>;
};

AlertContextProvider.propTypes = {
	children: PropTypes.node,
	initialState: PropTypes.object,
};

export const useAlertContext = () => {
	const alertContext = useContext(AlertContext);

	if (typeof alertContext === 'undefined') {
		throw new Error('useAlertContext must be used within a AlertContextProvider');
	}

	return alertContext;
};
