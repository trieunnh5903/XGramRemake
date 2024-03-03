import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AppGradientText, AppText, Container, Padding } from '@/components';
import { appStore } from '@/stores';
import { Observer } from 'mobx-react-lite';
import { CameraSvg, ChevronDownSvg } from '@/assets/svg';
import { Colors } from '@/theme/colors';
import layout from '@/theme/layout';
import Animated, {
  FadeInLeft,
  FadeInRight,
  ZoomIn,
} from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';

const RegisterScreen = () => {
  const { t } = useTranslation('register');
  return (
    <Container>
      <TouchableOpacity onPress={() => appStore.setShowLanguageSheet(true)}>
        <View style={styles.languagePicker}>
          {appStore.currentLanguage && (
            <Observer>
              {() => (
                <AppText style={styles.language} typeStyle="title-medium">
                  {appStore.currentLanguage?.name}
                </AppText>
              )}
            </Observer>
          )}
          <ChevronDownSvg size={12} />
        </View>
      </TouchableOpacity>

      <View style={[layout.itemsCenter]}>
        <AppGradientText
          style={styles.loginTitle}
          colors={[Colors.kFF7A51, Colors.kFFDB5C]}>
          {t('register')}
        </AppGradientText>
        <View style={[layout.row, layout.itemsCenter]}>
          <Animated.View
            style={styles.separatorLine}
            entering={FadeInLeft.delay(1000)}
          />
          <Padding horizontal={12}>
            <Animated.View
              style={styles.separatorLineDot}
              entering={ZoomIn.delay(1500)}
            />
          </Padding>
          <Animated.View
            style={styles.separatorLine}
            entering={FadeInRight.delay(1000)}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.avatarField}>
        <CameraSvg color={Colors.primary} />
        {/* <Obx>
          {() =>
            state.avatar && (
              <Image
                style={styles.avatarImg}
                source={{
                  uri: state.avatar.uri,
                }}
              />
            )
          }
        </Obx> */}
        {false && (
          <Image
            style={styles.avatarImg}
            source={{
              uri: undefined,
            }}
          />
        )}
      </TouchableOpacity>
    </Container>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  avatarField: {
    height: 100,
    width: 100,
    backgroundColor: Colors.white50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    alignSelf: 'center',
    borderColor: Colors.primary,
    borderWidth: 1,
    overflow: 'hidden',
  },
  separatorLineDot: {
    height: 6,
    width: 6,
    borderRadius: 99,
    backgroundColor: Colors.kFF7A51,
  },
  separatorLine: {
    height: 2,
    width: 100,
    backgroundColor: Colors.kFF7A51,
  },
  language: { color: Colors.black, fontWeight: 'bold' },
  languagePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    gap: 6,
    margin: 20,
  },
  loginTitle: {
    fontSize: 32,
    lineHeight: 77,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
