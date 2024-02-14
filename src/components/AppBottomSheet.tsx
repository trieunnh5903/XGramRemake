import React, {Ref, forwardRef, memo, useCallback} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetProps,
} from '@gorhom/bottom-sheet';
import {appStore} from '@/stores';

interface AppBottomSheetProps extends BottomSheetProps {
  children: React.ReactNode;
}
const AppBottomSheet = forwardRef(
  (
    {
      snapPoints = ['50%'],
      children,
      index = -1,
      ...restProps
    }: AppBottomSheetProps,
    ref: Ref<BottomSheet>,
  ) => {
    const handleSheetChanges = (snapIndex: number) => {
      if (snapIndex === -1) {
        appStore.setShowLanguageSheet(false);
      }
    };
    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...props}
        />
      ),
      [],
    );
    return (
      <BottomSheet
        backdropComponent={renderBackdrop}
        ref={ref}
        {...restProps}
        snapPoints={snapPoints}
        index={index}
        onChange={handleSheetChanges}
        enablePanDownToClose>
        {children}
      </BottomSheet>
    );
  },
);

export default memo(AppBottomSheet);
