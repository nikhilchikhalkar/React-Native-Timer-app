import { createStackNavigator } from '@react-navigation/stack';


export const MainRoutes = {
  // SPLASH_SCREEN: 'SplashScreen',
 
  // WELCOME_SCREEN:'WelcomeScreen',
  HOME_SCREEN:'HomeScreen',
  HISTORY_SCREEN:'HistoryScreen',
  
};

export const RootStackParamList = {
  // [MainRoutes.SPLASH_SCREEN]:{}| undefined,
  //  [MainRoutes.WELCOME_SCREEN]: {}|undefined,
   [MainRoutes.HOME_SCREEN]: {}|undefined,
   [MainRoutes.HISTORY_SCREEN]: {}|undefined,
   

};

export const MainStack = createStackNavigator();  
export const useNavType = {
  navigate: () => {}, 
};
