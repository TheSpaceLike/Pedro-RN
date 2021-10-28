import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native'

const CustomHeader = ({isHome, title, navigation}) => {
    return(
        <View style={{flexDirection: 'row', height: 50 }}> 
          <View style={{flex: 1,justifyContent: 'center'}}> 
            {
              isHome ?
               <TouchableOpacity onPress={() => navigation.openDrawer()} >
                 <Image style={{width: 30, heigth: 30, marginLeft: 5}} 
                    source={require ('../assets/img/menu.png')} 
                    resizeMode="contain" />
               </TouchableOpacity>
              :
                        
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', top: 15, left:10}} 
              onPress={()  => navigation.goBack()}
            >
                <Image style= {{width: 20, height: 20, marginLeft: 5}} 
                 source={require('../assets/img/flecha-izq.png')}
                 resizeMode="contain"
              />
                <Text>Back</Text>
            </TouchableOpacity>
            }
          
          <View style={{flex: 1.5, justifyContent:'center'}}> 
            <Text style={{textAlign: 'center'}}>{title}</Text>
          </View>
            <View style={{flex: 1}}></View>
  
         </View>
      </View>
    )
}

export default CustomHeader