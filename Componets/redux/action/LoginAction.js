// import axios from "axios"
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {EMAIL_AUTH, GOOGLE_AUTH, LOGIN_SUCCESS, LOGOUT, SIGNUP_AUTH} from '../type/actionTypes';
import { Alert } from 'react-native';

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const logout = () => {
  return dispatch => {
    {
      auth()
        .signOut()
        .then(() => console.log('User signed out!'),
        dispatch({
            type: LOGOUT
          }));

    }
  };
};

// export const googleAuth =()=>
// {
//     return async dispatch =>
//     {
//         GoogleSignin.configure({
//             webClientId: '957345633526-jgej838unk3qkd1ou6imnq93cdcrsog2.apps.googleusercontent.com',
//           });
//         try 
//         {
//             await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//             const { idToken } = await GoogleSignin.signIn();
//             const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//             // return auth().signInWithCredential(googleCredential);
//             const LoginAuth= auth().signInWithCredential(googleCredential);

//             dispatch({
//                 type:GOOGLE_AUTH,
//                 payload:LoginAuth
//             })
//         }
//         catch(err)
//         {
//             console.log(err)
//         }
//     }
// }

export const emailAuth = (email, password, nav) => {
  // const nav = useNavigation();
  return async dispatch => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      )
      console.log('Logged in user:', userCredential.user.email)
      dispatch({
        type: EMAIL_AUTH,
        payload:email
      })
      return {success: true}
    } catch (error) {
      console.log('Login error:', error)
      nav.navigate('Sign')

      return {success: false, error}
    }
  };
};

export const signupAuth = (email, password, nav) => {
  return async dispatch => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      console.log('Signed up user:', userCredential.user.email);
      dispatch({
        type: SIGNUP_AUTH,
        payload: email,
      })
      Alert.alert("user created")
      nav.navigate('Login')
    } catch (error) {
      console.log('Signup error:', error);
    }
  };
};




// export const getUserData = ()=>
//     {
//         return async(dispatch)=>
//         {
//             try{
//                 const {data} =await axios.get("https://dummyjson.com/users")
//                 dispatch (
//                     {
//                         type :'GET_USERDATA',
//                         payload : JSON.stringify(data,null,2)
//                     }
//                 )
//             }
//             catch(err)
//             {
//                 console.log(err)
//             }
//         }
//     }

//action - object with type property
