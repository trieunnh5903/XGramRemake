import { Images } from '@/assets/images';
import { Container } from '@/components';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <Container style={styles.container}>
      <Image style={styles.bgImage} source={Images.enso} />
    </Container>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {},
});
