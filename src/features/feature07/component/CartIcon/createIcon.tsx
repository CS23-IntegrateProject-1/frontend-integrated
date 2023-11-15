import { createIcon } from '@chakra-ui/icons';
import Cart from './FigCart';

export const CustomCartIcon = createIcon({
  displayName: 'CustomFigmaIcon',
  viewBox: '0 0 200 200',
  path: (
    <Cart width={150} height={150} color="currentColor" />
  ),
});


