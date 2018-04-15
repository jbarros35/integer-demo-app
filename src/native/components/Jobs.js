import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Content, List, ListItem, Text, Icon, Spacer, Button, Label, Textarea, Form, Item, Input, Separator, Card, CardItem } from 'native-base';
export default class HeaderTitleExample extends Component {
  render() {
    return (
      <Container>
      <Header />
      <Content padder>
      <Card>
            <CardItem>
              <Body>
                <Text>
                   //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
        <Form>
          <Item floatingLabel>
            <Label>Nome</Label>
            <Input />
          </Item>
          <Item floatingLabel >
            <Label>Email</Label>
            <Input />
            <Icon name='mail' />
          </Item>
          <Item floatingLabel >
            <Label>Telefone</Label>
            <Input />
            <Icon name='ios-phone-portrait' />
          </Item>
          <Item floatingLabel >
            <Label>Assunto</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Mensagem</Label>
            <Textarea rowSpan={5} bordered />
          </Item>
          <Item>
          
          </Item>
        </Form>
        <Button block success>
            <Text>Enviar! </Text>
          </Button>
      </Content>
    </Container>
    );
  }
}