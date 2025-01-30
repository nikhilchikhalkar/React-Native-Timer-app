import React from 'react';
import {View, Dimensions} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';

const DeleteIcon = ({size = 28, color = 'black'}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      
    >
      <Path d="M3 6h18M9 6v14M15 6v14M5 6l1-1h12l1 1M7 4h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    </Svg>
  );
};

export default DeleteIcon;
