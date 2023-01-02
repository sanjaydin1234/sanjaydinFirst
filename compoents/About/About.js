
import React from 'react';
import {View,Text} from 'react-native';
import {Link} from '@react-navigation/native';

export default function About() {

  return (
    <View>
        <Text>i am About component</Text>
        <Link to='/home'>Home</Link>
    </View>
  )
}



