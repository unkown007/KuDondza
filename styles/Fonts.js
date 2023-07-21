import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
const loadFonts = async () => {
  await Font.loadAsync({
    'FiraSans-Regular': require('assets/fonts/FiraSans-Regular.ttf'),
    'FiraSans-Bold': require('assets/fonts/FiraSans-Bold.ttf'),
  });
};

loadFonts();

const CustomFont = {
  fontFamily: 'FiraSans-Regular',
};

export default CustomFont;


/*const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    setIsFontLoaded(true);
  }, []);

  if (!isFontLoaded) {
    return null;
  }
*/