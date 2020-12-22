import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const useComponentVisible = (initialIsVisible) => {
	const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
	const ref = useRef(null);

	const handleClickOutside = useCallback(
		(event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsComponentVisible(false);
			}
		},
		[ref]
	);

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});

	return useMemo(() => {
		return { ref, isComponentVisible, setIsComponentVisible };
	}, [ref, isComponentVisible, setIsComponentVisible]);
};

export default useComponentVisible;
