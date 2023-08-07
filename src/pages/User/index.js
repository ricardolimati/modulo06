import React from 'react';
import {
  View
} from 'react-native';

// import { Container } from './styles';

export default function User(){
  return <View /> ;
}


export function OptionsUser() {
  const optionsUser = {
    title: 'Usuários',
    headerStyle: {
      backgroundColor: '#7159c1',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitleAlign: 'center'
  };
  return optionsUser;
}
