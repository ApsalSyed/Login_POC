import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import { signupAuth } from '../../redux/action/LoginAction';


export default function SignupPage() {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup =()=>
  {
    dispatch(signupAuth(email,password,nav))
  }

  return (
    <View style={styles.container}>
      <View style={styles.textInputs}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          mode="outlined"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handleSignup(email,password,nav)}
          contentStyle={styles.buttonContent}>
          Signup
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  textInputs: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonContent: {
    paddingVertical: 8,
  },
});
