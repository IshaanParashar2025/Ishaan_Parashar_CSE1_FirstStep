import { Pressable, View } from 'react-native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

export function HapticTab(props: BottomTabBarButtonProps) {
  const { children, accessibilityState, onPress } = props;
  const focused = accessibilityState?.selected || false;

  return (
    <Pressable 
      onPress={onPress}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
      }}
    >
      <View>
        {children}
      </View>
    </Pressable>
  );
}