import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 768px) {
		height: fit-content;
	}
`;

export const Card = styled.div`
	height: fit-content;
	width: 100%;
	max-width: 960px;
	border-radius: 8px;
	background-color: #ffffff;
	box-shadow: 0 2px 8px 0 rgba(45, 53, 66, 0.16);
`;

export const WrapperImg = styled.div`
	height: 315px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f5f8fd;
	border-radius: 8px 8px 0 0;
`;

export const Img = styled.img`
	height: 315px;
	width: 324px;
	border-radius: 8px;
	background-color: #ffffff;
	box-shadow: 0 2px 8px 0 rgba(45, 53, 66, 0.16);
`;

export const Details = styled.div`
	height: calc(100% - 160px);
	width: calc(100% - 10px - 10px);
	padding: 0 10px;
	border-radius: 0 0 16px 16px;
`;

export const NamePlace = styled.div`
	height: fit-content;
	width: 100%;
	color: #161620;
	font-family: Poppins;
	font-size: 30px;
	line-height: 44px;
`;

export const WrapperText = styled.div`
	height: fit-content;
	width: 100%;
	display: flex;
`;

export const BoldText = styled.div`
	color: #191935;
	font-family: Poppins;
	font-size: 14px;
	line-height: 24px;
`;

export const NormalText = styled.div`
	opacity: 0.5;
	color: #1c1e52;
	font-family: Poppins;
	font-size: 14px;
	line-height: 24px;
`;

export const InfoText = styled.div`
	opacity: 0.5;
	color: #1c1e52;
	font-family: Poppins;
	font-size: 14px;
	line-height: 24px;
`;
