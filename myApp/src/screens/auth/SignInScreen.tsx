import {StackScreenProps} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import {AuthStackParamList} from '../../types/navigation';

type Props = StackScreenProps<AuthStackParamList, 'SignIn'>;
export default function SignInScreen({navigation}: Props) {
  return (
    <View>
      <Text>Sign in Screen</Text>
      <Button
        title="Go to sign up page"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title="go to Main"
        onPress={() => navigation.navigate('MainTabs')}
      />
    </View>
  );
}
