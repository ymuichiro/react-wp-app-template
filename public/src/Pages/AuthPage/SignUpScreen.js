import Typography from "@material-ui/core/Typography";
import React from 'react';
import { GlobalStyles } from '../../Styles/globalClsx';
import { PageRoot } from '../../Organisms/PageRoot';
import { RouterPath } from '../../DataStructure/RouterPath';
import { useHistory } from 'react-router-dom';
export function SignUpScreen() {
    var clsx = GlobalStyles();
    var history = useHistory();
    var SignUpCallBackHundle = function (authResult) {
        if (authResult.additionalUserInfo.isNewUser) {
            history.push(RouterPath.MEMBER_REGIST);
        }
        else {
            alert('既に会員登録済の為、マイページへ遷移致します');
            history.push(RouterPath.MYPAGE);
        }
        return true;
    };
    return (React.createElement(PageRoot, null,
        React.createElement("div", { className: clsx.positionCentering, style: { height: '60vh' } },
            React.createElement("div", null,
                React.createElement(Typography, { component: 'h2', align: 'center', color: 'inherit', className: clsx.textSubTitle, style: { fontWeight: 'bold', width: '100%' } }, "\u4F1A\u54E1\u767B\u9332"),
                React.createElement(Typography, { align: 'center', color: 'textSecondary', className: clsx.textParagraph }, "\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u767B\u9332\u65B9\u6CD5\u3092\u9078\u629E\u4E0B\u3055\u3044")))));
}
