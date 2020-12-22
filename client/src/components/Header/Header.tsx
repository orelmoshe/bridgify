import React, { memo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Images from 'assets/images';
import { Container, Text, Logo } from './Header.styles';

interface HeaderProps {
	text: string;
	href: string;
}

const Header = (props: HeaderProps) => {
	const { text, href } = props;
	const history = useHistory();

	const goTo = useCallback(() => {
		history.push(href);
	}, [history, href]);

	return (
		<Container>
			<Logo src={Images.logo_trip} />
			<Text onClick={goTo}>{text}</Text>
		</Container>
	);
};

export default memo(Header);
