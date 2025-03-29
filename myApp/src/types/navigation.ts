import {NavigatorScreenParams} from '@react-navigation/native';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  MainTabs: NavigatorScreenParams<MainTabParamList>;
};

export type MainTabParamList = {
  ForYou: NavigatorScreenParams<ForYouTopTabParamList>;
  Explore: undefined;
  Account: undefined;
};
export type ForYouTopTabParamList = {
  Suggested: undefined;
  Liked: undefined;
};
