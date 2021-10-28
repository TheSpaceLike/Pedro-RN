import React, {useState} from "react";
import {View, SafeAreaView, StyleSheet, TextInput, Image } from "react-native";

const Index = () => {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.principal}>
        <View style={{top: 100}}>
            <Image
                style={{
                    height: 80,
                    width :345,
                    alignContent:"center", 
                    alignSelf: "center",
                    marginBottom: 40, 
                }}
                source={require('../../assets/img/Agricam-logoxhdpi.png')}
            />
            <TextInput
            style={styles.input}
            onChangeText={setUserName}
            value={userName}
            placeholder="Username"
        />
        <TextInput
            style={styles.input}
            onChangeText={setPass}
            value={pass}
            placeholder="Password"
            secureTextEntry={true}
            // keyboardType=""
        />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12, 
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
  },

  principal: {
  }
});

export default Index;