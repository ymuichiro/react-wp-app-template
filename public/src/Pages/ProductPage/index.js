import React, { Fragment, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from 'react-router-dom';
import { BasicInduction } from '../../Components/Induction';
import { PageRootNoContainer } from '../../Organisms/PageRoot';
import { GlobalStyles } from '../../Styles/globalClsx';
import { CardArgs } from './ProductPageData';
import { useStyles } from './ProductPageCss';
import Card from '@material-ui/core/Card';
import { Fade } from '../../Components/Fade';
import { RouterPath } from '../../DataStructure/RouterPath';
import { clsx } from 'react-utilities';
import { Tools } from 'ts-utilities';
export var ProductPage = function () {
    var gClasses = GlobalStyles();
    var lClasses = useStyles();
    var theme = useTheme();
    var history = useHistory();
    var matches = useMediaQuery(theme.breakpoints.down('sm'));
    var _a = useState(0), position = _a[0], setPosition = _a[1];
    useEffect(function () {
        var mounted = true;
        var onScroll = function () {
            if (mounted) {
                setPosition(Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop));
            }
        };
        var scroll = Tools.throttle(onScroll, 100);
        document.addEventListener('scroll', scroll);
        return function () {
            document.removeEventListener('scroll', onScroll);
            mounted = false;
        };
    }, []);
    var toSearchPageHandle = function () {
        history.push(RouterPath.MYPAGE);
    };
    return (React.createElement(PageRootNoContainer, null,
        React.createElement(Container, { maxWidth: 'lg' },
            React.createElement(Fade, { nowHeight: position, transitionType: gClasses.transitionFadeInUpPending },
                React.createElement(Card, { className: clsx.join(gClasses.positionCentering, gClasses.cardBasic, lClasses.CardContainer), style: { backgroundImage: "url(" + CardArgs.top.bgImage + ")" } },
                    React.createElement(Grid, { container: true, justify: 'center', alignItems: 'stretch', spacing: 3, style: { height: '100%' } },
                        React.createElement(Grid, { item: true, xs: 12, md: 6 },
                            React.createElement("div", { className: clsx.boolSwitch(matches, gClasses.positionXCenterYBottom, gClasses.positionCentering) },
                                React.createElement(Typography, { component: 'h1', className: clsx.join(gClasses.textTitle, lClasses.InImageTitleText) }, CardArgs.top.title))),
                        React.createElement(Grid, { item: true, xs: 12, md: 6 },
                            React.createElement("div", { className: clsx.boolSwitch(matches, gClasses.positionXCenterYTop, gClasses.positionCentering) },
                                React.createElement("div", null,
                                    React.createElement(Typography, { component: 'h2', className: clsx.join(gClasses.textSubTitle, lClasses.InImageSubTitleText) }, CardArgs.top.msgs1),
                                    React.createElement(Typography, { className: clsx.join(gClasses.textCaption, lClasses.InImageParagraphText) }, CardArgs.top.msgs2))))))),
            React.createElement("div", { className: clsx.join(gClasses.positionXCenterYTop, lClasses.Inducation) },
                React.createElement(BasicInduction, null)),
            CardArgs.descs.map(function (args, index) { return (React.createElement(Fragment, { key: index },
                React.createElement(Fade, { nowHeight: position, transitionType: clsx.boolSwitch(index + (10 % 2) === 0, gClasses.transitionFadeInRightPending, gClasses.transitionFadeInLeftPending) },
                    React.createElement("div", { style: { display: 'flex', flexDirection: 'column', width: 'inherit' } },
                        React.createElement(Card, { className: clsx.join(gClasses.positionCentering, gClasses.cardBasic, lClasses.CardContainer), style: { backgroundImage: "url(" + args.bgImage + ")" } },
                            React.createElement(Grid, { container: true, justify: 'center', alignItems: 'stretch', spacing: 3, style: { height: 'inherit%' } },
                                React.createElement(Grid, { item: true, xs: 12, md: 6 },
                                    React.createElement("div", { className: clsx.boolSwitch(matches, gClasses.positionXCenterYBottom, gClasses.positionCentering) },
                                        React.createElement(Typography, { component: 'h2', className: clsx.join(gClasses.textSubTitle, lClasses.InImageSubTitleText) }, args.title))),
                                React.createElement(Grid, { item: true, xs: 12, md: 6 },
                                    React.createElement("div", { className: clsx.boolSwitch(matches, gClasses.positionXCenterYTop, gClasses.positionCentering) },
                                        React.createElement("div", null,
                                            React.createElement(Typography, { className: clsx.join(gClasses.textCaption, lClasses.InImageParagraphText) }, args.msgs1)))))),
                        React.createElement("div", { className: clsx.join(gClasses.positionXCenterYTop, lClasses.Inducation) },
                            React.createElement(BasicInduction, null)))))); }),
            React.createElement("div", { style: { height: '40vh' } },
                React.createElement("div", { className: gClasses.positionCentering },
                    React.createElement(Fade, { nowHeight: position, transitionType: gClasses.transitionFadeInUpPending },
                        React.createElement(Typography, { component: 'h2', color: 'primary', align: 'center', className: gClasses.textSubTitle }, "\u753B\u9762\u9077\u79FB\u30E1\u30C3\u30BB\u30FC\u30B8"),
                        React.createElement("div", { style: { height: '3em' } }),
                        React.createElement(Button, { className: gClasses.buttonPrimary, size: 'large', type: 'button', variant: 'contained', fullWidth: true, onClick: toSearchPageHandle }, "\u753B\u9762\u9077\u79FB\u30DC\u30BF\u30F3"),
                        React.createElement("div", { style: { height: '20vh' } })))))));
};
