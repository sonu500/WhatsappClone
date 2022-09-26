import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {TextInput, Button} from 'react-native-paper';



 
export default function SignupScreen() {
  const [email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');

  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.container}>
        <Text style={styles.text}> welcome to whatsapp</Text>
        <Image style={styles.images} source={require('../assests/wa.png')} />
      </View>
      <View
        style={{padding: 40, justifyContent: 'space-evenly', height: '60%'}}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          mode="outlined"
        />
        <TextInput
          label="Password"
          value={Password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          mode="outlined"
        />

        <Button mode="contained" onPress={() => {}}>
          Next
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: 'green',
  },
  images: {
    width: 200,
    height: 200,
  },
});
