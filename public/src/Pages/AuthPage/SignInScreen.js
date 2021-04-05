import Typography from '@material-ui/core/Typography';
import React from 'react';
import { GlobalStyles } from '../../Styles/globalClsx';
import { PageRoot } from '../../Organisms/PageRoot';
import { RouterPath } from '../../DataStructure/RouterPath';
import { useHistory } from 'react-router-dom';
export function SignInScreen() {
    var clsx = GlobalStyles();
    var history = useHistory();
    var SignInCallBackHundle = function (authResult) {
        if (authResult.additionalUserInfo.isNewUser) {
            alert('会員登録がされていない為、登録ページへ遷移致します');
            history.push(RouterPath.MEMBER_REGIST);
        }
        else {
            history.push(RouterPath.MYPAGE);
        }
        return true;
    };
    return (React.createElement(PageRoot, null,
        React.createElement("div", { className: clsx.positionCentering, style: { height: '60vh' } },
            React.createElement("div", null,
                React.createElement(Typography, { component: 'h2', align: 'center', color: 'inherit', className: clsx.textSubTitle, style: { fontWeight: 'bold', width: '100%' } }, "\u30ED\u30B0\u30A4\u30F3"),
                React.createElement(Typography, { align: 'center', color: 'textSecondary', className: clsx.textParagraph }, "\u30ED\u30B0\u30A4\u30F3\u65B9\u6CD5\u3092\u9078\u629E\u3057\u3066\u4E0B\u3055\u3044")))));
}
