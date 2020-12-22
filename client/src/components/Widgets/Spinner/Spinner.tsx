import React, { memo } from 'react';
import { Container, CenterScreen } from './Spinner.styles';
import Images from '../../../assets/images';

const Spinner = () => (
	<Container>
		<CenterScreen src={Images.spinner} />
	</Container>
);

export default memo(Spinner);
