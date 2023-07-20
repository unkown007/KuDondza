import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import imageContainer from './ProfilePic.style';
import R from "../../../assets/icons/R.png"

const ProfilePic = ({width, height}) => {
    return(
        <View>
            <TouchableOpacity>
                <Image 
                    source={R}
                    style = {imageContainer.dimensions(width, height)}
                />
            </TouchableOpacity>
        </View>
    );
};


export default ProfilePic
