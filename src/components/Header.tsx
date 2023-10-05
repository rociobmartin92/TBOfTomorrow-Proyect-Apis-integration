import {Pressable, View} from 'react-native';
import {Box, HStack, Text} from '@gluestack-ui/themed';
import React from 'react';
import BackIcon from '../../assets/svg/BackIcon';

interface IHeaderProps {
  navigation: any;
  title: string;
  tagline: string;
}

const Header = ({navigation, title, tagline}: IHeaderProps) => {
  return (
    <Box marginLeft={15}>
      <HStack marginTop={60}>
        <Pressable onPress={() => navigation.goBack()}>
          <BackIcon />
        </Pressable>
        <Text
          marginLeft={50}
          color="#FF6EFF"
          alignSelf="center"
          paddingTop={10}
          fontSize={30}
          fontFamily="CroissantOne-Regular">
          {title}
        </Text>
      </HStack>
      <Text color="white" fontFamily="CroissantOne-Regular" marginTop={5}>
        ¡{tagline}!
      </Text>
    </Box>
  );
};

export default Header;
