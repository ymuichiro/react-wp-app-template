var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import createStyles from '@material-ui/core/styles/createStyles';
import CardContent from '@material-ui/core/CardContent';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import { GlobalStyles } from '../Styles/globalClsx';
import { analitics } from '../../firebase';
var useStylesForPostCard = makeStyles(function (theme) {
    return createStyles({
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
    });
});
/**
 * ユーザーの投稿を表示するカードを定義
 * @param props
 */
export function PostCard(props) {
    var classes = useStylesForPostCard();
    var _a = React.useState(false), expanded = _a[0], setExpanded = _a[1];
    var handleExpandClick = function () {
        analitics.logEvent("search page content click. " + props.headerTitle);
        setExpanded(!expanded);
    };
    return (React.createElement(Card, { className: props.className, style: props.style },
        React.createElement(CardHeader, { avatar: React.createElement(Avatar, { "aria-label": 'post' }, props.headerIcon), action: props.headerInfo, title: props.headerTitle, subheader: props.headerSubTitle }),
        React.createElement(CardContent, null, props.description),
        React.createElement(CardActions, null,
            React.createElement(Box, { textAlign: 'right', color: 'text.secondary', style: { flexGrow: 1 } }, "\u8A73\u7D30\u306F\u3053\u3053\u3092\u30AF\u30EA\u30C3\u30AF"),
            React.createElement(IconButton, { className: expanded ? classes.expand : classes.expandOpen + ' ' + classes.expand, onClick: handleExpandClick, "aria-expanded": expanded, "aria-label": 'show more' },
                React.createElement(Icon, null, "expand_more"))),
        React.createElement(Collapse, { in: expanded, timeout: 'auto', unmountOnExit: true },
            React.createElement(CardContent, null, props.collapseArea))));
}
/**
 * サイトTOP等にて利用する背景ありカード要素を定義
 * @description desktop表示の場合は左右にテキストの表示
 * @description mobile表示の場合は、上下にテキストの表示
 */
export function TopImageCard(props) {
    var theme = useTheme();
    var matches = useMediaQuery(theme.breakpoints.down('sm'));
    var clsx = GlobalStyles();
    var propsStyle = !props.style ? {} : props.style;
    var css = __assign(__assign({}, propsStyle), { padding: 0, backgroundImage: "url(" + props.backgroundUrl + ")", backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff' });
    var Centering = function (props) { return (React.createElement("div", { className: clsx.positionCentering },
        React.createElement("div", null, props.children))); };
    return (React.createElement(Card, { style: css, "data-info": props.dataInfo },
        React.createElement(Grid, { container: true, justify: 'center', alignItems: 'stretch', spacing: 3, style: { height: '100%' } }, matches ? (React.createElement(Grid, { item: true, sm: 12, style: { height: '100%' } },
            React.createElement(Centering, null,
                props.title,
                props.messages))) : (React.createElement(Fragment, null,
            React.createElement(Grid, { item: true, md: 6 },
                React.createElement(Centering, null, props.title)),
            React.createElement(Grid, { item: true, md: 6 },
                React.createElement(Centering, null, props.messages)))))));
}
