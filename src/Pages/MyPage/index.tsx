import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import { TwoColumnWithTitle } from '../../Components/Table';
import { PageRoot } from '../../Organisms/PageRoot';
import { GlobalStyles } from '../../Styles/globalClsx';
import { useHistory } from 'react-router-dom';
import { RouterPath } from '../../DataStructure/RouterPath';
import { LoadingCircle } from '../../Components/LoadCircle';
import { Molding } from 'ts-utilities';

export function MyPage() {
  const gClasses = GlobalStyles();
  const history = useHistory();
  const [snapshot, setSnapshot] = useState<UserData | undefined>(undefined);
  const [load, setLoad] = React.useState<boolean>(true);

  useEffect(() => {
    let mounted = true;

    return () => {
      mounted = false;
    };
  }, []);

  // ロード中
  if (snapshot === undefined || snapshot === null) {
    return (
      <PageRoot>
        <LoadingCircle loadFlag={load} />
      </PageRoot>
    );
  }

  return (
    <PageRoot>
      {/* ページタイトル */}
      <Typography align='center' className={gClasses.textCaption} style={{ margin: '1em' }}>
        マイページ
      </Typography>
      {/* ページコンテンツ */}
      <Container maxWidth='md'>
        <TwoColumnWithTitle
          {...{
            data: [
              { name: '氏名', value: `${snapshot.lastName} ${snapshot.firstName}` },
              { name: 'メール', value: snapshot.email },
              { name: '電話番号', value: snapshot.phone },
              { name: '組織名称', value: snapshot.organizeName },
              { name: '資本金額', value: Molding.to3DigitNum(Number(snapshot.capital)) + ' 円' },
              { name: '創業年度', value: Molding.to3DigitNum(Number(snapshot.establishedYear)) + ' 年' },
              { name: '従業員数', value: Molding.to3DigitNum(Number(snapshot.employeesCount)) + ' 人' },
              { name: '都道府県', value: snapshot.prefectures },
              { name: '業種', value: snapshot.industry },
            ],
          }}
        />
        <div style={{ width: '100%' }} className={gClasses.positionLefting}>
          <Button
            size='small'
            style={{ margin: '1em' }}
            className={gClasses.buttonPrimary}
            onClick={_ => {
              history.push(RouterPath.MEMBER_REGIST);
            }}>
            編集
          </Button>
          <Button
            size='small'
            style={{ margin: '1em' }}
            className={gClasses.buttonSecondary}
            onClick={_ => history.push(RouterPath.REMOVE_ACCOUNT)}>
            退会
          </Button>
        </div>
      </Container>
    </PageRoot>
  );
}
