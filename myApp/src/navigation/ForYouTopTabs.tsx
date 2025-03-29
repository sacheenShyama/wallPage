import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ForYouTopTabParamList} from '../types/navigation';
import SuggestedScreen from '../screens/foryou/SuggestedScreen';
import LikedScreen from '../screens/foryou/LikedScreen';

const TopTab = createMaterialTopTabNavigator<ForYouTopTabParamList>();
export default function ForYouTopTabs() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Suggested" component={SuggestedScreen} />
      <TopTab.Screen name="Liked" component={LikedScreen} />
    </TopTab.Navigator>
  );
}
