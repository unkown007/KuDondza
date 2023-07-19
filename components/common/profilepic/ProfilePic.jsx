
import react from "react";
import { View, Image, TouchableOpacity } from "react-native";
import imageContainer from "./ProfilePic.style";

const ProfilePic = ({width, height}) => {
    return(
        <View>
            <TouchableOpacity>
                <Image 
                    source={require('assets/icons/icons8-close-24.png')}
                    style = {imageContainer.dimensions(width, height)}
                />
            </TouchableOpacity>
        </View>
    );
};

export default ProfilePic
