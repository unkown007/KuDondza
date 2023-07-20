import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import {COLORS, icons, images, SIZES } from '../constants'
import { 
    HeaderBtn, InputField, Button
} from "../components";
import { back } from "../constants/icons";

const Home = () => {
    const router = useRouter();

    const handlePressBack=()=>{
        router.back();
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HeaderBtn iconUrl={back} dimension="60%" handlePress={handlePressBack}/>
                    ),
                    headerTitle: "Registo",
                    headerTitleAlign: "center",
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: 5,
                    paddingHorizontal: 10
                }}
            >
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                        backgroundColor: COLORS.white
                    }}>

                </View>
                <Text style={{fontSize: 18, fontWeight:'bold'}}>Dados Pessoais</Text>
                <View style={{marginVertical: 20}}>
                    <InputField
                        placeholder="Digite o nome"
                        label="Nome"
                    />
                    <InputField
                        placeholder="Digite a password"
                        label="Password"
                        password
                    />
                    <Button  title="registar"/>
                    <Text
                        onPress={() => navigation.navigate('Login')}
                        style={{
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 'bold'
                        }}>
                        Ja tem uma conta? Login
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;