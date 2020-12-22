import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const WrapperPlaces = styled.div`
	height: calc(100% - 70px);
	max-width: 990px;
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 1024px) {
		justify-content: center;
	}
`;

export const Title = styled.div`
	height: fit-content;
	width: fit-content;
	color: #16161d;
	font-family: Poppins;
	font-size: 40px;
	line-height: 59px;
`;

interface TextProps {
	isLink?: boolean;
}
export const Text = styled.div<TextProps>`
	height: fit-content;
	width: fit-content;
	color: #16161d;
	font-family: Poppins;
	font-size: 16px;
	line-height: 59px;
	${({ isLink }) =>
		isLink &&
		`
		color: #8181f5;
		cursor: pointer;
	`}
`;
