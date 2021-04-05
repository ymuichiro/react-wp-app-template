import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { theme } from './Styles/theme';
import { ProductPage } from './Pages/ProductPage';
import { GlobalStyles } from './Styles/globalClsx';
import { SignInScreen } from './Pages/AuthPage/SignInScreen';
import { PrivacyPolicyPage } from './Pages/AuthPage/Privacy/PrivacyPolicyPage';
import { TermsPage } from './Pages/AuthPage/Terms/TermsPage';
import { RouterPath } from './DataStructure/RouterPath';
import { SignUpScreen } from './Pages/AuthPage/SignUpScreen';
import { MyPage } from './Pages/MyPage';
import { RemovePage } from './Pages/AuthPage/Remove/RemovePage';

export function App() {
  const clsx = GlobalStyles();

  return (
    <Fragment>
      <CssBaseline />
      <div className={clsx.rootContainer}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route exact path={RouterPath.ROOT} component={ProductPage} />
              <Route path={RouterPath.SIGNIN} component={SignInScreen} />
              <Route path={RouterPath.SIGNUP} component={SignUpScreen} />
              <Route path={RouterPath.PRIVACY_POLICY} component={PrivacyPolicyPage} />
              <Route path={RouterPath.TERMS_POLICY} component={TermsPage} />
              <Route path={RouterPath.MYPAGE} component={MyPage} />
              <Route path={RouterPath.REMOVE_ACCOUNT} component={RemovePage} />
              <Route component={ProductPage} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </Fragment>
  );
}

render(<App />, document.getElementById('root'));
