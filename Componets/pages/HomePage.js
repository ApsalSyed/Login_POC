import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/action/LoginAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomePage() {
  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(logout())
  };

  const user_Data = useSelector(state=>state.user)
  console.log(user_Data)

  const handleClear=()=>
  {
    AsyncStorage.clear()
    .then(
      console.log("Storage Cleared")
    )
    .catch((err)=>
    {
      console.log(err)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>
      <Button  onPress={handleSignOut}>
        Sign Out
      </Button>

      <Button mode="contained" onPress={handleClear}>
        Clear storage
      </Button>



      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
