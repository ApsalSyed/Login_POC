import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {signInWithEmail} from '../../authentication/EmailAuth';
import GoogleAuth from '../../authentication/GoogleAuth';
import {emailAuth, googleAuth, loginSuccess} from '../../redux/action/LoginAction';

export default function LoginPage() {
  const nav = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // const userData=useSelector(state => state.user)
  // useEffect (()=>{dispatch(getUserData())},[])
  // console.log(userData)

  const handleLogin = () => {
    email === '' || password === ''
      ? alert('Email and Password are required')
      : dispatch(emailAuth(email, password, nav));
  };

  // const handleGoogleLogin=()=>
  // {
  //   dispatch(googleAuth())
  // }

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
          onPress={handleLogin}
          contentStyle={styles.buttonContent}>
          Login
        </Button>
      </View>
      <GoogleAuth  />


      {/* <Button onPress={handleGoogleLogin}>Google Login</Button> */}
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
});
