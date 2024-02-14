import {Dimensions, StatusBar} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const {height: deviceHeight} = Dimensions.get('screen');

const statusBarHeight = StatusBar.currentHeight;

export {screenWidth, screenHeight, deviceHeight, statusBarHeight};
