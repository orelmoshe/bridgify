import styled from 'styled-components';

export const InputContainer = styled.input`
	border: none;
	outline: none;
	padding-left: 14px;
	width: 100%;

	&::-webkit-input-placeholder {
		color: rgba(53, 66, 84, 0.38);
		font-size: 14px;
		width: 100%;
		font-family: Poppins;
	}
`;

export const SearchImage = styled.img`
	height: 24px;
	width: 24px;
	margin-left: 15px;
`;

interface InsideProps {
	showBorderLabel: boolean;
}
export const Inside = styled.div<InsideProps>`
	display: flex;
	align-items: center;
	width: 100%;
	margin: ${(props) => (props.showBorderLabel ? 'none' : 'auto')};
`;

interface SearchResultsProps {
	amountResults: number;
	displayList?: boolean;
}
export const SearchResults = styled.div<SearchResultsProps>`
	width: 100%;
	height: calc(${(props) => props.amountResults} * 50px);
	max-height: 250px;
	position: relative;
	bottom: 0px;
	z-index: 1000;
	box-shadow: 0 0 12px 0 rgba(53, 66, 84, 0.12);
	border-radius: 6px;
	overflow-y: auto;
	overflow-x: hidden;
`;

export const Row = styled.div`
	width: 100%;
	height: 50px;
	background-color: white;
`;

interface ContainerProps {
	containerHeight?: string;
	containerWidth?: string;
}
export const Container = styled.div<ContainerProps>`
	width: ${(props) => (props.containerWidth ? props.containerWidth : '100%')};
	height: ${(props) => (props.containerHeight ? props.containerHeight : '100%')};
`;

interface MainContainerProps {
	hideBorder?: boolean;
}

export const MainContainer = styled.div<MainContainerProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;
	border: ${(props) => (props.hideBorder ? 'none' : '1px solid rgba(53,66,84,0.12)')};
	border-radius: 4px;
	box-sizing: border-box;
	background-color: rgba(255, 255, 255, 1);
`;

interface DropDownArrowProps {
	arrowUp: boolean;
}
export const DropDownArrow = styled.img<DropDownArrowProps>`
	margin-right: 12px;
	transform: ${(props) => (props.arrowUp ? 'rotate(180deg)' : 'rotate(0deg)')};
	transition: transform 0.1s;
	cursor: pointer;
`;

export const BorderLabel = styled.div`
	display: flex;
	position: relative;
	left: -96px;
	top: -8px;
	height: fit-content;
	width: fit-content;
	padding: 0 5px;
	background-color: white;
	color: rgba(60, 75, 95, 0.38);
	font-size: 12px;
`;

export const CancelIcon = styled.img`
	margin-right: 16px;
	height: 18px;
	width: 18px;
	cursor: pointer;
`;
