import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { store } from './redux';
import { PersistGate } from 'redux-persist/integration/react';
import IntlProviderWrapper from './translations/IntlProviderWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));

let persistor = persistStore(store);
let language = navigator.language;
console.log(language);
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <IntlProviderWrapper>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </IntlProviderWrapper>
        </PersistGate>
    </Provider>,
);
