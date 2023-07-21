import { SafeAreaView, TouchableOpacity } from "react-native";
import Logo from "../components/Logo";
import { View, Text, Alert } from "react-native";
import { SIZES, COLORS } from "../constants";
import { InputField } from "../components";
import Button from "../components/common/button/Button";
import Google from "../assets/icons/google_1.png";
import FooterIcon from "../components/common/footer/FooterIcon/FooterIcon";
import { Link, Stack } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Keyboard } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { user } from "../constants/icons";


const Login = ({navigation}) => {
    const [clickedReg, setClickedReg] = useState(false);
    const [clickedForgot, setClickedForgot] = useState(false);

    const handleclickGoogle=()=>{

    }

    const onclickBtn=()=>{

    }


    // code
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    const validate = () => {
        Keyboard.dismiss()
        let valid = true

        if (!inputs.password) {
            handleError("Por favor insira a password", "password")
        }

        if (!inputs.email) {
            handleError("Por favor insira o email", "email")
            valid = false
        }

        if (valid) {
            console.log(inputs)
            navigation.navigate("/Feed");
        }
    }

    

    const login = () => {
        setLoading(true);
        setTimeout(async () => {
            setLoading(false);
            let userData = await AsyncStorage.getItem('user')
            if (userData)
            {
                userData = JSON.parse(userData)
                if (
                    inputs.email == userData.email &&
                    inputs.password == userData.password
                ) {
                    AsyncStorage.setItem(
                        'user',
                        JSON.stringify({...userData, loggedIn: true}),
                    )
                    Alert.alert('Login Succedido')
                } else {
                    Alert.alert('Error', 'Email ou password incorretos')
                }
            } else {
                Alert.alert('Error', 'Usuario nao existe')
            }
        }, 3000)
    }

    const handleOnChange = (text, input) => {
        setInputs((prevState) => ({...prevState, [input]: text}))
    }

    const handleError = (error, input) => {
        setErrors(prevState => ({...prevState, [input]: error}))
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
                                error={errors.email}
                                onFocus={()=>(
                                    handleError(null, 'email')
                                )}
                                onChangeText ={text => handleOnChange(text, 'email')}
                            />
                            <InputField
                                placeholder="introduza aqui"
                                label="Palavra-passe"
                                password
                                error={errors.password}
                                onFocus={()=>(
                                    handleError(null, 'password')
                                )}
                                onChangeText ={text => handleOnChange(text, 'password')}
                            />
                            <Link href={"/ForgotPassword"}
                                onPress={() => setClickedReg(true)}
                                style={{textAlign:"right"}}
                            >                                               
                                <Text style={clickedReg ? {color:COLORS.blue} : {}}>
                                    Esqueceu-se da palavra-passe?
                                </Text>
                            </Link>                      
                            <Button
                                title="Login"
                                w={"100%"}
                                h={40}
                                fontSize={20}
                                onPress={validate}
                            />
                        </View>
                

                    <View style={{alignItems:"center", flexDirection:"column", marginTop:20}}>
                        <Text style={{marginBottom:10}}>Ou fazer Login usando</Text>
                        <FooterIcon source={Google} dimension={30} handleclick={handleclickGoogle}/>
                    </View>
                    
                    <View style={{flexDirection:"row",  justifyContent:"center",marginTop:20}}>
                        <Text style={{marginRight:20}}>Não possui conta?</Text>
                        <Link href="/LoginAs" onPress={() => setClickedReg(true)}>
                            <Text
                                onPress={() => navigation.navigate('login')}
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