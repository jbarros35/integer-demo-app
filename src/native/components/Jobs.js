import React, { Component } from 'react';
import { Container, Left, Body, Right, Title, Content, List, ListItem, Text, Icon, Button, Label, Textarea, Form, Item, Input, Separator, Card, CardItem } from 'native-base';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Error from './Error';
import Header from './Header';
import Spacer from './Spacer';

const JobsListing = ({
  error
}) => {

    // Error
    if (error) return <Error content={error} />;

    return (
      <Container>
      <Content padder>
      <Card>
            <CardItem>
              <Body>
                <Text>
                   //Faça parte de nossa equipa, venha trabalhar conosco.
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
          <Item floatingLabel>
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
};

JobsListing.propTypes = {
  error: PropTypes.string,
};

JobsListing.defaultProps = {
  error: null,
};

export default JobsListing;