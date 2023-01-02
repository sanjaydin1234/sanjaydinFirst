
import React from 'react';
import {View,Text} from 'react-native';

import {Link} from '@react-navigation/native';


export default function Home() {
  return (
    <View>
        <Text>i am home component</Text>
        <Link to='/about'>About</Link>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
        <Link to='/profile'>Profile</Link>
    </View>
  )
}


