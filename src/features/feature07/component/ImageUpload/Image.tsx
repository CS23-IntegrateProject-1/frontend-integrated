import { createIcon } from '@chakra-ui/icons';
import FigImage from './FigImage';

export const Image = createIcon({
  displayName: 'CustomFigmaIcon',
  viewBox: '0 0 200 200',
  path: (
    <FigImage width={150} height={150} color="currentColor" />
  ),
});


