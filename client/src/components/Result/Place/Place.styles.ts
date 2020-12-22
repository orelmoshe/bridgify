import styled from 'styled-components';

export const Container = styled.div`
	height: 390px;
	width: 320px;
	margin: 5px;
	border-radius: 16px;
	background-color: #ffffff;
	box-shadow: 0 4px 16px -10px rgba(22, 22, 29, 0.42);
	cursor: pointer;
	&:hover {
		box-shadow: 0 2px 10px 2px gray;
	}
`;

export const CoverImg = styled.img`
	height: 160px;
	width: 100%;
	border-radius: 16px 16px 0 0;
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
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const WrapperText = styled.div`
	height: 24px;
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
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
