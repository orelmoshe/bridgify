import React, { useCallback, memo } from 'react';
import { Container } from './SearchResult.styles';

interface SearchResultProps {
	result: CountryCode;
	onChoose: (key) => void;
	setSelectedItem?: (any) => void;
}

const SearchResult = (props: SearchResultProps) => {
	const { result, onChoose, setSelectedItem } = props;

	const handleClick = useCallback(
		(resultItem) => () => {
			onChoose(resultItem.name);
			setSelectedItem(resultItem.code);
		},
		[onChoose, setSelectedItem]
	);

	return <Container onClick={handleClick(result)}>{result.name}</Container>;
};

export default memo(SearchResult);
