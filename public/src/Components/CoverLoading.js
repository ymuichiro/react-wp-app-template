import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GlobalStyles } from '../Styles/globalClsx';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
var useStyle = makeStyles(function (theme) {
    return createStyles({
        '@keyframes FadeInCircleLoading': {
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
            },
        },
    });
});
export function CoverLoading(props) {
    var clsx = GlobalStyles();
    return (React.createElement("div", { className: clsx.positionFixedCentering, style: {
            zIndex: 9995,
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            width: '100vw',
            height: '100vh',
        } },
        React.createElement("div", { className: clsx.positionFixedCentering },
            React.createElement(CircularProgress, { color: 'primary', style: {
                    zIndex: 9999,
                    opacity: 1,
                } }))));
}
