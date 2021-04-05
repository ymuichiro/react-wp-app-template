import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
/** 基本のテーブルを生成する */
export var BaseTable = function (props) {
    return (React.createElement(TableContainer, { component: Paper },
        React.createElement(Table, null,
            React.createElement(TableBody, null, props.tableData.map(function (row, index) { return (React.createElement(TableRow, { key: index }, row.map(function (cell) { return (React.createElement(TableCell, { color: 'primary', align: 'center', component: 'th', scope: 'row' }, cell)); }))); })))));
};
/** テーブルを生成する */
export var TwoColumnWithTitle = function (_a) {
    var data = _a.data;
    return (React.createElement(TableContainer, { component: Paper },
        React.createElement(Table, null,
            React.createElement(TableBody, null, data.map(function (row) { return (React.createElement(TableRow, { key: row.name },
                React.createElement(TableCell, { color: 'primary', align: 'center', component: 'th', scope: 'row' }, row.name),
                React.createElement(TableCell, { align: 'left', component: 'th', scope: 'row' }, row.value))); })))));
};
