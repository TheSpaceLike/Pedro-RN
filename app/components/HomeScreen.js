import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity  } from 'react-native'
import CustomHeader from '../components/CustomHeader'

const HomeScreen = ({title, isHome, navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, }}>
          <CustomHeader title="Home" isHome={true} navigation={navigation} />
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} > 
              <Text>Home!</Text>
                <TouchableOpacity
                  style={{marginTop: 20}}
                  onPress={() => navigation.navigate('HomeDetail')}
                >
                  <Text>Go Home Details</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
      );
}

export default HomeScreen