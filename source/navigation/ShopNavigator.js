import React from 'react';
import {
  createStackNavigator,
} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {
  createAppContainer
} from 'react-navigation';
import { Platform } from 'react-native';
import { Icon } from 'react-native-vector-icons/Ionicons';
import { View,Text } from 'react-native'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import Colors from '../constants/Colors';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'OpenSans-Regular'
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans-Regular'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: {'screen':ProductsOverviewScreen},
    ProductDetail: {'screen':ProductDetailScreen},
    Cart: {'screen':CartScreen}
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Icon
          name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: {'screen':OrdersScreen}
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Icon
          name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const AdminNavigator = createStackNavigator(
    {
      UserProducts: {'screen':UserProductsScreen},
      EditProduct: {'screen':EditProductScreen}
    },
    {
      navigationOptions: {
        drawerIcon: drawerConfig => (
          <Icon
            name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
            size={23}
            color={drawerConfig.tintColor}
          />
        )
      },
      defaultNavigationOptions: defaultNavOptions
    }
  );

const ShopNavigator = createDrawerNavigator(
  {
    Products: {'screen':ProductsNavigator},
    Orders: {'screen':OrdersNavigator},
    Admin: {'screen':AdminNavigator}
  },
  {
    contentComponent : ()=><View><Text>Hi</Text></View>,
          drawerWidth:250,
          drawerType:'slide'
  }
);

export default createAppContainer(ShopNavigator);
