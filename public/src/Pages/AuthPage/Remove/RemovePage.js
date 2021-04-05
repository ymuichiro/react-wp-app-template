import React from 'react';
import Typography from '@material-ui/core/Typography';
import { PageRoot } from '../../../Organisms/PageRoot';
import { GlobalStyles } from '../../../Styles/globalClsx';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { RouterPath } from '../../../DataStructure/RouterPath';
import Grid from '@material-ui/core/Grid';
export function RemovePage() {
    var clsx = GlobalStyles();
    var history = useHistory();
    var errorHundle = function () {
        alert('Errorが発生しました。退会処理が正常に処理しませんでした。時間を空けて再実行頂くか、お手数ですがお問合せ下さい');
        history.push(RouterPath.ROOT);
    };
    var yesHundle = function () { };
    var noHundle = function () {
        history.goBack();
    };
    return (React.createElement(PageRoot, null,
        React.createElement(Typography, { component: 'h2', align: 'center', className: clsx.textSubTitle, style: { width: '100%', fontWeight: 'bold', marginTop: '2em' } }, "\u9000\u4F1A\u51E6\u7406"),
        React.createElement(Typography, { align: 'center', className: clsx.textParagraph },
            "\u4E00\u5EA6\u9000\u4F1A\u3059\u308B\u3068\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u5FA9\u6D3B\u3055\u305B\u308B\u4E8B\u306F\u51FA\u6765\u307E\u305B\u3093",
            React.createElement("br", null),
            "\u9000\u4F1A\u3057\u307E\u3059\u304B\uFF1F"),
        React.createElement("div", { className: clsx.positionCentering, style: { marginTop: '2em', marginBottom: '3em' } },
            React.createElement(Grid, { container: true, direction: 'row', justify: 'center', alignItems: 'center', spacing: 3, style: { width: '60vw' } },
                React.createElement(Grid, { item: true, xs: 6 },
                    React.createElement(Button, { className: clsx.buttonPrimary, onClick: yesHundle, fullWidth: true }, "\u306F\u3044")),
                React.createElement(Grid, { item: true, xs: 6 },
                    React.createElement(Button, { className: clsx.buttonSecondary, onClick: noHundle, fullWidth: true }, "\u3044\u3044\u3048"))))));
}
