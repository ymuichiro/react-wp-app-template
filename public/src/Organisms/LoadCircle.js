import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GlobalStyles } from '../Styles/globalClsx';
/** Load中、index9999に表示し、ユーザーの操作を止める */
export function LoadingCircle(props) {
    var clsx = GlobalStyles();
    return (React.createElement("div", null, props.loadFlag ? (React.createElement("div", { className: clsx.positionFixedCentering, style: {
            zIndex: 9995,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            width: '100vw',
            height: '100vh',
        } },
        React.createElement("div", { className: clsx.positionFixedCentering },
            React.createElement(CircularProgress, { color: 'primary', style: {
                    zIndex: 9999,
                    opacity: 1,
                } })))) : (React.createElement("div", null))));
}
