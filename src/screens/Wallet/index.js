import React from 'react';
import { Text } from 'react-native';
import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { Switch } from 'react-native';


import { 
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
} from './styles';

export default function Wallet() {
  return (
    <Wrapper>
      <Header colors={['#52E78C', '#1AB563']}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>0,00</Bold>
            </Value>

            <EyeButton>
              <Feather name="eye" size={28} color="#fff" />
            </EyeButton>
          </BalanceContainer>

          <Info>
            Seu saldo está rendendo 210% do CDI
          </Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={28} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>
          Usar saldo ao pagar
        </UseBalanceTitle>

        <Switch />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>
          Forma de pagamento
        </PaymentMethodsTitle>
      </PaymentMethods>
    </Wrapper>
  );
}