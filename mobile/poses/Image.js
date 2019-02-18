import React from 'react';
import posed from 'react-native-pose';

const WreckImage = posed.Image({
    visible:{opacity:1},
    hidden:{opacity:0},
})

export default ({isVisible}) => (
    <WreckImage pose={isVisible ? 'visible' : 'hidden'} />
)