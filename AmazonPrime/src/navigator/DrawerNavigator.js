import { DrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import { Menu } from '../components/Menu';
import Wellcome from '../screens/Wellcome';



let _screenWidth = Dimensions.get('window').width;

// side menu
export const SideMenu = DrawerNavigator(
    {
        Map: {
            screen: Home,
        }
    },
    {
        drawerWidth: _screenWidth * 0.7,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props} />
    }
);
