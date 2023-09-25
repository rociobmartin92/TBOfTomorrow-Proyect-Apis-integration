import React, {useEffect, useState} from 'react';
import {Center, HStack, Text} from '@gluestack-ui/themed';
import {Image, Pressable, SafeAreaView, FlatList} from 'react-native';

import {getAllBeers} from '../services/getAllBeers';
import {getSingleBeer} from '../services/getSingleBeer';
import {useDispatch} from 'react-redux';
import {setBeerSelected} from '../redux/slices/BeerSlice';
import {Beer} from './types';

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();

  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    getAllBeers().then(res => setBeers(res));
  }, []);

  const onHandleButtonBeer = (id: number) => {
    getSingleBeer(Number(id)).then(res => {
      console.log('res', res);
      dispatch(setBeerSelected(res));
    });

    navigation.navigate('beerDetail');
  };

  const logo = require('../../assets/logonegro.png');

  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <Image
        style={{alignSelf: 'center', marginTop: 20, width: 170, height: 170}}
        source={logo}
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
        style={{marginBottom: 15}}
        // keyExtractor={beers.id}
        renderItem={({item}) => (
          <Pressable
            style={{
              marginHorizontal: 10,
              width: '45%',
            }}
            onPress={() => onHandleButtonBeer(item.id)}>
            <HStack
              padding={8}
              borderWidth={1}
              borderColor="#FF6EFF"
              borderRadius={10}
              marginVertical={10}
              // marginHorizontal={10}
              alignItems="center">
              <Image
                resizeMode="contain"
                width={25}
                height={80}
                source={{uri: item.image_url}}
                alt="imagen"
              />
              <Text
                fontFamily="CroissantOne-Regular"
                marginLeft={13}
                numberOfLines={2}
                width="80%"
                color="#D3D3D3"
                marginRight={3}>
                {item.name}
              </Text>
            </HStack>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
