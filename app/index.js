import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {COLORS} from '../constants/theme'
import ProfilePic from "../components/common/profilepic/ProfilePic";

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ProfilePic width = {50} height = {50}/>
        </View>
    )
    }
export default Home