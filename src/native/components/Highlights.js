import React from 'react';
import { Container, Content, Text, H1, H2, H3, Button, Card, CardItem, Body } from 'native-base';
import { FlatList, TouchableOpacity, RefreshControl, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Error from './Error';
import Header from './Header';
import Spacer from './Spacer';

const HighlightsListing = ({
  error,
  loading,
  highlights,
  reFetch,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  const keyExtractor = item => item.id;

  // const onPress = item => Actions.recipe({ match: { params: { id: String(item.id) } } });

  return (
    <Container>
      <Content padder>
      <FlatList
          numColumns={1}
          data={highlights}
          renderItem={({ item }) => (
            <Card transparent style={{ paddingHorizontal: 6 }}>
              <CardItem cardBody>
                <Body>
                  <Spacer size={10} />
                  <H1>{item.title}</H1>
                  <Spacer size={15} />
                  <Text>{item.body}</Text>
                </Body>
              </CardItem>
              <CardItem cardBody>
              <Spacer size={10} />
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      height: 100,
                      width: null,
                      flex: 1,
                      borderRadius: 5,
                    }}
                  />
              </CardItem>
            </Card>
          )}
          keyExtractor={keyExtractor}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={reFetch}
            />
          }
        />  
      
      </Content>
    </Container>
  );
};

HighlightsListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  highlights: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reFetch: PropTypes.func,
};

HighlightsListing.defaultProps = {
  error: null,
  reFetch: null,
};

export default HighlightsListing;