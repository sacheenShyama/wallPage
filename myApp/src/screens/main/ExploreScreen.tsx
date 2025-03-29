import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import {MainTabParamList} from '../../types/navigation';
type Props = BottomTabScreenProps<MainTabParamList, 'Explore'>;
export default function ExploreScreen({}: Props) {
  return (
    <View>
      <Text>Explore screen</Text>
    </View>
  );
}
