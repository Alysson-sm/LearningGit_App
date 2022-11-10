import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

function ComandScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function InstallScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function DocScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text>
        Tela DocScreen
      </Text>
    </View>
  );

}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={

      ({ route }) => ({

        tabBarIcon: ({focused, color, size}) =>{
          let iconName;

          if (route.name === 'Documentação') {
            iconName = focused ? 'ios-book': 'ios-book';
            size = 30;
            color = 'purple'
            
          }else if (route.name === 'Instalação') {
            iconName = focused ? 'construct' : 'construct';
            size = 30;
            color = 'purple'
          }else if (route.name ==='Comandos') {
            iconName = focused ? 'code-working' : 'code'
            size = 30;
            color = 'purple'
          }
          return < Ionicons name = {iconName} size = {size} color = {color}/>;

        },
        
        

      })
    }
    
    >
      
      <Tab.Screen name="Documentação" component={DocScreen} />
      <Tab.Screen name="Instalação" component={InstallScreen} />
      <Tab.Screen name="Comandos" component={ComandScreen} />
    </Tab.Navigator >
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
