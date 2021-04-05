import React, { FC, Fragment, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from 'react-router-dom';
import { BasicInduction } from '../../Components/Induction';
import { PageRootNoContainer } from '../../Organisms/PageRoot';
import { GlobalStyles } from '../../Styles/globalClsx';
import { CardArgs } from './ProductPageData';
import { useStyles } from './ProductPageCss';
import Card from '@material-ui/core/Card';
import { Fade } from '../../Components/Fade';
import { RouterPath } from '../../DataStructure/RouterPath';
import { clsx } from 'react-utilities';
import { Tools } from 'ts-utilities';

export const ProductPage: FC = () => {
  const gClasses = GlobalStyles();
  const lClasses = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const matches: boolean = useMediaQuery(theme.breakpoints.down('sm'));
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    let mounted = true;
    const onScroll = (): void => {
      if (mounted) {
        setPosition(Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop));
      }
    };

    const scroll = Tools.throttle(onScroll, 100);
    document.addEventListener('scroll', scroll);
    return (): void => {
      document.removeEventListener('scroll', onScroll);
      mounted = false;
    };
  }, []);

  const toSearchPageHandle = () => {
    history.push(RouterPath.MYPAGE);
  };

  return (
    <PageRootNoContainer>
      <Container maxWidth='lg'>
        <Fade nowHeight={position} transitionType={gClasses.transitionFadeInUpPending}>
          <Card
            className={clsx.join(gClasses.positionCentering, gClasses.cardBasic, lClasses.CardContainer)}
            style={{ backgroundImage: `url(${CardArgs.top.bgImage})` }}>
            <Grid container justify='center' alignItems='stretch' spacing={3} style={{ height: '100%' }}>
              <Grid item xs={12} md={6}>
                <div className={clsx.boolSwitch(matches, gClasses.positionXCenterYBottom, gClasses.positionCentering)}>
                  <Typography component='h1' className={clsx.join(gClasses.textTitle, lClasses.InImageTitleText)}>
                    {CardArgs.top.title}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={clsx.boolSwitch(matches, gClasses.positionXCenterYTop, gClasses.positionCentering)}>
                  <div>
                    <Typography
                      component='h2'
                      className={clsx.join(gClasses.textSubTitle, lClasses.InImageSubTitleText)}>
                      {CardArgs.top.msgs1}
                    </Typography>
                    <Typography className={clsx.join(gClasses.textCaption, lClasses.InImageParagraphText)}>
                      {CardArgs.top.msgs2}
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Fade>

        <div className={clsx.join(gClasses.positionXCenterYTop, lClasses.Inducation)}>
          <BasicInduction />
        </div>

        {/* 製品紹介 */}
        {CardArgs.descs.map((args, index) => (
          <Fragment key={index}>
            <Fade
              nowHeight={position}
              transitionType={clsx.boolSwitch(
                index + (10 % 2) === 0,
                gClasses.transitionFadeInRightPending,
                gClasses.transitionFadeInLeftPending,
              )}>
              <div style={{ display: 'flex', flexDirection: 'column', width: 'inherit' }}>
                <Card
                  className={clsx.join(gClasses.positionCentering, gClasses.cardBasic, lClasses.CardContainer)}
                  style={{ backgroundImage: `url(${args.bgImage})` }}>
                  <Grid container justify='center' alignItems='stretch' spacing={3} style={{ height: 'inherit%' }}>
                    <Grid item xs={12} md={6}>
                      <div
                        className={clsx.boolSwitch(
                          matches,
                          gClasses.positionXCenterYBottom,
                          gClasses.positionCentering,
                        )}>
                        <Typography
                          component='h2'
                          className={clsx.join(gClasses.textSubTitle, lClasses.InImageSubTitleText)}>
                          {args.title}
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div
                        className={clsx.boolSwitch(matches, gClasses.positionXCenterYTop, gClasses.positionCentering)}>
                        <div>
                          <Typography className={clsx.join(gClasses.textCaption, lClasses.InImageParagraphText)}>
                            {args.msgs1}
                          </Typography>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Card>
                <div className={clsx.join(gClasses.positionXCenterYTop, lClasses.Inducation)}>
                  <BasicInduction />
                </div>
              </div>
            </Fade>
          </Fragment>
        ))}
        <div style={{ height: '40vh' }}>
          <div className={gClasses.positionCentering}>
            <Fade nowHeight={position} transitionType={gClasses.transitionFadeInUpPending}>
              <Typography component='h2' color='primary' align='center' className={gClasses.textSubTitle}>
                画面遷移メッセージ
              </Typography>
              <div style={{ height: '3em' }} />
              <Button
                className={gClasses.buttonPrimary}
                size='large'
                type='button'
                variant='contained'
                fullWidth
                onClick={toSearchPageHandle}>
                画面遷移ボタン
              </Button>
              <div style={{ height: '20vh' }} />
            </Fade>
          </div>
        </div>
      </Container>
    </PageRootNoContainer>
  );
};
