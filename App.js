import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Test1 from './Src/Test1';
import Test2 from './Src/Test2';
import Login from './Src/ChatApp/Login';
import SignUp from './Src/ChatApp/SignUp';
import ChatScreen from './Src/ChatApp/ChatScreen';
import UsersScreen from './Src/ChatApp/UsersScreen';

const navigator = createStackNavigator(
  {
    Test1: Test1,
    Test2: Test2,
    Login: Login,
    SignUp: SignUp,
    ChatScreen: ChatScreen,
    UsersScreen: UsersScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(navigator);
