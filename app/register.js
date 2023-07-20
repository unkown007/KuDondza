import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import {COLORS, icons, images, SIZES } from '../constants'
import { 
    HeaderBtn, InputField, Button, DropDown, DateTime, Loader
} from "../components";
import { Keyboard } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({navigation}) => {
    const router = useRouter();

    const [inputs, setInputs] = useState({
        nome: '',
        apelido: '',
        genero: '',
        dataNascimento: '',
        localizacao: '',
        instituicao: '',
        email: '',
        telefone: '',
        usuario: '',
        password: '',
        confpass: '',
    })
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const validate = () => {
        Keyboard.dismiss()
        let valid = true
        if (!inputs.name) {
            handleError("Por favor insira o nome", "nome")
        }

        if (!inputs.apelido) {
            handleError("Por favor insira apelido", "apelido")
        }

        if (!inputs.genero) {
            handleError("Por favor insira o genero", "genero")
        }

        if (!inputs.dataNascimento) {
            handleError("Por favor insira a data de nascimento", "dataNascimento")
        }

        if (!inputs.localizacao) {
            handleError("Por favor insira a localizacao", "localizacao")
        }

        if (!inputs.instituicao) {
            handleError("Por favor insira a instituicao", "instituicao")
        }

        if (!inputs.telefone) {
            handleError("Por favor insira o contacto", "telefone")
        }

        if (!inputs.usuario) {
            handleError("Por favor insira o nome do usuario", "usuario")
        }

        if (!inputs.password) {
            handleError("Por favor insira a password", "password")
        } else if (inputs.password.length < 8) {
            handleError("Por favor insira no minimo 5 characteres", "password")
        }

        if (!inputs.confpass) {
            handleError("Por favor insira a confirmacao da password", "confpass")
        }

        if (!inputs.email) {
            handleError("Por favor insira o email", "email")
            valid = false
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
            handleError("Por favor insira um email valid", "email")
        }

        if (valid) {
            register();
        }
    }

    const register = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            try {
                AsyncStorage.setItem('user', JSON.stringify(inputs))
                navigation.navigate("LoginScreen")
            } catch (error) {
                Alert.alert("Error")
            }
        }, 3000)
    }

    const handleOnChange = (text, input) => {
        setInputs((prevState) => ({...prevState, [input]: text}))
    }

    const handleError = (error, input) => {
        setErrors(prevState => ({...prevState, [input]: error}))
    }

    genero = [
        {key:'1', value:"Masculino"},
        {key:'2', value:"Femenino"},
    ]
    prov = [
        {key:'1', value:"Maputo Cidade"},
        {key:'2', value:"Maputo Província"},
        {key:'3', value:"Gaza"},
        {key:'4', value:"Inhambane"},
        {key:'5', value:"Sofala"},
        {key:'6', value:"Manica"},
        {key:'7', value:"Tete"},
        {key:'8', value:"Zambezia"},
        {key:'9', value:"Nampula"},
        {key:'10', value:"Cabo Delgado"},
        {key:'11', value:"Niassa"},
    ]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Loader visible={loading}/>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HeaderBtn iconUrl={icons.back} dimension="60%"/>
                    ),
                    headerTitle: "Registo",
                    headerTitleAlign: "center",
                    headerTintColor: COLORS.blue
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
                        error={errors.nome}
                        onFocus={()=>(
                            handleError(null, 'email')
                        )}
                        onChangeText ={text => handleOnChange(text, 'nome')}
                    />
                    <InputField
                        placeholder="Digite o Apelido"
                        label="Apelido"
                        error={errors.apelido}
                        onFocus={()=>(
                            handleError(null, 'apelido')
                        )}
                        onChangeText ={text => handleOnChange(text, 'apelido')}
                    />
                    <DropDown
                        label="Genero"
                        data={genero}
                        error={errors.genero}
                        onFocus={()=>(
                            handleError(null, 'genero')
                        )}
                        onChangeText ={text => handleOnChange(text, 'genero')}
                    />
                    <DateTime
                        label="Data de Nascimento"
                        error={errors.dataNascimento}
                        onFocus={()=>(
                            handleError(null, 'dataNascimento')
                        )}
                        onChangeText ={text => handleOnChange(text, 'dataNascimento')}
                    />
                    <DropDown
                        label="Localizacao(provincia)"
                        data={prov}
                        error={errors.localizacao}
                        onFocus={()=>(
                            handleError(null, 'localizacao')
                        )}
                        onChangeText ={text => handleOnChange(text, 'localizacao')}
                    />
                    <InputField
                        placeholder="Digite o instituição que frequenta"
                        label="Instituição"
                        error={errors.instituicao}
                        onFocus={()=>(
                            handleError(null, 'instituicao')
                        )}
                        onChangeText ={text => handleOnChange(text, 'instituicao')}
                    />
                    <Text style={{fontSize: 18, fontWeight:'bold'}}>Dados de Usuario</Text>
                    <InputField
                        placeholder="Digite o email"
                        label="Email"
                        error={errors.email}
                        onFocus={()=>(
                            handleError(null, 'email')
                        )}
                        onChangeText ={text => handleOnChange(text, 'email')}
                    />
                    <InputField
                        keyboardType="numeric"
                        placeholder="Digite o Telefone"
                        label="Telefone"
                        error={errors.telefone}
                        onFocus={()=>(
                            handleError(null, 'telefone')
                        )}
                        onChangeText ={text => handleOnChange(text, 'telefone')}
                    />
                    <InputField
                        placeholder="Digite o Usuario"
                        label="Usuario"
                        error={errors.usuario}
                        onFocus={()=>(
                            handleError(null, 'usuario')
                        )}
                        onChangeText ={text => handleOnChange(text, 'usuario')}
                    />
                    <InputField
                        placeholder="Digite a password"
                        label="Password"
                        password
                        error={errors.password}
                        onFocus={()=>(
                            handleError(null, 'password')
                        )}
                        onChangeText ={text => handleOnChange(text, 'password')}
                    />
                    <InputField
                        placeholder="Digite a confimar password"
                        label="Confirmar password"
                        password
                        error={errors.confpass}
                        onFocus={()=>(
                            handleError(null, 'confpass')
                        )}
                        onChangeText ={text => handleOnChange(text, 'confpass')}
                    />
                    <Button  title="registar" onPress={validate}/>
                    <Text
                        onPress={() => navigation.navigate('LoginScreen')}
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
};

export default Register;