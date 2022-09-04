import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

export const UserContextProvider = ({
	children,
	initialState = { user: null, isLoading: true, error: null, headerShow: true },
}) => {
	const [state, setState] = useState(initialState);
	// const { getData } = useAsyncStorage();

	useEffect(() => {
		// getData('USER_DATA').then(us => {
		// 	if (us) {
		// 		console.log('USER DATA', us);
		// 		setState({
		// 			...state,
		// 			user: JSON.parse(us),
		// 			isLoading: false,
		// 			error: null,
		// 		});
		// 	} else {
		// 		setState({ ...state, user: null, isLoading: false, error: null });
		// 	}
		// });
		setState({ ...state, user: null, isLoading: false, error: null });
	}, []);

	const setUser = data => {
		setState({ ...state, user: data, isLoading: false, error: null });
	};

	const setHeaderShow = (data) => {
		setState({ ...state, headerShow: data });
	}

	const handleReload = async () => {
		try {
			// await reload();
			// const user = getUser();
			// setState({ user, isLoading: false, error: null });
		} catch (error) {
			setState({ ...state, user: null, isLoading: false, error });
		}
	};

	const value = {
		...state,
		reload: handleReload,
		setUser,
		setHeaderShow
	};

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserContextProvider.propTypes = {
	children: PropTypes.node,
	initialState: PropTypes.object,
};

export const useUserContext = () => {
	const userContext = useContext(UserContext);

	if (typeof userContext === 'undefined') {
		throw new Error('useUserContext must be used within a UserContextProvider');
	}

	return userContext;
};
