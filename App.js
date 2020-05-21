import React from 'react';
import LoginScreen from './src/pages/LoginScreen';
//import SecondScreen from './src/pages/SecondScreen';
import ContentScreen from './src/pages/ContentScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="ContentScreen" component={ContentScreen}
        options={{ 
          title: 'Conteúdo',
          headerStyle: {
            backgroundColor: '#103596',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 1 ,
          },
          
          headerTitleStyle: {
            color: '#ffffff',
            fontzise: 30
          },
        }}
      
      
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} 
        options={{ 
          title: 'My App React',
          headerStyle: {
            backgroundColor: '#103596',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 1 ,
          },
          
          headerTitleStyle: {
            color: '#ffffff',
            fontzise: 30
          },
        }}/>
      </Stack.Navigator>
      </NavigationContainer>
    );
};
