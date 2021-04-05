import Typography from "@material-ui/core/Typography";
import React from 'react';
import { GlobalStyles } from '../../Styles/globalClsx';
import { PageRoot } from '../../Organisms/PageRoot';
import { RouterPath } from '../../DataStructure/RouterPath';
import { useHistory } from 'react-router-dom';

export function SignUpScreen() {
  const clsx = GlobalStyles();
  const history = useHistory();

  const SignUpCallBackHundle = (authResult: any) => {
    if (authResult.additionalUserInfo.isNewUser) {
      history.push(RouterPath.MEMBER_REGIST);
    } else {
      alert('既に会員登録済の為、マイページへ遷移致します');
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
            会員登録
          </Typography>
          <Typography align='center' color='textSecondary' className={clsx.textParagraph}>
            アカウントの登録方法を選択下さい
          </Typography>
        </div>
      </div>
    </PageRoot>
  );
}
