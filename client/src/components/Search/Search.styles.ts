import styled from 'styled-components';
import Images from 'assets/images';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url(${Images.backgroundSearch});
	background-size: cover;
`;

export const Title = styled.div`
	height: 80px;
	width: fit-content;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	color: white;
	font-family: Poppins;
	font-size: 60px;
	font-weight: 600;
	line-height: 44px;
`;

export const Input = styled.input`
	height: 40px;
	width: calc(400px - 16px - 16px);
	padding: 0 16px;
	border-radius: 4px;
	border: none;
	margin-top: 16px;
	outline: none;
	@media (max-width: 600px) {
		width: calc(300px - 16px - 16px);
	}
`;

export const Button = styled.div`
	height: 40px;
	width: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 16px;
	font-family: Poppins;
	color: white;
	border-radius: 4px;
	background-color: gray;
	cursor: pointer;
`;

export const MassageError = styled.div`
	height: 20px;
	width: 400px;
	color: white;
	font-family: Poppins;
	font-size: 14px;
	font-weight: 400;
	@media (max-width: 600px) {
		width: 300px;
	}
`;
