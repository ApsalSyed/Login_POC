
// import { View,Text, SafeAreaView, TextInputBase, StyleSheet } from 'react-native'
// import PostNavigation from './Componets/nav/Navigation'
// import LoginPage from './Componets/pages/LoginPage'
// import firebase from '../Login/Componets/firebase/Firebase';
// import {useSelector } from 'react-redux';
// import { Provider } from 'react-redux';
// import PreNavigation from './Componets/nav/PreNavigation';
// import { ThemeProvider } from '@react-navigation/native';
// import { store } from './Componets/redux/Store';
// import Routes from './Componets/nav/Routes';

// export default function App() {

//   const isLoggedIn =useSelector(state=>state.isLoggedIn)
//   return (
//     <Provider store={store}>
//     <SafeAreaView style={style.container}>
//     <Routes/>

//     </SafeAreaView>
//     </Provider>

//   )
// }

// const style=StyleSheet.create(
//   {
//     container:
//     {
//       flex:1,
//       justifyContent:"center",
//     }
  

//   }
// )


import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import {persistor, store} from './Componets/redux/Store'
import Routes from './Componets/nav/Routes';
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {

  return (
    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes/>
        </PersistGate>
    </Provider>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
