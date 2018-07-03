import React from 'react';
import {Text} from 'react-native';

import HomeScreen from './screens/homescreen';
import AboutScreen from './screens/aboutscreen';
import UsersScreen from './screens/usersscreen';
import LoginScreen from './screens/loginscreen';
import SettingScreen from './screens/settingscreen';
import TestModal from './modals/testmodal';
import { createStackNavigator,createSwitchNavigator,createBottomTabNavigator,createDrawerNavigator  } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';


const AuthStack = createStackNavigator(
    {
        Login: LoginScreen
    },{
        headerMode: 'none'
    }
);


const MainStack = createStackNavigator(
    {
      Home: HomeScreen,
      About:AboutScreen,
      Users:UsersScreen
    },{
            initialRouteName: 'Home',
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#6b52ae',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }
    }
);

const AppStack = createDrawerNavigator(
    {
        Main:{screen:MainStack}
    },{
        mode: 'modal',
        headerMode: 'none',
       
    }
)

const MainTab = createBottomTabNavigator(
    {
        Home:createStackNavigator({
                Home:{
                    screen:HomeScreen,
                    navigationOptions: {
                        title: 'Profile',
                        headerStyle: {
                            backgroundColor: '#000',
                        }
                    }
                }
        }),
        Setting:SettingScreen
    },{
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName;
              if (routeName === 'Home') {
                iconName = `ios-information-circle${focused ? '' : '-outline'}`;
              } else if (routeName === 'Setting') {
                iconName = `ios-options${focused ? '' : '-outline'}`;
              }
      
              // You can return any component that you like here! We usually use an
              // icon component from react-native-vector-icons
              return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
            title:"hello",
            swipeEnabled:true
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
        }
    }
)

const Router = createSwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack,
        Tabs: MainTab
    }
);

export default Router;