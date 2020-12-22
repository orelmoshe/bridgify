import styled from 'styled-components';

export const Container = styled.div`
	height: 70px;
	width: calc(100% - 10px - 10px);
	padding: 0 10px;
	max-width: 990px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.img`
	height: 36px;
	width: 36px;
`;

export const Text = styled.div`
	height: fit-content;
	width: fit-content;
	color: #16161d;
	font-family: Poppins;
	font-size: 16px;
	line-height: 59px;
	color: #8181f5;
	cursor: pointer;
`;
