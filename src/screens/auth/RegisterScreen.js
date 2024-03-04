import { Alert, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useCallback } from 'react';
import {
  AppButton,
  AppText,
  AppTextInput,
  Container,
  Padding,
} from '@/components';
import { appStore } from '@/stores';
import { Observer, useLocalObservable } from 'mobx-react-lite';
import {
  CameraSvg,
  ChevronDownSvg,
  CircleCloseSvg,
  EyeOffSvg,
  EyeOnSvg,
} from '@/assets/svg';
import { useTranslation } from 'react-i18next';
import {
  validateEmail,
  validateFullName,
  validatePassword,
} from '@/utils/validator';
import { navigate } from '@/navigators/NavigationUtils';
import { Images } from '@/assets/images';
import { launchImageLibrary } from 'react-native-image-picker';
import layout from '@/theme/layout';
import { Colors } from '@/theme/colors';

const RegisterScreen = () => {
  const { t } = useTranslation(['auth']);
  const state = useLocalObservable(() => ({
    avatar: null,
    showPassword: false,
    password: '',
    email: '',
    fullname: '',
    errorEmail: '',
    errorPassword: '',
    errorFullname: '',
    setAvatar: value => (state.avatar = value),
    setFullname: value => (state.fullname = value),
    setShowPassword: value => (state.showPassword = value),
    setPassword: value => (state.password = value),
    setEmail: value => (state.email = value),
    setErrorEmail: value => (state.errorEmail = value),
    setErrorPassword: value => (state.errorPassword = value),
    setErrorFullname: value => (state.errorFullname = value),
  }));

  const onFullnameChange = value => {
    state.setFullname(value);
  };

  const onPasswordChange = value => {
    state.setPassword(value);
  };

  const onEmailChange = text => {
    state.setEmail(text);
  };

  const onRegisterPress = () => {
    state.setErrorFullname(validateFullName(state.fullname));
    state.setErrorPassword(validatePassword(state.password));
    state.setErrorEmail(validateEmail(state.email));

    if (state.errorFullname) {
      Alert.alert('', state.errorFullname);
      return;
    }

    if (state.errorEmail) {
      Alert.alert('', state.errorEmail);
      return;
    }

    if (state.errorPassword) {
      Alert.alert('', state.errorPassword);
      return;
    }
  };

  const onAvatarPress = useCallback(async () => {
    const response = await launchImageLibrary({
      mediaType: 'photo',
    });
    if (response?.assets?.[0]) {
      console.log(response.assets[0].uri);

      state.setAvatar(response.assets[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <View style={[layout.row, layout.justifyBetween, layout.itemsCenter]}>
        <AppText style={styles.loginTitle} bold color={Colors.primaryLight}>
          {t('register')}
        </AppText>
        <TouchableOpacity
          style={layout.selfEnd}
          onPress={() => appStore.setShowLanguageSheet(true)}>
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
      </View>

      <TouchableOpacity onPress={onAvatarPress} style={styles.avatarField}>
        <CameraSvg color={Colors.primary} />

        <Observer>
          {() =>
            state.avatar && (
              <Image
                style={styles.avatar}
                source={{
                  uri: state.avatar.uri,
                }}
              />
            )
          }
        </Observer>
      </TouchableOpacity>

      <View style={styles.p16}>
        <View style={styles.textField}>
          <Observer>
            {() => (
              <AppTextInput
                value={state.fullname}
                onChangeText={onFullnameChange}
                style={styles.input}
                placeholderTextColor={Colors.placeholder}
                placeholder={t('fullname_placeholder')}
              />
            )}
          </Observer>
          <TouchableOpacity hitSlop={20} onPress={() => onFullnameChange('')}>
            <CircleCloseSvg size={18} />
          </TouchableOpacity>
        </View>

        <Padding bottom={16} />

        <View style={styles.textField}>
          <Observer>
            {() => (
              <AppTextInput
                keyboardType="email-address"
                value={state.email}
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
        {/* <Observer>{() => <ErrorLabel text={state.errorEmail} />}</Observer> */}
        <Padding bottom={16} />

        <View style={styles.textField}>
          <Observer>
            {() => (
              <AppTextInput
                secureTextEntry={!state.showPassword}
                value={state.password}
                onChangeText={onPasswordChange}
                style={styles.input}
                placeholderTextColor={Colors.placeholder}
                placeholder={t('password_placeholder')}
              />
            )}
          </Observer>
          <TouchableOpacity
            hitSlop={20}
            onPress={() => state.setShowPassword(!state.showPassword)}>
            <Observer>
              {() =>
                state.showPassword ? (
                  <EyeOnSvg size={18} />
                ) : (
                  <EyeOffSvg size={18} />
                )
              }
            </Observer>
          </TouchableOpacity>
        </View>
        <Padding bottom={16} />

        <Observer>
          {() => (
            <AppButton
              disabledBackgroundColor={Colors.disabled}
              radius={10}
              text={t('register')}
              onPress={onRegisterPress}
              textSize={19}
              bold
              style={styles.signIn}
            />
          )}
        </Observer>

        <Padding top={20} />
        <AppText textAlign="center" color={Colors.placeholder}>
          {t('register_note')}
        </AppText>

        <Padding
          vertical={40}
          style={[layout.row, layout.itemsCenter, layout.justifyCenter]}>
          <AppText color={Colors.placeholder}>
            {t('already_have_account')}{' '}
          </AppText>
          <TouchableOpacity onPress={() => navigate('Login')}>
            <AppText bold color={Colors.primary}>
              {t('login_here')}
            </AppText>
          </TouchableOpacity>
        </Padding>
      </View>
      <Image source={Images.blueBlur} style={styles.blueBlur} />
    </Container>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  avatar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  blueBlur: {
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
    right: 0,
  },
  signIn: { height: 60, justifyContent: 'center' },
  p16: { padding: 16 },
  input: {
    flex: 1,
    paddingRight: 10,
    fontSize: 16,
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
    marginVertical: 20,
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 16,
  },
});
