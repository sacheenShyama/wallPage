import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {Text, View} from 'react-native';
import {ForYouTopTabParamList} from '../../types/navigation';

type Props = MaterialTopTabScreenProps<ForYouTopTabParamList, 'Suggested'>;
export default function SuggestedScreen({}: Props) {
  return (
    <View>
      <Text>Suggested screen</Text>
    </View>
  );
}
