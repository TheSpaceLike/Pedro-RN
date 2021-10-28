import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
//Dependencias
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
 
//Clases JS
import CustomHeader from './app/components/CustomHeader';
import HomeScreen from './app/components/HomeScreen';



function HomeScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <CustomHeader title="Home Detail" navigation={navigation} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} > 
          <Text>Home Detail!</Text>
        </View>
    </SafeAreaView>
  );
}

function SettingsScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, }}>
        <CustomHeader title="Settings" isHome={true} navigation={navigation} />
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} > 
            <Text>Settings!</Text>
            <TouchableOpacity
              style={{marginTop: 20}}
              onPress={() => navigation.navigate('SettingDetail')}
            >
              <Text>Go Settings Details</Text>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  );
}

function SettingsScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, }}>
        <CustomHeader title="Settings Detail" navigation={navigation} />
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} > 
            <Text>Settings Detail!</Text>
          </View>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

const StackHome = createStackNavigator()


function HomeStack(){
  return (
    <StackHome.Navigator initialRouteName="Home">
        <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>
        <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler}/>
    </StackHome.Navigator>

  )

}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


const StackSetting = createStackNavigator()


function SettingStack(){
  return (
    <StackSetting.Navigator initialRouteName="Setting">
        <StackSetting.Screen name="Setting" component={SettingsScreen} options={navOptionHandler}/>
        <StackSetting.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHandler}/>
    </StackSetting.Navigator>

  )

}

function TapNavigato(){
  return(
    <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('../AwesomeProject/app/assets/img/home.png')
                : require('../AwesomeProject/app/assets/img/home-black.png');
            } else if (route.name === 'Settings') {
              iconName = focused ? 
              require('../AwesomeProject/app/assets/img/setting.png') 
              : require('../AwesomeProject/app/assets/img/setting-black.png');
            }

            // You can return any component that you like here!
            return <Image source={iconName}  style={{width:20, height: 20}} resizeMode='contain' />
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
        })}>
         <Tab.Screen name="Home" component={HomeStack} options={navOptionHandler}/>
         <Tab.Screen name="Settings" component={SettingStack} options={navOptionHandler} />
      </Tab.Navigator>

  )

}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Drawer.Navigator initialRouteName="MenuTap" 
        screenOptions={{
        drawerStyle: { backgroundColor: 'white',}
        }}
      >
        <Drawer.Screen name="MenuTap" component={TapNavigato} options={navOptionHandler} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} options={navOptionHandler} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}