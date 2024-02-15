import {Image, StyleSheet, View} from 'react-native';
import React, {memo, useEffect, useRef} from 'react';
import {AppBottomSheet, AppText} from '.';
import BottomSheet, {
  BottomSheetFlatList,
  TouchableOpacity,
} from '@gorhom/bottom-sheet';
import {autorun} from 'mobx';
import {appStore} from '@/stores';
import {useTranslation} from 'react-i18next';
import {colors} from '@/theme/colors';
import {CheckSvg} from '@/assets/svg';
import {Language} from '@/types/language';
import useTheme from '@/hooks/useTheme';

const LanguageSheet = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const {t} = useTranslation('on_boarding');
  const {layout} = useTheme();
  useEffect(() => {
    const disposer = autorun(() => {
      if (appStore.showLanguageSheet) {
        sheetRef?.current?.expand();
      } else {
        sheetRef.current?.close();
      }
    });
    return () => disposer();
  }, []);

  const handleLanguagePress = (item: Language) => {
    appStore.setLanguageCode(item?.code);
    appStore.setShowLanguageSheet(false);
  };

  const renderLangItem = ({item}: {item: Language}) => {
    return (
      <TouchableOpacity
        onPress={() => handleLanguagePress(item)}
        style={styles.langItem}>
        <View style={layout.row}>
          <Image source={item.flag} style={styles.flag} />
          <AppText typeStyle="title-small" style={{color: colors.black}}>
            {item.name}
          </AppText>
        </View>
        <CheckSvg
          size={16}
          color={item.isSelected ? colors.k5BB318 : colors.gray}
        />
      </TouchableOpacity>
    );
  };
  return (
    <AppBottomSheet ref={sheetRef} snapPoints={['25%']}>
      <View style={[layout.flex_1, {padding: 10, paddingTop: 0}]}>
        <AppText style={{color: colors.black}} typeStyle="title-medium">
          {t('choose_language')}
        </AppText>
        <BottomSheetFlatList
          data={appStore.languages}
          renderItem={renderLangItem}
          keyExtractor={(_, index) => `${index}`}
        />
      </View>
    </AppBottomSheet>
  );
};

export default memo(LanguageSheet);

const styles = StyleSheet.create({
  langItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomColor: colors.border,
    borderBottomWidth: 0.8,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
});
