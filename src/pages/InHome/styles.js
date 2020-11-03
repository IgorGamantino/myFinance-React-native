import styled from 'styled-components/native';

export const Container = styled.View `
  flex: 1;
  background: #312e38;
  padding: 30px;
  align-items: center;
  justify-content:center;

`;

export const Title = styled.Text `
 color: #fff;
 font-size: 28px;
 font-weight: bold;
`;

export const Text = styled.Text `

  font-size: 22px;
  color: #fff;
  margin-top: 15px;
  margin-bottom: 20px;
  margin-left: 20px;

`;

export const Button = styled.TouchableOpacity`
 background: #ff9000;
 width: 100%;
 height: 60px;
 border-radius: 10px;


 align-items: center;
 justify-content: center;
 margin-top: 10px;

`;

export const TextButton = styled.Text `
 color:black;
 font-size: 18px;
 font-weight: bold;

`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 25px;
  align-items: center;
  justify-content: center;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 16px;
  color: #fff;

`;