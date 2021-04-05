import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import useTheme from '@material-ui/core/styles/useTheme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import React, { Fragment, useState, CSSProperties } from 'react';
import { useHistory, useLocation } from 'react-router';
import { GlobalStyles } from '../Styles/globalClsx';
import { RouterPath } from '../DataStructure/RouterPath';

// Global値
const SITE_TITLE = 'S-Suport';
const SIDE_BAR_PAGES = (props: { isLogined: boolean }) => {
  const basePages = [
    { name: 'トップページ', href: RouterPath.ROOT, icon: 'home' },
    { name: 'ご利用規約', href: RouterPath.TERMS_POLICY, icon: 'assignment' },
    { name: 'プライバシーポリシー', href: RouterPath.PRIVACY_POLICY, icon: 'privacy_tip' },
  ];
  if (props.isLogined) {
    basePages.push({ name: 'マイページ', href: RouterPath.MYPAGE, icon: 'person' });
  } else {
    basePages.push({ name: '会員登録', href: RouterPath.SIGNUP, icon: 'how_to_reg' });
    basePages.push({ name: 'ログイン', href: RouterPath.SIGNIN, icon: 'person' });
  }
  return basePages;
};

type HeaderAndDrawerArgs = {
  color: 'primary' | 'white';
};

/** Header and Drawer component. Drawer contents is defined inner */
export function HeaderAndDrawer(props: HeaderAndDrawerArgs) {
  const history = useHistory();
  const location = useLocation();
  const clsx = GlobalStyles();
  const theme = useTheme();
  const [anchor, setAnchor] = useState<boolean>(false);
  const [logined, setLogined] = useState<boolean>(false);

  const menuHundle = () => setAnchor(!anchor);
  const openHundle = () => setAnchor(true);
  const closeHundle = () => setAnchor(false);
  const logOutHundle = () => {
    history.push(RouterPath.ROOT);
  };

  const appBarCss: CSSProperties =
    props.color === 'white'
      ? {
          background: 'rgba(255,255,255,0.7)',
          color: theme.palette.text.primary,
        }
      : {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        };

  return (
    <Fragment>
      {/* header */}
      <AppBar position='fixed' style={appBarCss}>
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <Typography color='inherit' className={clsx.textSubTitle} onClick={() => history.push('/')}>
              {SITE_TITLE}
            </Typography>
          </div>
          {logined && (
            <IconButton color='inherit' onClick={logOutHundle}>
              <Icon>logout</Icon>
            </IconButton>
          )}
          <IconButton color='inherit' onClick={menuHundle}>
            <Icon>menu</Icon>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer and innner component */}
      <SwipeableDrawer anchor='top' open={anchor} onOpen={openHundle} onClose={closeHundle}>
        <List>
          {SIDE_BAR_PAGES({ isLogined: logined })
            .filter(e => e.href !== location.pathname)
            .map((item, index) => (
              <ListItem key={index} button onClick={() => history.push(item.href)} style={{ width: '100%' }}>
                <ListItemIcon>
                  <Icon color='inherit'>{item.icon}</Icon>
                </ListItemIcon>
                <ListItemText color='inherit' primary={item.name} style={{ paddingRight: theme.spacing(6) }} />
              </ListItem>
            ))}
        </List>
      </SwipeableDrawer>
    </Fragment>
  );
}
