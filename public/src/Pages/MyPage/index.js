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
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import { TwoColumnWithTitle } from '../../Components/Table';
import { PageRoot } from '../../Organisms/PageRoot';
import { GlobalStyles } from '../../Styles/globalClsx';
import { useHistory } from 'react-router-dom';
import { RouterPath } from '../../DataStructure/RouterPath';
import { LoadingCircle } from '../../Organisms/LoadCircle';
import { Molding } from 'ts-utilities';
export function MyPage() {
    var gClasses = GlobalStyles();
    var history = useHistory();
    var _a = useState(undefined), snapshot = _a[0], setSnapshot = _a[1];
    var _b = React.useState(true), load = _b[0], setLoad = _b[1];
    useEffect(function () {
        var mounted = true;
        return function () {
            mounted = false;
        };
    }, []);
    // ロード中
    if (snapshot === undefined || snapshot === null) {
        return (React.createElement(PageRoot, null,
            React.createElement(LoadingCircle, { loadFlag: load })));
    }
    return (React.createElement(PageRoot, null,
        React.createElement(Typography, { align: 'center', className: gClasses.textCaption, style: { margin: '1em' } }, "\u30DE\u30A4\u30DA\u30FC\u30B8"),
        React.createElement(Container, { maxWidth: 'md' },
            React.createElement(TwoColumnWithTitle, __assign({}, {
                data: [
                    { name: '氏名', value: snapshot.lastName + " " + snapshot.firstName },
                    { name: 'メール', value: snapshot.email },
                    { name: '電話番号', value: snapshot.phone },
                    { name: '組織名称', value: snapshot.organizeName },
                    { name: '資本金額', value: Molding.to3DigitNum(Number(snapshot.capital)) + ' 円' },
                    { name: '創業年度', value: Molding.to3DigitNum(Number(snapshot.establishedYear)) + ' 年' },
                    { name: '従業員数', value: Molding.to3DigitNum(Number(snapshot.employeesCount)) + ' 人' },
                    { name: '都道府県', value: snapshot.prefectures },
                    { name: '業種', value: snapshot.industry },
                ],
            })),
            React.createElement("div", { style: { width: '100%' }, className: gClasses.positionLefting },
                React.createElement(Button, { size: 'small', style: { margin: '1em' }, className: gClasses.buttonPrimary, onClick: function (_) {
                        history.push(RouterPath.MEMBER_REGIST);
                    } }, "\u7DE8\u96C6"),
                React.createElement(Button, { size: 'small', style: { margin: '1em' }, className: gClasses.buttonSecondary, onClick: function (_) { return history.push(RouterPath.REMOVE_ACCOUNT); } }, "\u9000\u4F1A")))));
}
