import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GlobalStyles } from '../Styles/globalClsx';

/** Load中、index9999に表示し、ユーザーの操作を止める */
export function LoadingCircle(props: { loadFlag: boolean }) {
  const clsx = GlobalStyles();

  return (
    <div>
      {props.loadFlag ? (
        <div
          className={clsx.positionFixedCentering}
          style={{
            zIndex: 9995,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
      ) : (
        <div />
      )}
    </div>
  );
}
