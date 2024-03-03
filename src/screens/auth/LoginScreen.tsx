/* eslint-disable react-hooks/exhaustive-deps */
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback } from 'react';
import {
  AppButton,
  AppGradientText,
  AppText,
  AppTextInput,
  Container,
  ErrorLabel,
  Padding,
} from '@/components';
import { appStore } from '@/stores';
import { ScrollView } from 'react-native-gesture-handler';
import {
  CheckSvg,
  ChevronDownSvg,
  CircleCloseSvg,
  EyeOffSvg,
  EyeOnSvg,
} from '@/assets/svg';
import { Colors } from '@/theme/colors';
import { Observer, useLocalObservable } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import layout from '@/theme/layout';
import Animated, {
  FadeInLeft,
  FadeInRight,
  ZoomIn,
} from 'react-native-reanimated';
import { validateEmail, validatePassword } from '@/utils/validator';
import { navigate } from '@/navigators/NavigationUtils';
import { Images } from '@/assets/images';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const LoginScreen = () => {
  const { t } = useTranslation('login');
  const states = useLocalObservable(() => ({
    showPassword: false,
    password: 'trieunnh@gmail.com',
    email: 'trieunnh@gmail.com',
    saveLogin: true,
    errorPassword: '',
    errorEmail: '',
    setShowPassword: (value: boolean) => (states.showPassword = value),
    setPassword: (value: string) => (states.password = value),
    setEmail: (value: string) => (states.email = value),
    setSaveLogin: (value: boolean) => (states.saveLogin = value),
    setErrorPassword: (value: string) => (states.errorPassword = value),
    setErrorEmail: (value: string) => (states.errorEmail = value),
    isValid() {
      return (
        !this.errorEmail && !this.errorPassword && this.email && this.password
      );
    },
  }));

  const onEmailChange = useCallback((value: string) => {
    states.setEmail(value);
    states.setErrorEmail(validateEmail(value));
  }, []);

  const onPasswordChange = useCallback((value: string) => {
    states.setPassword(value);
    states.setErrorPassword(validatePassword(value));
  }, []);

  const onLoginPress = useCallback(() => {
    //Todo: Login
  }, []);

  const onLoginWithGooglePress = useCallback(async () => {
    try {
      if ((Platform.OS = 'android')) {
        GoogleSignin.configure({
          scopes: ['profile', 'email'],
        });
      }
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      const token = await GoogleSignin.getTokens();
      const user = {
        ...response.user,
        token: token.accessToken,
      };
      console.log(user);
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  }, []);

  const onRegisterPress = () => {
    navigate('Register');
  };
  return (
    <Container
      style={styles.container}
      statusBarProps={{ barStyle: 'dark-content' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
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

        <View style={[layout.itemsCenter, layout.flex_1]}>
          <AppGradientText
            style={styles.loginTitle}
            colors={[Colors.kFF7A51, Colors.kFFDB5C]}>
            {t('login_title')}
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

        <View style={{ padding: 16, marginTop: 30 }}>
          <View style={styles.textField}>
            <Observer>
              {() => (
                <AppTextInput
                  keyboardType="email-address"
                  value={states.email}
                  onChangeText={onEmailChange}
                  style={styles.input}
                  placeholderTextColor={Colors.placeholder}
                  placeholder={t('email_placeholder')}
                />
              )}
            </Observer>

            <TouchableOpacity hitSlop={20} onPress={() => onEmailChange('')}>
              <CircleCloseSvg size={18} />
            </TouchableOpacity>
          </View>
          <Observer>{() => <ErrorLabel text={states.errorEmail} />}</Observer>
          <View style={styles.textField}>
            <Observer>
              {() => (
                <AppTextInput
                  secureTextEntry={!states.showPassword}
                  value={states.password}
                  onChangeText={onPasswordChange}
                  style={styles.input}
                  placeholderTextColor={Colors.placeholder}
                  placeholder={t('password_placeholder')}
                />
              )}
            </Observer>
            <TouchableOpacity
              hitSlop={20}
              onPress={() => states.setShowPassword(!states.showPassword)}>
              <Observer>
                {() =>
                  states.showPassword ? (
                    <EyeOnSvg size={18} />
                  ) : (
                    <EyeOffSvg size={18} />
                  )
                }
              </Observer>
            </TouchableOpacity>
          </View>
          <Observer>
            {() => <ErrorLabel text={states.errorPassword} />}
          </Observer>

          <TouchableOpacity
            onPress={() => navigate('RecoveryPassword')}
            style={[layout.selfEnd]}
            hitSlop={10}>
            <AppText
              typeStyle="label-large"
              style={{ color: Colors.placeholder }}>
              {t('recover_password')}
            </AppText>
          </TouchableOpacity>

          <Observer>
            {() => (
              <AppButton
                disabled={!states.isValid}
                disabledBackgroundColor={Colors.disabled}
                radius={10}
                text={t('signIn')}
                onPress={onLoginPress}
                style={styles.loginBtn}
                typeStyle="title-medium"
                textSize={18}
              />
            )}
          </Observer>

          <Observer>
            {() => (
              <TouchableOpacity
                onPress={() => states.setSaveLogin(!states.saveLogin)}
                style={styles.saveLoginBtn}>
                <View
                  style={[
                    styles.checkBox,
                    {
                      backgroundColor: states.saveLogin
                        ? Colors.primary
                        : Colors.gray,
                    },
                  ]}>
                  <CheckSvg color={Colors.white} size={12} />
                </View>
                <AppText
                  typeStyle="label-large"
                  style={{
                    color: states.saveLogin ? Colors.black : Colors.black50,
                  }}>
                  {t('save_login')}
                </AppText>
              </TouchableOpacity>
            )}
          </Observer>

          <View
            style={[
              layout.row,
              layout.justifyCenter,
              layout.itemsCenter,
              { marginTop: 30 },
            ]}>
            <View style={styles.line} />
            <Padding horizontal={17}>
              <AppText typeStyle="label-large" color={Colors.placeholder}>
                {t('or_continue_with')}
              </AppText>
            </Padding>
            <View style={styles.line} />
          </View>

          <TouchableOpacity
            onPress={onLoginWithGooglePress}
            activeOpacity={0.8}
            style={styles.googleBtn}>
            <AppText bold color={Colors.placeholder}>
              {t('login_with_google')}
            </AppText>
            <Image style={styles.icGoogle} source={Images.icGoogle} />
          </TouchableOpacity>

          <View
            style={[
              layout.row,
              layout.itemsCenter,
              layout.justifyCenter,
              { marginTop: 30 },
            ]}>
            <AppText typeStyle="label-large" color={Colors.placeholder}>
              {t('dont_have_account')}
            </AppText>
            <TouchableOpacity onPress={onRegisterPress}>
              <AppText typeStyle="label-large" bold color={Colors.primary}>
                {' '}
                {t('register_here')}
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Image source={Images.blueBlur} style={styles.blueBlur} />
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  blueBlur: {
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
    right: 0,
  },
  googleBtn: {
    marginTop: 30,
    height: 60,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  icGoogle: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 20,
  },
  line: { backgroundColor: Colors.kDFDFDF, height: 1, width: 80 },
  checkBox: {
    width: 20,
    height: 20,
    borderRadius: 8,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveLoginBtn: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  loginBtn: {
    marginTop: 15,
    height: 60,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    paddingRight: 10,
  },
  textField: {
    height: 60,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  separatorLine: {
    height: 2,
    width: 100,
    backgroundColor: Colors.kFF7A51,
  },
  loginTitle: {
    fontSize: 32,
    lineHeight: 77,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: { backgroundColor: Colors.background, flex: 1 },
  language: { color: Colors.black, fontWeight: 'bold' },
  languagePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    gap: 6,
    margin: 20,
    // position: 'absolute',
    // zIndex: 99,
    // right: 26,
    // top: 20,
  },
  separatorLineDot: {
    height: 6,
    width: 6,
    borderRadius: 99,
    backgroundColor: Colors.kFF7A51,
  },
});
