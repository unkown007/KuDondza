import { SafeAreaView, Text, View } from "react-native"
import Logo from "../components/Logo";
import { StyleSheet } from "react-native";
import { HeaderBtn } from "../components"
import HeaderTitle from "../components"
import LoginCard from "../components/common/loginCard/LoginCard";
import { COLORS } from "../constants";


const LoginAs=()=>{


    return(
       <SafeAreaView>
            <View style={styles.logo}>
                <Logo color={COLORS.blue}/>
            </View>
            <View style={styles.body}>
                {/* ver sobre stack */}
                <View style={styles.header}><Text>Header</Text></View> 
                <View style={styles.cards}>
                    <Text style={{marginBottom:40}}>Registar Como:</Text>
                    <LoginCard
                        role={"Estudante"}
                        text={"Publica as dúvidas que possui com uma proposta de valor a pagar pela tutoria"}
                    />

                    <LoginCard
                        role={"Tutor"}
                        text={"Responde às publicações e propostas dos estudantes e realiza sessões de tutoria com os estudantes"}
                    />
                </View>
            </View>
       </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    logo: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center",
        height:150,
    },

    header:{
        paddingLeft:15,
        marginTop:10,
    },

    body:{
        borderTopWidth:1,
    },

    cards:{
        marginTop:20,
        flexDirection: 'column',
        alignItems:"center",
    }

})

export default LoginAs;