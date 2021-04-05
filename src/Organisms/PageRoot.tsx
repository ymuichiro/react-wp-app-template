import Container from '@material-ui/core/Container';
import useTheme from '@material-ui/core/styles/useTheme';
import React, { Fragment, FC } from 'react';
import { clsx } from 'react-utilities';
import { GlobalStyles } from '../Styles/globalClsx';
import { HeaderAndDrawer } from './HeaderAndDrawer';
import { SiteFooter } from './SiteFooter';

interface ComponentArgs extends BasicComponentArgs {
  children: React.ReactNode;
}

/**
 * Root body of each page
 */
export const PageRoot: FC<ComponentArgs> = props => {
  const gClasses = GlobalStyles();
  const theme = useTheme();

  return (
    <Fragment>
      <HeaderAndDrawer color='primary' />
      <Container className={clsx.join(props.className, gClasses.contentSectionContainer)}>
        <div className={gClasses.toolbar} />
        <div style={{ marginTop: theme.spacing(3) }} />
        <Fragment>{props.children}</Fragment>
      </Container>
      <SiteFooter />
    </Fragment>
  );
};

/**
 * Root body of each page
 */
export const PageRootNoContainer: FC<ComponentArgs> = props => {
  const theme = useTheme();
  const clsx = GlobalStyles();

  return (
    <Fragment>
      <HeaderAndDrawer color='white' />
      <div className={clsx.toolbar} />
      <div style={{ marginTop: theme.spacing(3) }} />
      <Fragment>{props.children}</Fragment>
      <SiteFooter />
    </Fragment>
  );
};
