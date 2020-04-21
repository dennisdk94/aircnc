import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Lists from './pages/Lists';
import Book from './pages/Book';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Lists,
    Book
  })
);

export default Routes;