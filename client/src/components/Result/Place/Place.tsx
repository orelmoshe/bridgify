import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPlaceCurrent } from 'redux/actions/place.action';
import { Container, CoverImg, Details, NamePlace, WrapperText, BoldText, NormalText } from './Place.styles';

interface PlaceProps {
	place: PlaceInterface;
	setPlaceCurrentRedux: (payload: PlaceInterface) => void;
}

const Place = (props: PlaceProps) => {
	const { place, setPlaceCurrentRedux } = props;
	const history = useHistory();

	const handleClick = useCallback((): void => {
		setPlaceCurrentRedux(place);
		history.push(`/${place.xid}`);
	}, [history, place, setPlaceCurrentRedux]);

	return (
		<Container onClick={handleClick}>
			<CoverImg src={place.image} />
			<Details>
				<NamePlace>{place.name}</NamePlace>

				<WrapperText>
					<BoldText>City: &nbsp;</BoldText>
					<NormalText>{place.city}</NormalText>
				</WrapperText>

				<WrapperText>
					<BoldText>Address: &nbsp;</BoldText>
					<NormalText>{place.address}</NormalText>
				</WrapperText>

				<WrapperText>
					<BoldText>Kinds: &nbsp;</BoldText>
					<NormalText>{place.kinds}</NormalText>
				</WrapperText>

				<WrapperText>
					<BoldText>Map: &nbsp;</BoldText>
					<NormalText>
						<a href={place.link_map} rel="noopener noreferrer" target="_blank">
							{place.link_map ? 'click here' : '---'}
						</a>
					</NormalText>
				</WrapperText>

				<WrapperText>
					<BoldText>Wikipedia: &nbsp;</BoldText>
					<NormalText>
						<a href={place.wikipedia} rel="noopener noreferrer" target="_blank">
							{place.wikipedia ? 'click here' : '---'}
						</a>
					</NormalText>
				</WrapperText>

				<WrapperText>
					<BoldText>Point: &nbsp;</BoldText>
					<NormalText>
						lon: {place.point?.lon} , lat: {place.point?.lat}{' '}
					</NormalText>
				</WrapperText>
			</Details>
		</Container>
	);
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		setPlaceCurrentRedux: (payload: PlaceInterface) => setPlaceCurrent(dispatch, payload),
	};
};

export default connect(undefined, mapDispatchToProps)(Place);
