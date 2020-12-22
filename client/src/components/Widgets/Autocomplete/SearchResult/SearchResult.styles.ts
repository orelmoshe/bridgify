import styled from 'styled-components';
import { constColors } from '../../../../consts/colors.const';

export const Container = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	padding-left: 50px;
	box-sizing: border-box;
	background-color: white;
	cursor: pointer;
	&:hover {
		background-color: ${constColors.GREY};
		box-shadow: ${constColors.BOX_SHADOW_DROP_DOWN_ITEM};
	}
`;
