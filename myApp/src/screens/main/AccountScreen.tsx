import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import {MainTabParamList} from '../../types/navigation';
type Props = BottomTabScreenProps<MainTabParamList, 'Account'>;
export default function AccountScreen({}: Props) {
  return (
    <View>
      <Text>Account screen</Text>
    </View>
  );
}
