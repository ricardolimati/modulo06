import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

export default function Main() {
  return (
  <Container>
    <Form>
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Adicionar usuário"
      />
      <SubmitButton>
        <Icon name="add" size={20} color="#FFF"/>
      </SubmitButton>
    </Form>
  </Container>)
};


export function OptionsMain() {
  const optionsMain={
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
  return optionsMain;
}
