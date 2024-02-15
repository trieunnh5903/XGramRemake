import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useMemo, useRef} from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {useTranslation} from 'react-i18next';
import {AppText, Container} from '@/components';
import {ArrowRightSvg, BallSvg, ChevronRightSvg} from '@/assets/svg';
import {colors} from '@/theme/colors';
import {Images} from '@/assets/images';
import {screenWidth} from '@/theme/size';
import {useLocalObservable} from 'mobx-react-lite';
import {appStore} from '@/stores';
import useTheme from '@/hooks/useTheme';

const OnBoardingScreen = () => {
  const {t} = useTranslation('on_boarding');
  const scrollX = useSharedValue(0);
  const flatlistRef = useRef();
  const {layout} = useTheme();

  const state = useLocalObservable(() => ({
    currentPage: 0,
    setCurrentPage: index => (state.currentPage = index),
  }));

  const handleNextPress = () => {
    if (state.currentPage === 2) {
      return;
    }
    flatlistRef.current?.scrollToIndex({index: state.currentPage + 1});
    state.setCurrentPage(state.currentPage + 1);
  };

  const handleChangeLanguage = () => {
    appStore.setShowLanguageSheet(true);
  };

  const data = useMemo(
    () => [
      {
        title: t('videos'),
        description: t('description'),
        shapes: [
          Images.abstractShape1,
          Images.abstractShape2,
          Images.abstractShape3,
          Images.abstractShape4,
        ],
      },
      {
        title: t('photos'),
        description: t('description1'),
        shapes: [
          Images.clapperboard,
          Images.picture,
          Images.round,
          Images.square,
        ],
      },
      {
        title: t('reels'),
        description: t('description2'),
        shapes: [Images.mozy, Images.heart, Images.enso, Images.star],
      },
    ],
    [t],
  );

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({contentOffset: {x}}) => {
      scrollX.value = x;
    },
  });

  const renderPageDotItem = (_, index) => {
    return <PageDot key={index} scrollX={scrollX} index={index} />;
  };

  const backgroundColorAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollX.value,
        [0, screenWidth, screenWidth * 2],
        [colors.kE5AFAF, colors.kC4BCFF, colors.kC2D8BE],
      ),
    };
  });
  return (
    <Container statusBarProps={{barStyle: 'light-content'}} edgeTop={false}>
      <Animated.View style={[layout.flex_1, backgroundColorAnimatedStyle]}>
        {/* header */}
        <View style={styles.headerView}>
          <TouchableOpacity
            onPress={handleChangeLanguage}
            style={styles.skipBtn}>
            <AppText typeStyle="title-medium">{t('choose_language')}</AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skipBtn}>
            <AppText typeStyle="title-medium">{t('skip')}</AppText>
            <ChevronRightSvg color={colors.white90} size={14} />
          </TouchableOpacity>
        </View>

        <View style={layout.flex_1}>
          {/* list */}
          <Animated.FlatList
            onMomentumScrollEnd={({
              nativeEvent: {
                contentOffset: {x},
              },
            }) => state.setCurrentPage(Math.round(x / screenWidth))}
            ref={flatlistRef}
            overScrollMode={'never'}
            data={data}
            renderItem={({item, index}) => {
              return <PageItem data={item} index={index} scrollX={scrollX} />;
            }}
            onScroll={scrollHandler}
            pagingEnabled
            horizontal
            scrollEventThrottle={20}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => `onboarding-${index}`}
          />
        </View>

        {/* footer */}
        <View style={styles.footerView}>
          <View style={styles.pageIndicatorView}>
            {data.map(renderPageDotItem)}
          </View>
          <View style={[layout.justifyCenter, layout.itemsCenter]}>
            <TouchableOpacity
              onPress={handleNextPress}
              style={styles.nextBtn}
              activeOpacity={0.8}>
              <ArrowRightSvg color={colors.white90} />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </Container>
  );
};

export default OnBoardingScreen;

const PageDot = memo(({scrollX, index}) => {
  const inputRange = [
    screenWidth * (index - 1),
    screenWidth * index,
    screenWidth * (index + 1),
  ];
  const dotStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollX.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolation.CLAMP,
    ),
    width: interpolate(
      scrollX.value,
      inputRange,
      [8, 34, 8],
      Extrapolation.CLAMP,
    ),
  }));
  return <Animated.View style={[styles.pageDot, dotStyle]} />;
});

const PageItem = memo(({data, scrollX, index}) => {
  const {layout} = useTheme();
  const inputRange = [
    (index - 1) * screenWidth,
    index * screenWidth,
    (index + 1) * screenWidth,
  ];
  const ballStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${interpolate(
          scrollX.value,
          [0, screenWidth, screenWidth * 2],
          [0, 90, 180],
          Extrapolation.CLAMP,
        )}deg`,
      },
    ],
  }));
  const descriptionStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          scrollX.value,
          inputRange,
          [0.5, 1, 0.5],
          Extrapolation.CLAMP,
        ),
      },
    ],
    opacity: interpolate(scrollX.value, inputRange, [0, 1, 0]),
  }));

  const bubble1Position = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(scrollX.value, inputRange, [0, 1, 0]),
      },
      {
        translateX: interpolate(scrollX.value, inputRange, [0, 130, 0]),
      },
      {
        translateY: interpolate(scrollX.value, inputRange, [0, 130, 0]),
      },
    ],
  }));
  const bubble2Position = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(scrollX.value, inputRange, [0, 1, 0]),
      },
      {
        translateX: interpolate(scrollX.value, inputRange, [0, -130, 0]),
      },
      {
        translateY: interpolate(scrollX.value, inputRange, [0, -130, 0]),
      },
    ],
  }));
  const bubble3Position = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(scrollX.value, inputRange, [0, 1, 0]),
      },
      {
        translateX: interpolate(scrollX.value, inputRange, [0, 130, 0]),
      },
      {
        translateY: interpolate(scrollX.value, inputRange, [0, -130, 0]),
      },
    ],
  }));
  const bubble4Position = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(scrollX.value, inputRange, [0, 1, 0]),
      },
      {
        translateX: interpolate(scrollX.value, inputRange, [0, -130, 0]),
      },
      {
        translateY: interpolate(scrollX.value, inputRange, [0, 130, 0]),
      },
    ],
  }));
  return (
    <Animated.View style={[styles.pageItem]}>
      <View style={[layout.itemsCenter, layout.justifyCenter]}>
        <Animated.View style={ballStyle}>
          <BallSvg size={300} />
        </Animated.View>
        <AppText typeStyle="headline-large" style={styles.textHeadline}>
          {data.title}
        </AppText>
        <Animated.View style={[styles.bubbleItem, bubble1Position]}>
          <Image source={data.shapes[0]} style={{transform: [{scale: 0.5}]}} />
        </Animated.View>
        <Animated.View style={[styles.bubbleItem, bubble2Position]}>
          <Image source={data.shapes[1]} style={{transform: [{scale: 0.5}]}} />
        </Animated.View>
        <Animated.View style={[styles.bubbleItem, bubble3Position]}>
          <Image source={data.shapes[2]} style={{transform: [{scale: 0.5}]}} />
        </Animated.View>
        <Animated.View style={[styles.bubbleItem, bubble4Position]}>
          <Image source={data.shapes[3]} style={{transform: [{scale: 0.5}]}} />
        </Animated.View>
      </View>

      <View style={styles.descriptionView}>
        <Animated.View style={descriptionStyle}>
          <AppText typeStyle="title-large" style={styles.descriptionText}>
            {data.description}
          </AppText>
        </Animated.View>
      </View>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  footerView: {
    paddingBottom: 30,
  },
  pageDot: {
    width: 32,
    backgroundColor: colors.white,
    borderRadius: 6,
    height: 6,
  },

  nextBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
    backgroundColor: colors.k222222,
    height: 62,
    width: 62,
  },

  pageIndicatorView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    gap: 10,
  },

  textHeadline: {
    position: 'absolute',
    fontWeight: 'bold',
  },
  pageItem: {
    width: screenWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
  },
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

  bubbleItem: {
    position: 'absolute',
    zIndex: -1,
    opacity: 0.3,
  },

  descriptionView: {
    paddingHorizontal: 30,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  descriptionText: {
    textAlign: 'center',
  },
});
