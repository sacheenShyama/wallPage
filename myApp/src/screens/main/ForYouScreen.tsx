import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import {MainTabParamList} from '../../types/navigation';
import ForYouTopTabs from '../../navigation/ForYouTopTabs';
type Props = BottomTabScreenProps<MainTabParamList, 'ForYou'>;
export default function ForYouScreen({}: Props) {
  return (
    <View>
      <Text>For you screen</Text>
      <ForYouTopTabs />
    </View>
  );
}
