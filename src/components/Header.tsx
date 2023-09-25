import {Pressable, View} from 'react-native';
import {Box, Text} from '@gluestack-ui/themed';
import React from 'react';
import BackIcon from '../../assets/svg/BackIcon';

interface IHeaderProps {
  navigation: any;
  title: string;
  tagline: string;
}

const Header = ({navigation, title, tagline}: IHeaderProps) => {
  return (
    <Box>
      <Pressable
        style={{position: 'absolute', left: 15, top: 20}}
        onPress={() => navigation.goBack()}>
        <BackIcon />
      </Pressable>
      <Box alignItems="center" mt={70}>
        <Text
          color="#FF6EFF"
          alignSelf="center"
          paddingTop={10}
          fontSize={30}
          fontFamily="CroissantOne-Regular">
          {title}
        </Text>
        <Text color="white" fontFamily="CroissantOne-Regular">
          ¡{tagline}!
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
