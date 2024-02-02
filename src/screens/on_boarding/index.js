import {StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import {useTranslation} from 'react-i18next';
import {GlobalStyle} from '@/config';
import {useAppTheme} from '@/hooks';
import {AppText, Container} from '@/components';
import {ChevronRightSvg} from '@/assets/svg';
import {colors} from '@/theme/colors';

const OnBoardingScreen = ({navigate}) => {
  const {t} = useTranslation('common');
  const appTheme = useAppTheme();
  return (
    <Container statusBarProps={{barStyle: 'light-content'}} edgeTop={false}>
      <Animated.View
        style={[GlobalStyle.flex, {backgroundColor: appTheme.kE5AFAF}]}>
        <View style={styles.headerView}>
          <TouchableOpacity style={styles.skipBtn}>
            <AppText typeStyle="title-small">{t('choose_language')}</AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skipBtn}>
            <AppText typeStyle="title-small">{t('skip')}</AppText>
            <ChevronRightSvg color={colors.white90} size={14} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Container>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: StatusBar.currentHeight,
  },

  skipBtn: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
