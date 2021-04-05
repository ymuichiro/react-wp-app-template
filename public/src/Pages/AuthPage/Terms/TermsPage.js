import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { PageRoot } from '../../../Organisms/PageRoot';
import { GlobalStyles } from '../../../Styles/globalClsx';
import { useHistory } from 'react-router-dom';
import { clsx } from 'react-utilities';
export function TermsPage() {
    var gClasses = GlobalStyles();
    var history = useHistory();
    var clickHundle = function () {
        history.goBack();
    };
    return (React.createElement(PageRoot, null,
        React.createElement(Card, { className: clsx.join(gClasses.cardBasic) },
            React.createElement(Grid, { container: true, direction: 'column', justify: 'center', alignItems: 'stretch', spacing: 3 },
                React.createElement(Grid, { item: true },
                    React.createElement("div", { style: { height: '2em' } }),
                    React.createElement(Typography, { align: 'center', color: 'inherit', className: gClasses.textSubTitle, style: { fontWeight: 'bold' } }, "\u5229\u7528\u898F\u7D04")),
                React.createElement(Grid, { item: true },
                    React.createElement("div", { className: gClasses.positionCentering },
                        React.createElement(Button, { type: 'button', size: 'small', className: gClasses.buttonPrimary, style: { width: '60vw' }, onClick: clickHundle }, "\u623B\u308B")))))));
}
