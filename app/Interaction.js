import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import {COLORS, icons, images, SIZES } from '../constants'
import { DropDown, HeaderBtn, Button} from "../components";
import { Back, call, camera, video, microphone, Options, plus1} from "../constants/icons";
import Icon from "../components/common/footer/FooterIcon/FooterIcon";
import TextArea from "../components/textArea/TextArea";
import { TextInput } from 'react-native-gesture-handler';
import InputField  from "../components/common/inputfield/InputField";
import { StyleSheet } from "react-native";
import { Navigator } from "expo-router";






const Interaction = ({navigation}) =>{
    

    return(
        <SafeAreaView style={{height: '100%'}} >
             <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white, },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HeaderBtn iconUrl={Back} dimension="60%" handlePress={() => navigation.navigate('ProposalOff')}/>
                    ),
                    headerTitle: "Cálculo de IPv4",
                    headerTitleAlign: "center",
                    headerTintColor: COLORS.blue,
                    headerRight: ()=>(
                        <View style= {{flexDirection: "row"}}>
                            <HeaderBtn iconUrl={video} dimension="60%"/>
                            <HeaderBtn iconUrl={call} dimension="60%"/>
                            <HeaderBtn iconUrl={Options} dimension="60%" handlePress={null}/>
                        </View>   
                    ),
                }}
            />
     
            <ScrollView showsVerticalScrollIndicator={true}
                
                contentContainerStyle={{
                    paddingHorizontal:25,
                    borderTopWidth:1,
                    borderTopColor:COLORS.grey,
                }}
            ></ScrollView>
            <View style={styles.Footer}>
                <View >
                    <HeaderBtn iconUrl={plus1} dimension="70%"/>
                </View>
                <View>
                    <InputField style = {{width: "75%", color: COLORS.grey}}>Escreva uma mensagem</InputField>
                </View>
                <View >
                    <HeaderBtn iconUrl={microphone} dimension="70%"/>
                </View>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Footer:{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
        position: 'absolute', 
        left: 0,
        right: 0,
        bottom: 0,
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderTopWidth: 1,
        alignItems: 'center',
        borderTopColor: COLORS.grey,
    }
})

export default Interaction