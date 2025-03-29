import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {Text, View} from 'react-native';
import {ForYouTopTabParamList} from '../../types/navigation';

type Props = MaterialTopTabScreenProps<ForYouTopTabParamList, 'Liked'>;
export default function LikedScreen({}: Props) {
  return (
    <View>
      <Text>Liked screen</Text>
    </View>
  );
}
