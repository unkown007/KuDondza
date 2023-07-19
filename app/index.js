
import { View, Text } from "react-native";
import Footer from "../components/common/footer/footerComponent/Footer";
import Input from "../components/common/input/Input";
import { useState } from "react";
import inputStyles from "../components/common/input/Input.Style";

       

import { useState } from "react";
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import {COLORS, icons, images, SIZES } from '../constants'
import { 
    HeaderBtn, HeaderTitle
} from "../components";


const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
       
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HeaderBtn iconUrl={icons.back} dimension="60%"/>
                    ),
                }}
            />
        </SafeAreaView>

    )
};

export default Home;