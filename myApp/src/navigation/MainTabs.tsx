import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from '../types/navigation';
import ForYouScreen from '../screens/main/ForYouScreen';
import ExploreScreen from '../screens/main/ExploreScreen';
import AccountScreen from '../screens/main/AccountScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();
export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ForYou" component={ForYouScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
