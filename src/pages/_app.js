import { appWithTranslation } from 'next-i18next';
import '../../styles/globals.scss'
import 'antd/dist/antd.css';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(MyApp)
