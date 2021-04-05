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
    var clsx = GlobalStyles();
    return (React.createElement(Fragment, null,
        React.createElement(CssBaseline, null),
        React.createElement("div", { className: clsx.rootContainer },
            React.createElement(ThemeProvider, { theme: theme },
                React.createElement(BrowserRouter, null,
                    React.createElement(Switch, null,
                        React.createElement(Route, { exact: true, path: RouterPath.ROOT, component: ProductPage }),
                        React.createElement(Route, { path: RouterPath.SIGNIN, component: SignInScreen }),
                        React.createElement(Route, { path: RouterPath.SIGNUP, component: SignUpScreen }),
                        React.createElement(Route, { path: RouterPath.PRIVACY_POLICY, component: PrivacyPolicyPage }),
                        React.createElement(Route, { path: RouterPath.TERMS_POLICY, component: TermsPage }),
                        React.createElement(Route, { path: RouterPath.MYPAGE, component: MyPage }),
                        React.createElement(Route, { path: RouterPath.REMOVE_ACCOUNT, component: RemovePage }),
                        React.createElement(Route, { component: ProductPage })))))));
}
render(React.createElement(App, null), document.getElementById('root'));
