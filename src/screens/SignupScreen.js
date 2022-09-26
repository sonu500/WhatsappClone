import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {TextInput, Button} from 'react-native-paper';

export default function SignupScreen() {
  const [email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [next, setNext] = React.useState(false);

  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.container}>
        <Text style={styles.text}> welcome to whatsapp</Text>
        <Image style={styles.images} source={require('../assests/wa.png')} />
      </View>
      <View
        style={{padding: 40, justifyContent: 'space-evenly', height: '60%'}}>
        {!next && (
          <>
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
          </>
        )}
        {next ? (
          <>
            <TextInput
              label="Name"
              value={name}
              onChangeText={text => setName(text)}
              mode="outlined"
            />
             <Button mode="contained">Set Profile Picture</Button>
            <Button mode="contained">Next</Button>
          </>
        ) : (
          <Button mode="contained" onPress={() => setNext(true)}>
            Next
          </Button>
        )}
        <TouchableOpacity><Text>Already have an account</Text></TouchableOpacity>
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
