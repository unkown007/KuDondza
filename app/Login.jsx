import { SafeAreaView, TouchableOpacity } from "react-native";
import Logo from "../components/Logo";
import { View, Text } from "react-native";
import { SIZES, COLORS } from "../constants";
import { InputField } from "../components";
import Button from "../components/common/button/Button";
import Google from "../assets/icons/google_1.png";
import FooterIcon from "../components/common/footer/FooterIcon/FooterIcon";
import { Link, Stack } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

const Login = () => {
    const [clickedReg, setClickedReg] = useState(false);
    const [clickedForgot, setClickedForgot] = useState(false);

    const handleclickGoogle=()=>{

    }

    const onclickBtn=()=>{

    }

    return(
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerTitle: "Login",
                    headerTitleAlign: "left",
                }}
            />
            <ScrollView  showsVerticalScrollIndicator={false}>
                <LinearGradient 
                    style={{
                        flexDirection: 'row',
                        justifyContent:"center",
                        alignItems:"center",                 
                        backgroundColor:COLORS.blue,
                        height: 170,
                    }}    
                    colors={[COLORS.blue, 'white']}
                >
                    <Logo color={"white"}/>

                </LinearGradient>

                <View style={{marginVertical: 25, flexDirection:"column", justifyContent:"center", backgroundColor: COLORS.white}}>
                        <View style={{paddingLeft:20, paddingRight:20}}>
                            <InputField
                                placeholder="Introduza aqui"
                                label="Email ou Nome de Usuário"
                            />
                            <InputField
                                placeholder="introduza aqui"
                                label="Palavra-passe"
                                password
                            />
                            <Link href={"/ForgotPassword"}
                                onPress={() => setClickedReg(true)}
                                style={{textAlign:"right"}}
                            >                                               
                                <Text style={clickedReg ? {color:COLORS.blue} : {}}>
                                    Esqueceu-se da palavra-passe?
                                </Text>
                            </Link>                      
                            <Button  title="Login" w={"100%"} h={40} fontSize={20}/>
                        </View>
                

                    <View style={{alignItems:"center", flexDirection:"column", marginTop:20}}>
                        <Text style={{marginBottom:10}}>Ou fazer Login usando</Text>
                        <FooterIcon source={Google} dimension={30} handleclick={handleclickGoogle}/>
                    </View>
                    
                    <View style={{flexDirection:"row",  justifyContent:"center",marginTop:20}}>
                        <Text style={{marginRight:20}}>Não possui conta?</Text>
                        <Link href="/LoginAs" onPress={() => setClickedReg(true)}>
                            <Text 
                                style={
                                    clickedReg ? {color:COLORS.blue, textDecorationLine:'underline'} : {}
                                }
                            >
                                Registe-se
                            </Text>
                        </Link>
                    </View>
                </View>
    
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Login;