import React, { useState, useCallback, useEffect, memo } from 'react';
import { InputContainer, SearchImage, SearchResults, Row, Container, MainContainer, DropDownArrow, BorderLabel, Inside, CancelIcon } from './Input.styles';
import Images from '../../../../assets/images';
import useComponentVisible from '../../../../hooks/IsComponentVisible/IsComponentVisible';

interface InputProps {
	selectedItem?: any;
	results?: CountryCode[];
	filterFunction: (inputSearch) => void;
	renderComponent: (object, onKeyChange) => React.ReactNode;
	image: any;
	textPlaceholder: string;
	showDropDownArrow?: boolean;
	containerHeight?: string;
	containerWidth?: string;
	showBorderLabel?: boolean;
	borderLabelText?: string;
	displayList?: boolean;
	rightImage?: any;
	hideBorder?: boolean;
}

const Input = (props: InputProps) => {
	const {
		selectedItem,
		results,
		filterFunction,
		renderComponent,
		image,
		textPlaceholder,
		showDropDownArrow,
		containerHeight,
		containerWidth,
		showBorderLabel,
		borderLabelText,
		displayList,
		rightImage,
		hideBorder,
	} = props;
	const [inputSearch, setInputSearch] = useState(selectedItem || '');
	const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

	useEffect(() => {
		setInputSearch(selectedItem || '');
	}, [selectedItem]);

	const onKeyChange = useCallback(
		(key) => {
			setInputSearch(key);
			setIsComponentVisible(key !== '');
		},
		[setIsComponentVisible]
	);

	const onArrowClick = useCallback(() => {
		setIsComponentVisible(!isComponentVisible);
	}, [isComponentVisible, setIsComponentVisible]);

	const onSearchFocus = useCallback(() => {
		setIsComponentVisible(true);
	}, [setIsComponentVisible]);

	const onClearClick = useCallback(() => {
		setInputSearch('');
		filterFunction('');
	}, [filterFunction]);

	const handleChange = useCallback(
		(event) => {
			if (/^[a-zA-Z]+$/.test(event.target.value) || event.target.value === '') {
				filterFunction(event.target.value);
				onKeyChange(event.target.value);
			}
		},
		[filterFunction, onKeyChange]
	);

	const handleClickRow = useCallback(() => {
		setIsComponentVisible(false);
	}, [setIsComponentVisible]);

	return (
		<Container ref={ref} containerHeight={containerHeight} containerWidth={containerWidth}>
			<MainContainer ref={ref} hideBorder={hideBorder}>
				{showBorderLabel && <BorderLabel>{borderLabelText}</BorderLabel>}
				<Inside showBorderLabel={showBorderLabel}>
					<SearchImage src={image} />
					<InputContainer placeholder={textPlaceholder} onChange={handleChange} value={inputSearch} onFocus={onSearchFocus} />
					{rightImage && <CancelIcon src={rightImage} onClick={onClearClick} />}
					{showDropDownArrow && <DropDownArrow src={Images.dropdown} onClick={onArrowClick} arrowUp={isComponentVisible} />}
				</Inside>
			</MainContainer>
			{displayList !== false && isComponentVisible && (
				<SearchResults amountResults={results.length} displayList={displayList}>
					{results.map((value: CountryCode, index: number) => (
						<Row key={`SEARCH_${index}`} onClick={handleClickRow}>
							{renderComponent(value, onKeyChange)}
						</Row>
					))}
				</SearchResults>
			)}
		</Container>
	);
};

export default memo(Input);
