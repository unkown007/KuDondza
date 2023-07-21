import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Register from './register';

import { COLORS } from '../constants';
import { HeaderBtn } from '../components';
import { back } from '../constants/icons';
import Proposal from './proposal';
import ProposalOff from './ProposalOff';
import Interaction from './Interaction';

const Stack = createNativeStackNavigator();

const MyStack = () => {
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
                name="Proposal"
                component={Proposal}
            />
            <Stack.Screen
                name="ProposalOff"
                component={ProposalOff}
            />
            <Stack.Screen
                name="Interaction"
                component={Interaction}
            />
            {/*<Stack.Screen
                name="Feed"
                component={Feed}
            />*/}
            

        </Stack.Navigator>
    );
}

export default MyStack;
//handlePress={handlePressBack}
