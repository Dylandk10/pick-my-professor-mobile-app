

 import React from 'react';
 import {Image, Dimensions} from 'react-native';

 const Header = () => {
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * (9 / 16));
    const imageWidth = dimensions.width;
   return (
    <Image source={require('./../assests/header.png')} style={{height: imageHeight, width: imageWidth, resizeMode: 'contain'}} />
   );
 };
 
 
 export default Header