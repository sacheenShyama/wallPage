import {StackScreenProps} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import {AuthStackParamList} from '../../types/navigation';

type Props = StackScreenProps<AuthStackParamList, 'SignUp'>;

export default function SignUpScreen({navigation}: Props) {
  return (
    <View>
      <Text>Sign Up Screen</Text>
      <Button
        title="Go on sign-in page"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
}
