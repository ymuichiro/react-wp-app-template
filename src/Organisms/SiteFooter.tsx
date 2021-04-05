import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { GlobalStyles } from '../Styles/globalClsx';
/**
 * 本サイトのFooterを定義する
 */
export function SiteFooter() {
  const clsx = GlobalStyles();

  return (
    <Fragment>
      <div style={{ height: '3em' }} />
      <Divider />
      <Typography
        align='right'
        color='textSecondary'
        style={{ marginTop: '3em', marginBottom: '1em' }}
        className={clsx.textParagraph}>
        sample
      </Typography>
      <Typography
        align='right'
        color='textSecondary'
        style={{ marginTop: '3em', marginBottom: '1em' }}
        className={clsx.textParagraph}>
        sample.co.ltd
      </Typography>
      <div style={{ height: '3em' }} />
    </Fragment>
  );
}
