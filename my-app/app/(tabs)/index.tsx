import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="library" component={HomeScreen} />
      <Tab.Screen name="liked" component={ProfileScreen} />
      <Tab.Screen name="suggested" component={SuggestedScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <View>
      <Text>This is home screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Text>This is home screen</Text>
    </View>
  );
}
function SuggestedScreen() {
  return (
    <View>
      <Text>This is home screen</Text>
    </View>
  );
}
