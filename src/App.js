import React from 'react'

import FinanceLogo from './assets/cifrao.png';
import {Container,Text,Button,TextButton,Title,ForgotPassword,ForgotPasswordText} from './pages/InHome/styles';
import {Image} from 'react-native'

export default function App() {
    return (
    <Container>
      <Title>Seja Bem vindo ao MyFinance</Title>
      <Text> Contole totalmente sua vida financeira </Text>
        <Image source={FinanceLogo} style={{width:300,height: 300,borderRadius:10,marginTop:10}} />

     
         <Button><TextButton>Log In</TextButton></Button>
        <Button><TextButton>Sign Up </TextButton></Button>
      
      <ForgotPassword>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
      </ForgotPassword>
     
    </Container>)

};


