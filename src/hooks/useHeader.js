import { useEffect, useState } from 'react';
import { useHeaderContext } from '../context/HeaderContext';

const useHeader = () => {
	const [header, setHeader] = useState({});

	const { showHeader, handleShowHeader, handleHideHeader } = useHeaderContext();

	useEffect(() => {
		setHeader(showHeader);
	}, [showHeader]);

	return { header, handleShowHeader, handleHideHeader };
};

export default useHeader;
