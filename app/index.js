import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Register from './register';
import { COLORS } from '../constants';
import { HeaderBtn } from '../components';
import { PostDbt, back } from '../constants/icons';
import Proposal from './proposal';
import ProposalOff from './ProposalOff';
import Interaction from './Interaction';
import Feed from './Feed';
import PostDoubt from './PostDoubt';
import PostDoubtProposal from "./PostDoubtProposal"
import LoginAs from './LoginAs';
import { Close } from '../constants/icons';
import { View } from 'react-native';
import { Button } from '../components'
import { useRouter } from 'expo-router';


const Stack = createNativeStackNavigator();

const MyStack = () => {
    // const router = useRouter();
    // const onSubmit=()=>{
    //     try {
    //         AsyncStorage.setItem('duvida', duvida);
    //         router.push("/PostDoubtProposal");
    //         //navigation.navigate("PostDoubtProposal");
    //       } catch (error) {
    //         console.log('Erro ao salvar no AsyncStorage:', error);
    //       }
        
    // }

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'Login',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='register'
                component={Register}
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HeaderBtn iconUrl={back} dimension="60%"/>
                    ),
                    headerTitle: "Registo",
                    headerTitleAlign: "center",
                    headerTintColor: COLORS.blue
                }}
            /> 
            <Stack.Screen
                name="proposal"
                component={Proposal}
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerBackVisible: true,
                    headerTitle: "Proposta",
                    headerTitleAlign: "center",
                    headerTintColor: COLORS.blue
                }}
            />
            <Stack.Screen
                name="ProposalOff"
                component={ProposalOff}
            />
            <Stack.Screen
                name="Interaction"
                component={Interaction}
            />
            <Stack.Screen
                name="Feed"
                component={Feed}
            />

            {/* <Stack.Screen
                name="PostDoubt"
                component={PostDoubt}
            /> */}

            <Stack.Screen
                name="PostDoubtProposal"
                component={PostDoubtProposal}
                options={{
                    headerStyle: { backgroundColor: COLORS.white, },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HeaderBtn iconUrl={back} dimension="60%" handlePress={()=>router.back()}/>
                    ),
                    headerTitle: ()=>(
                        <View style={{
                                width:300, height:70,
                                flexDirection:"row",
                                justifyContent:"flex-end",
                                paddingRight:25
                                }}>
                                  
                        </View>
                    ),
                    
                }}
            />

             <Stack.Screen
                name="Login As"
                component={LoginAs}
            />
            <Stack.Screen
                name="PostDoubt"
                component={PostDoubt}
                options={{
                    headerStyle: { backgroundColor: COLORS.white, },
                    headerShadowVisible: false,
                    // headerLeft: () => (
                    //     // <HeaderBtn iconUrl={Close} dimension="60%"/>
                    // ),
                    headerTitle: ()=>(
                        <View style={{
                            width:300, height:70,
                            flexDirection:"row",
                            justifyContent:"flex-end",
                            paddingRight:25
                            }}>
                        </View>
                      
                    ),
                    
                }}
            />
            

        </Stack.Navigator>
    );
}

export default MyStack;
//handlePress={handlePressBack}
