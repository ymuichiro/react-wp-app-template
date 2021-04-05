import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { GlobalStyles } from '../Styles/globalClsx';
/**
 * 本サイトのFooterを定義する
 */
export function SiteFooter() {
    var clsx = GlobalStyles();
    return (React.createElement(Fragment, null,
        React.createElement("div", { style: { height: '3em' } }),
        React.createElement(Divider, null),
        React.createElement(Typography, { align: 'right', color: 'textSecondary', style: { marginTop: '3em', marginBottom: '1em' }, className: clsx.textParagraph }, "sample"),
        React.createElement(Typography, { align: 'right', color: 'textSecondary', style: { marginTop: '3em', marginBottom: '1em' }, className: clsx.textParagraph }, "sample.co.ltd"),
        React.createElement("div", { style: { height: '3em' } })));
}
