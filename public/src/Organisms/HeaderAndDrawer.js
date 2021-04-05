import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import useTheme from '@material-ui/core/styles/useTheme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import React, { Fragment, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { GlobalStyles } from '../Styles/globalClsx';
import { RouterPath } from '../DataStructure/RouterPath';
// Global値
var SITE_TITLE = 'S-Suport';
var SIDE_BAR_PAGES = function (props) {
    var basePages = [
        { name: 'トップページ', href: RouterPath.ROOT, icon: 'home' },
        { name: 'ご利用規約', href: RouterPath.TERMS_POLICY, icon: 'assignment' },
        { name: 'プライバシーポリシー', href: RouterPath.PRIVACY_POLICY, icon: 'privacy_tip' },
    ];
    if (props.isLogined) {
        basePages.push({ name: 'マイページ', href: RouterPath.MYPAGE, icon: 'person' });
    }
    else {
        basePages.push({ name: '会員登録', href: RouterPath.SIGNUP, icon: 'how_to_reg' });
        basePages.push({ name: 'ログイン', href: RouterPath.SIGNIN, icon: 'person' });
    }
    return basePages;
};
/** Header and Drawer component. Drawer contents is defined inner */
export function HeaderAndDrawer(props) {
    var history = useHistory();
    var location = useLocation();
    var clsx = GlobalStyles();
    var theme = useTheme();
    var _a = useState(false), anchor = _a[0], setAnchor = _a[1];
    var _b = useState(false), logined = _b[0], setLogined = _b[1];
    var menuHundle = function () { return setAnchor(!anchor); };
    var openHundle = function () { return setAnchor(true); };
    var closeHundle = function () { return setAnchor(false); };
    var logOutHundle = function () {
        history.push(RouterPath.ROOT);
    };
    var appBarCss = props.color === 'white'
        ? {
            background: 'rgba(255,255,255,0.7)',
            color: theme.palette.text.primary,
        }
        : {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
        };
    return (React.createElement(Fragment, null,
        React.createElement(AppBar, { position: 'fixed', style: appBarCss },
            React.createElement(Toolbar, null,
                React.createElement("div", { style: { flexGrow: 1 } },
                    React.createElement(Typography, { color: 'inherit', className: clsx.textSubTitle, onClick: function () { return history.push('/'); } }, SITE_TITLE)),
                logined && (React.createElement(IconButton, { color: 'inherit', onClick: logOutHundle },
                    React.createElement(Icon, null, "logout"))),
                React.createElement(IconButton, { color: 'inherit', onClick: menuHundle },
                    React.createElement(Icon, null, "menu")))),
        React.createElement(SwipeableDrawer, { anchor: 'top', open: anchor, onOpen: openHundle, onClose: closeHundle },
            React.createElement(List, null, SIDE_BAR_PAGES({ isLogined: logined })
                .filter(function (e) { return e.href !== location.pathname; })
                .map(function (item, index) { return (React.createElement(ListItem, { key: index, button: true, onClick: function () { return history.push(item.href); }, style: { width: '100%' } },
                React.createElement(ListItemIcon, null,
                    React.createElement(Icon, { color: 'inherit' }, item.icon)),
                React.createElement(ListItemText, { color: 'inherit', primary: item.name, style: { paddingRight: theme.spacing(6) } }))); })))));
}
