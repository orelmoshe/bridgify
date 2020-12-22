import React, { memo, useState } from 'react';
import { map, isEmpty } from 'lodash';
import { massageErrors } from 'consts/text.const';
import SearchInput from 'components/Widgets/SearchInput';
import Header from 'components/Header';
import Place from './Place';
import { Container, WrapperPlaces, Title, Text } from './Result.styles';

const Result = () => {
	const placesList: PlaceInterface[] = JSON.parse(localStorage.getItem('placesList')) || null;
	const [searchList, setSearchList] = useState(placesList);

	return (
		<Container>
			<Header text="back to home" href="/" />
			<Title>Places Report</Title>
			<SearchInput list={placesList} setFilter={setSearchList} />
			<WrapperPlaces>
				{searchList &&
					map(searchList, (place, index) => {
						return <Place key={`Place_${index}`} place={place} />;
					})}
				{isEmpty(placesList) && <Text>{massageErrors.EMPTY_LIST}</Text>}

				{isEmpty(searchList) && <Text>{massageErrors.NOT_FOUND_RESULTS}</Text>}
			</WrapperPlaces>
		</Container>
	);
};

export default memo(Result);
