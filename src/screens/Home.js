import React, {useEffect, useState} from 'react';
import {Box, FlatList, HStack, Text} from '@gluestack-ui/themed';
import {Image} from 'react-native';
import {SafeAreaView} from 'react-native';
import {getAllBeers} from '../services/getAllBeers';

const Home = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getAllBeers().then(res => setBeers(res));
  }, []);

  const logo = require('../../assets/logonegro.png');

  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <Image
        alignSelf="center"
        marginTop={20}
        source={logo}
        style={{width: 170, height: 170}}
      />
      <Text
        color="#FF6EFF"
        marginVertical={20}
        alignSelf="center"
        fontSize={20}
        fontFamily="CroissantOne-Regular">
        Probá nuestras birras
      </Text>

      <FlatList
        numColumns={2}
        data={beers}
        marginBottom={250}
        // keyExtractor={beers.id}
        renderItem={({item}) => (
          <HStack
            padding={8}
            borderWidth={1}
            borderColor="white"
            borderRadius={10}
            marginVertical={10}
            width="45%"
            marginHorizontal={10}
            alignItems="center">
            <Image
              resizeMode="contain"
              width={25}
              height={80}
              source={{uri: item.image_url}}
            />
            <Text
              fontFamily="CroissantOne-Regular"
              marginLeft={10}
              numberOfLines={2}
              width="80%"
              color="#D3D3D3"
              marginRight={3}>
              {item.name}
            </Text>
          </HStack>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
