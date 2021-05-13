import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Routes from '@Routes/routes';
import theme from '@Styles/theme';
import GlobalStyles from '@Styles/global';

const Main = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Routes />
  </ThemeProvider>
);

ReactDOM.render(
  <Main />,
  document.querySelector('#project-name-app'),
);
