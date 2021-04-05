import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GlobalStyles } from '../Styles/globalClsx';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';

interface CoverLoadingArgs {
  flag: boolean;
}

const useStyle = makeStyles(theme =>
  createStyles({
    '@keyframes FadeInCircleLoading': {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },
  }),
);

export function CoverLoading(props: CoverLoadingArgs) {
  const clsx = GlobalStyles();

  return (
    <div
      className={clsx.positionFixedCentering}
      style={{
        zIndex: 9995,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        width: '100vw',
        height: '100vh',
      }}>
      <div className={clsx.positionFixedCentering}>
        <CircularProgress
          color='primary'
          style={{
            zIndex: 9999,
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
}
