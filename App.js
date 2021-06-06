/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Providers from './navigation';
// import Providers from './navigation';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import OnboardingScreen from './screens/OnboardingScreen';
// import LoginScreen from './screens/LoginScreen';


// const AppStack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <AppStack.Navigator headerMode="none">
//         <AppStack.Screen name="Onboarding" component={OnboardingScreen}/>
//         <AppStack.Screen name="Login" component={LoginScreen} />
//       </AppStack.Navigator>
//     </NavigationContainer>
//   )
// }

const App = () =>  {
  return <Providers />;
}

// const HomeScreen = ({navigation}) => {
//   return (
//     <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text> Home Screen</Text>
//     <Button
//       title="Another Screen"
//       onPress={() => navigation.navigate("AnotherScreen")}
//     />
//     </View>
//   );
// };

// const AnotherScreen = () => {
//   return (
//     <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text> This is the next page</Text>
//     </View>
//   );
// };

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="AnotherScreen" component={AnotherScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
         
export default App;
