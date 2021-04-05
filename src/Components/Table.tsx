import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import React, { FC } from 'react';

type BaseTableArgs = {
  tableData: string[][];
  children?: never;
};

/** 基本のテーブルを生成する */
export const BaseTable: FC<BaseTableArgs> = props => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {props.tableData.map((row, index) => (
            <TableRow key={index}>
              {row.map(cell => (
                <TableCell color='primary' align='center' component='th' scope='row'>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

/** テーブルを生成する */
export const TwoColumnWithTitle: FC<{
  data: { name: string; value: string }[];
  children?: never;
}> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.name}>
              <TableCell color='primary' align='center' component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='left' component='th' scope='row'>
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
