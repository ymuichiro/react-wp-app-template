import Container from '@material-ui/core/Container';
import useTheme from '@material-ui/core/styles/useTheme';
import React, { Fragment } from 'react';
import { clsx } from 'react-utilities';
import { GlobalStyles } from '../Styles/globalClsx';
import { HeaderAndDrawer } from './HeaderAndDrawer';
import { SiteFooter } from './SiteFooter';
/**
 * Root body of each page
 */
export var PageRoot = function (props) {
    var gClasses = GlobalStyles();
    var theme = useTheme();
    return (React.createElement(Fragment, null,
        React.createElement(HeaderAndDrawer, { color: 'primary' }),
        React.createElement(Container, { className: clsx.join(props.className, gClasses.contentSectionContainer) },
            React.createElement("div", { className: gClasses.toolbar }),
            React.createElement("div", { style: { marginTop: theme.spacing(3) } }),
            React.createElement(Fragment, null, props.children)),
        React.createElement(SiteFooter, null)));
};
/**
 * Root body of each page
 */
export var PageRootNoContainer = function (props) {
    var theme = useTheme();
    var clsx = GlobalStyles();
    return (React.createElement(Fragment, null,
        React.createElement(HeaderAndDrawer, { color: 'white' }),
        React.createElement("div", { className: clsx.toolbar }),
        React.createElement("div", { style: { marginTop: theme.spacing(3) } }),
        React.createElement(Fragment, null, props.children),
        React.createElement(SiteFooter, null)));
};
