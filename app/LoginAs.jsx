import { SafeAreaView, Text, View, StyleSheet, ScrollView} from "react-native"
import Logo from "../components/Logo";
import LoginCard from "../components/common/loginCard/LoginCard";
import { COLORS } from "../constants";
import HeaderBtn from "../components/common/header/headerbtn/HeaderbBtn";
import { useRouter, Stack } from "expo-router";
import { back,  backBlue} from "../constants/icons";
import { useState } from "react";

const LoginAs=()=>{
    const [cardActive1, setCardactive1] = useState(null);
    const [cardActive2, setCardactive2] = useState(null);
    const router = useRouter();


    const handlePressBack=()=>{
        router.back();
    }

    const clickCard1=()=>{
        setCardactive1(true);
        setCardactive2(false);
        router.push("/register");

    }

    const clickCard2=()=>{
        setCardactive1(false);
        setCardactive2(true);
        router.push("/register");
    }

    return(
       <SafeAreaView>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerTitleAlign: "left",
                }}
            />
            <ScrollView  showsVerticalScrollIndicator={false}>
                <View style={styles.logo}>
                    <Logo color={COLORS.blue}/>
                </View>
                <View style={styles.body}>
                    {/* ver sobre stack */}
                    <View style={styles.header}>
                        <HeaderBtn
                            iconUrl={back}
                            dimension="60%"
                            handlePress={handlePressBack}
                        />
                        {/* <Text style={{color:COLORS.blue}}>voltar</Text> */}
                    </View> 
                    <View style={styles.cards}>
                        <Text style={{marginBottom:40}}>Registar Como:</Text>
                        <LoginCard
                            role={"Estudante"}
                            text={"Publica as dúvidas que possui com uma proposta de valor a pagar pela tutoria"}
                            state={cardActive1}
                            onPressCard={clickCard1}
                        />

                        <LoginCard
                            role={"Tutor"}
                            text={"Responde às publicações e propostas dos estudantes e realiza sessões de tutoria com os estudantes"}
                            state={cardActive2}
                            onPressCard={clickCard2}
                        />
                    </View>
                </View>
            </ScrollView>
           
       </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    logo: {
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center",
        height:170,
        backgroundColor: COLORS.white,
    },

    header:{
        paddingLeft:15,
        marginTop:10,
        flexDirection: "row",
        alignItems:"center",
    },

    body:{
        backgroundColor: COLORS.white,
        borderTopWidth:1,
    },

    cards:{

        paddingTop:10,
        flexDirection: 'column',
        alignItems:"center",
        paddingBottom:60
    }

})

export default LoginAs;