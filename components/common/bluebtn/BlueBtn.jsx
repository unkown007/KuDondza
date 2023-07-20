import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './BlueBtn.style';
import { COLORS } from '../../../constants/theme'

const BlueBtn = ({ width, height, text, fontsize, onPress = () => {}}) => {
  return (
    
      <View>
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btnContainer(width, height)}
            onPress={onPress}
        >
            <Text style={{ color: COLORS.white, fontSize: fontsize }}>{text}</Text>
        </TouchableOpacity>
      </View>
  );
};

export default BlueBtn

