import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Register from './register';
import { COLORS } from '../constants';
import { HeaderBtn } from '../components';
import { back } from '../constants/icons';

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
        </Stack.Navigator>
    );
}

export default MyStack;
//handlePress={handlePressBack}