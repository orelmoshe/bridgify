import React, { useState, memo, useCallback } from 'react';
import SearchInput from './Input';
import SearchResult from './SearchResult';

interface SearchWrapperProps {
	selectedItem?: (any) => void;
	textPlaceholder: string;
	image?: string;
	rightImage?: string;
	setSelectedItem?: (any) => void;
	data: CountryCode[];
}

const SearchWrapper = (props: SearchWrapperProps) => {
	const { textPlaceholder, image, setSelectedItem, selectedItem, rightImage, data } = props;
	const [results, setResults] = useState([]);

	const filterFunction = useCallback(
		async (search: string) => {
			if (!search) {
				setResults(data);
			}
			const filterArray = data.filter((item) => item.name.toLowerCase().startsWith(search.toLowerCase()));

			setResults(filterArray);
		},
		[data]
	);

	const renderSearchResult = useCallback(
		(object: CountryCode, keyChange) => {
			return <SearchResult result={object} onChoose={keyChange} setSelectedItem={setSelectedItem} />;
		},
		[setSelectedItem]
	);

	return (
		<SearchInput
			selectedItem={selectedItem}
			results={results}
			filterFunction={filterFunction}
			renderComponent={renderSearchResult}
			image={image}
			rightImage={rightImage}
			textPlaceholder={textPlaceholder}
			showDropDownArrow={true}
			containerHeight="40px"
			containerWidth="400px"
			hideBorder={false}
		/>
	);
};

export default memo(SearchWrapper);
