import { IntlProvider } from 'react-intl';
import Vietnamese from './vi.json';
import English from './en.json';
import { useSelector } from 'react-redux';
function IntlProviderWrapper({ children }) {
    let locale = useSelector((state) => state.appSlice.language);
    console.log(locale);
    let language = Vietnamese;
    if (locale === 'vi') {
        language = Vietnamese;
    } else {
        language = English;
    }
    return (
        <IntlProvider locale={locale} messages={language}>
            {children}
        </IntlProvider>
    );
}

export default IntlProviderWrapper;
