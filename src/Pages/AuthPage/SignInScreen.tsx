import Typography from '@material-ui/core/Typography';
import React from 'react';
import { GlobalStyles } from '../../Styles/globalClsx';
import { PageRoot } from '../../Organisms/PageRoot';
import { RouterPath } from '../../DataStructure/RouterPath';
import { useHistory } from 'react-router-dom';

export function SignInScreen() {
  const clsx = GlobalStyles();
  const history = useHistory();

  const SignInCallBackHundle = (authResult: any) => {
    if (authResult.additionalUserInfo.isNewUser) {
      alert('会員登録がされていない為、登録ページへ遷移致します');
      history.push(RouterPath.MEMBER_REGIST);
    } else {
      history.push(RouterPath.MYPAGE);
    }
    return true;
  };

  return (
    <PageRoot>
      <div className={clsx.positionCentering} style={{ height: '60vh' }}>
        <div>
          <Typography
            component='h2'
            align='center'
            color='inherit'
            className={clsx.textSubTitle}
            style={{ fontWeight: 'bold', width: '100%' }}>
            ログイン
          </Typography>
          <Typography align='center' color='textSecondary' className={clsx.textParagraph}>
            ログイン方法を選択して下さい
          </Typography>
        </div>
      </div>
    </PageRoot>
  );
}
