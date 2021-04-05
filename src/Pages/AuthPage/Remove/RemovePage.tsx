import React from 'react';
import Typography from '@material-ui/core/Typography';
import { PageRoot } from '../../../Organisms/PageRoot';
import { GlobalStyles } from '../../../Styles/globalClsx';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { RouterPath } from '../../../DataStructure/RouterPath';
import Grid from '@material-ui/core/Grid';

export function RemovePage() {
  const clsx = GlobalStyles();
  const history = useHistory();

  const errorHundle = () => {
    alert(
      'Errorが発生しました。退会処理が正常に処理しませんでした。時間を空けて再実行頂くか、お手数ですがお問合せ下さい',
    );
    history.push(RouterPath.ROOT);
  };

  const yesHundle = () => {};

  const noHundle = () => {
    history.goBack();
  };

  return (
    <PageRoot>
      <Typography
        component='h2'
        align='center'
        className={clsx.textSubTitle}
        style={{ width: '100%', fontWeight: 'bold', marginTop: '2em' }}>
        退会処理
      </Typography>
      <Typography align='center' className={clsx.textParagraph}>
        一度退会するとアカウントを復活させる事は出来ません
        <br />
        退会しますか？
      </Typography>
      <div className={clsx.positionCentering} style={{ marginTop: '2em', marginBottom: '3em' }}>
        <Grid container direction='row' justify='center' alignItems='center' spacing={3} style={{ width: '60vw' }}>
          <Grid item xs={6}>
            <Button className={clsx.buttonPrimary} onClick={yesHundle} fullWidth>
              はい
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button className={clsx.buttonSecondary} onClick={noHundle} fullWidth>
              いいえ
            </Button>
          </Grid>
        </Grid>
      </div>
    </PageRoot>
  );
}
