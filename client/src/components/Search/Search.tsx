import React, { memo, useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataService from 'services/data.service';
import { massageErrors } from 'consts/text.const';
import Spinner from 'components/Widgets/Spinner';
import { Container, Title, Input, Button, MassageError } from './Search.styles';
import SearchWrapper from 'components/Widgets/Autocomplete';
import Images from 'assets/images';
import countries from './countries.json';

const Search = () => {
	const history = useHistory();
	const [spinner, setSpinner] = useState(false);
	const [massageError, setMassageError] = useState(null);
	const [country, setCountry] = useState('');
	const cityRef = useRef(null);
	const radiusRef = useRef(null);

	const checkValid = useCallback((): Boolean => {
		const city = cityRef.current.value;
		if (country === '' && city === '') {
			setMassageError(massageErrors.FIELDS_ARE_REQUIRED);
			return false;
		} else if (country === '') {
			setMassageError(massageErrors.COUNTRY_IS_REQUIRED);
			return false;
		} else if (city === '') {
			setMassageError(massageErrors.CITY_IS_REQUIRED);
			return false;
		} else {
			return true;
		}
	}, [country, cityRef, setMassageError]);

	const handleClick = useCallback(async (): Promise<void> => {
		try {
			if (!checkValid()) {
				return;
			}
			setSpinner(true);
			const ds = new DataService();
			const city = cityRef.current.value;
			const radius = radiusRef.current.value === '' ? '500' : radiusRef.current.value;
			const placesList: PlaceInterface[] = await ds.GetPlacesTable(country, city, radius);
			setSpinner(false);
			if (placesList !== undefined) {
				localStorage.setItem('placesList', JSON.stringify(placesList));
				setMassageError(null);
				history.push('/places');
			} else {
				toast.configure();
				toast.error(massageErrors.FAILED_SEARCH_PLACE, {
					position: toast.POSITION.TOP_CENTER,
				});
			}
		} catch (ex) {
			const err = `Failed while trying to click for search, Error:${JSON.stringify(ex)}`;
			console.error(err);
		}
	}, [setSpinner, history, setMassageError, country, cityRef, radiusRef, checkValid]);

	return (
		<Container>
			{spinner && <Spinner />}
			<Title>Plan A Trip</Title>
			<SearchWrapper textPlaceholder="country*" image={Images.search} rightImage={Images.clear} setSelectedItem={setCountry} data={countries} />
			<Input type="text" placeholder="city*" ref={cityRef} />
			<Input type="number" placeholder="radius (m')" ref={radiusRef} />
			<MassageError>{massageError}</MassageError>
			<Button onClick={handleClick}>SEARCH</Button>
		</Container>
	);
};

export default memo(Search);
