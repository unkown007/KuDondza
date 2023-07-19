import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import ProfilePic from "../components/common/profilepic/ProfilePic";

const Home = () => {
    const router = useRouter();

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ProfilePic width = {50} height = {50}/>
        </View>
    )
}

export default Home