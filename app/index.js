import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import {COLORS, icons, images, SIZES } from '../constants'
import { back } from "../constants/icons";
//import { HeaderBtn, InputField, Button} from "../components";
import Login from "./Login";
import PostDoubt from "./PostDoubt";
import { 
    HeaderBtn, InputField, Button, DropDown, DateTime, Loader
} from "../components";
import { Keyboard } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import PostDoubtProposal from "./PostDoubtProposal";
import DoubtCard from "../components/DoubtCard";
import Feed from "./Feed";



const Home = ({navigation}) => {
    return(
        <SafeAreaView>
        </SafeAreaView>
    )

}

export default Home;