import React, { memo, useRef, useCallback } from 'react';
import { Container, Input } from './SearchInput.styles';
import _ from 'lodash';
interface SearchInputProps {
	list: PlaceInterface[];
	setFilter: (list: PlaceInterface[]) => void;
}

const SearchInput = (props: SearchInputProps) => {
	const { list, setFilter } = props;
	const inputRef = useRef(null);

	const filter = useCallback(() => {
		const filterLIst = _.filter(list, (item: PlaceInterface) => {
			return item.name.toLocaleLowerCase().includes(inputRef.current.value.toLocaleLowerCase());
		});
		setFilter(filterLIst);
	}, [inputRef, list, setFilter]);

	return (
		<Container>
			<Input type="text" placeholder="Search" ref={inputRef} onKeyUp={filter} />
		</Container>
	);
};

export default memo(SearchInput);
