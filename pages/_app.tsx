// import App from 'next/app'
import withRedux, { MakeStore } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducers } from '../store/reducers';
import App, { AppContext } from 'next/app';
import Navbar from '../components/NavBar';

const middleWare =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);

/**
 * @param initialState The store's initial state (on the client side, the state of the server-side store is passed here)
 */
const makeStore: MakeStore = () => {
  return createStore(reducers, middleWare);
};

const MyApp = ({ Component, pageProps, store }) => {
  console.log('[MyApp]');
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default withRedux(makeStore, { debug: true })(MyApp);
