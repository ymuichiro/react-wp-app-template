import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { PageRoot } from '../../../Organisms/PageRoot';
import { GlobalStyles } from '../../../Styles/globalClsx';
import { privacyPolicyText } from './PrivacyPolicyText';
import { useHistory } from 'react-router-dom';
import { clsx } from 'react-utilities';

export function PrivacyPolicyPage() {
  const gClasses = GlobalStyles();
  const history = useHistory();

  const clickHundle = () => {
    history.goBack();
  };

  return (
    <PageRoot>
      <Card className={clsx.join(gClasses.cardBasic)}>
        <Grid container direction='column' justify='center' alignItems='stretch' spacing={3}>
          <Grid item>
            <div style={{ height: '2em' }} />
            <Typography align='center' color='inherit' className={gClasses.textSubTitle} style={{ fontWeight: 'bold' }}>
              プライバシーポリシー
            </Typography>
          </Grid>
          <Grid item>
            <div className={gClasses.positionCentering}>
              <Button
                type='button'
                size='small'
                className={gClasses.buttonPrimary}
                style={{ width: '60vw' }}
                onClick={clickHundle}>
                戻る
              </Button>
            </div>
          </Grid>
        </Grid>
      </Card>
    </PageRoot>
  );
}
