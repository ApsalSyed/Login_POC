import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/action/LoginAction';



export default function GoogleAuth() {
  const nav=useNavigation();
  const dispatch=useDispatch();
    GoogleSignin.configure({
        webClientId: '957345633526-jgej838unk3qkd1ou6imnq93cdcrsog2.apps.googleusercontent.com',
      });

    async function onGoogleButtonPress() {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        // return auth().signInWithCredential(googleCredential);
        const LoginAuth= auth().signInWithCredential(googleCredential);
        LoginAuth.then((res)=>console.log(res.user.email))
        
        dispatch(loginSuccess())
        
      }
    
    return (
      <View style={style.buttoncontainer}>
        <Button style={style.buttonstyle}
          title="Google Sign-In"
          onPress={
            () => onGoogleButtonPress()
            .then(() => console.log('Signed in with Google!'))}
        />
        </View>
      )
}

const style =StyleSheet.create(
  {
    
    buttoncontainer:
    {
      paddingTop:20,
      width:150,
      alignSelf:"center"
    },

  }
)
