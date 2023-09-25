import {Pressable, SafeAreaView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {HStack, Text, Image, Box} from '@gluestack-ui/themed';
import Header from '../components/Header';

const BeerDetail = ({navigation}: any) => {
  const beerSelected = useSelector(state => state.BeerSlice.beerSelected);
  console.log('beerSelected', beerSelected);
  const beer = beerSelected[0];

  console.log(JSON.stringify(beer, null, ' '), 'BEER SELECTED');
  beer && console.log(beer.tagline);

  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <Header
        tagline={beer.tagline}
        title={beer.name}
        navigation={navigation}
      />
      <Box marginHorizontal={20}>
        <Pressable
          style={{marginLeft: 15, marginBottom: 10}}
          onPress={() => console.log('')}>
          {/* <AntDesign name="caretleft" size={24} color={colors.mediumBlue} /> */}
        </Pressable>
        <HStack alignItems="baseline" mt={15}>
          <Image
            resizeMode="contain"
            width={80}
            height={180}
            source={{uri: beer.image_url}}
            alt="detalle"
          />
          <Text color="white"> {beer.volume.value} </Text>
          <Text color="white">{beer.volume.unit} </Text>
        </HStack>
        <Box mt={35}>
          <Text fontSize={20} mb={5} color="white">
            Descripción:
          </Text>
          <Text color="white">{beer.description} </Text>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default BeerDetail;
