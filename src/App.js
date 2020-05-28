import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'

// import CakeContainer from './components/CakeContainer';
// import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
import ChocolateContainer from './components/ChocolateContainer';
import NewCakeContainer from './components/NewCakeContainer';
import CashCounter from './components/CashCounter';
// import ItemContainer from './components/ItemContainer';
// import UserContainer from './components/UserContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>App Component</h1>
        {/* <UserContainer /> */}
        {/* <ItemContainer cake />
        <ItemContainer /> */}
        <ChocolateContainer />
        <IcecreamContainer />
        {/* <HooksCakeContainer /> */}
        {/* <CakeContainer /> */}
        <NewCakeContainer />
        <CashCounter />
      </div>
    </Provider>
  );
}

export default App;