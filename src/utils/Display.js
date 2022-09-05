import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const setHeight = h => (height / 100) * h;
export const setWidth = w => (width / 100) * w;

// export default {setHeight, setWidth};
