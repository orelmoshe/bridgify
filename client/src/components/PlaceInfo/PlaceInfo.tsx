import React from 'react';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { IAppState } from 'redux/state';
import Header from 'components/Header';
import { Container, Card, WrapperImg, Img, Details, NamePlace, WrapperText, BoldText, NormalText, InfoText } from './PlaceInfo.styles';

interface PlaceInfoProps {
	placeDetailsRedux?: PlaceInterface;
}

const PlaceInfo = (props: PlaceInfoProps) => {
	const { placeDetailsRedux } = props;
	return (
		<Container>
			{isEmpty(placeDetailsRedux) && <Redirect to={{ pathname: '/places' }} />}
			<Header text="back to places" href="/places" />
			{!isEmpty(placeDetailsRedux) && (
				<Card>
					<WrapperImg>
						<Img src={placeDetailsRedux.image} />
					</WrapperImg>

					<Details>
						<NamePlace>{placeDetailsRedux.name}</NamePlace>

						<WrapperText>
							<BoldText>Xid: &nbsp;</BoldText>
							<NormalText>{placeDetailsRedux.xid}</NormalText>
						</WrapperText>

						<WrapperText>
							<BoldText>City: &nbsp;</BoldText>
							<NormalText>{placeDetailsRedux.city}</NormalText>
						</WrapperText>

						<WrapperText>
							<BoldText>Address: &nbsp;</BoldText>
							<NormalText>{placeDetailsRedux.address}</NormalText>
						</WrapperText>

						<WrapperText>
							<BoldText>Kinds: &nbsp;</BoldText>
							<NormalText>{placeDetailsRedux.kinds}</NormalText>
						</WrapperText>

						<WrapperText>
							<BoldText>Map: &nbsp;</BoldText>
							<NormalText>
								<a href={placeDetailsRedux.link_map} rel="noopener noreferrer" target="_blank">
									{placeDetailsRedux.link_map ? 'click here' : '---'}
								</a>
							</NormalText>
						</WrapperText>

						<WrapperText>
							<BoldText>Wikipedia: &nbsp;</BoldText>
							<NormalText>
								<a href={placeDetailsRedux.wikipedia} rel="noopener noreferrer" target="_blank">
									{placeDetailsRedux.wikipedia ? 'click here' : '---'}
								</a>
							</NormalText>
						</WrapperText>

						<WrapperText>
							<BoldText>Point: &nbsp;</BoldText>
							<NormalText>
								lon: {placeDetailsRedux.point?.lon} , lat: {placeDetailsRedux.point?.lat}{' '}
							</NormalText>
						</WrapperText>

						{placeDetailsRedux.info && (
							<WrapperText>
								<BoldText>Info: &nbsp;</BoldText>
								<InfoText dangerouslySetInnerHTML={{ __html: placeDetailsRedux.info?.text }} />
							</WrapperText>
						)}
					</Details>
				</Card>
			)}
		</Container>
	);
};

const mapStateToProps = (state: IAppState) => {
	return {
		placeDetailsRedux: state.placeSelected.placeSelected,
	};
};

export default connect(mapStateToProps, undefined)(PlaceInfo);
