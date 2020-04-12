import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './source/store/reducers/products';
import cartReducer from './source/store/reducers/cart';
import ordersReducer from './source/store/reducers/orders';
import ShopNavigator from './source/navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
});

const store = createStore(rootReducer);

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
