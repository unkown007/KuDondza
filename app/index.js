import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import {COLORS, icons, images, SIZES } from '../constants'
import { back } from "../constants/icons";
import { HeaderBtn, InputField, Button} from "../components";
import Login from "./Login";
import PostDoubt from "./PostDoubt";

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
             <PostDoubt/>
        </SafeAreaView>

    )
};

export default Home;