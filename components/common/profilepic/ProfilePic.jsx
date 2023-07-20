import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import imageContainer from './ProfilePic.style';


const ProfilePic = ({image, width, height}) => {
    return(
        <View>
            <TouchableOpacity>
                <Image 
                    source={image}
                    style = {imageContainer.dimensions(width, height)}
                />
            </TouchableOpacity>
        </View>
    );
};


export default ProfilePic
