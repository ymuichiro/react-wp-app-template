import { makeStyles, createStyles } from '@material-ui/core/styles';

export const GlobalStyles = makeStyles(theme =>
  createStyles({
    /* ====================================

    button styles

    ==================================== */
    buttonPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    buttonSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
    /* ====================================

    text styles

    ==================================== */
    textTitle: {
      fontSize: theme.typography.h2.fontSize,
      fontFamily: theme.typography.h2.fontFamily,
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.h3.fontSize,
        fontFamily: theme.typography.h3.fontFamily,
      },
    },
    textSubTitle: {
      fontSize: theme.typography.h4.fontSize,
      fontFamily: theme.typography.h4.fontFamily,
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.h5.fontSize,
        fontFamily: theme.typography.h5.fontFamily,
      },
    },
    textCaption: {
      fontSize: theme.typography.h6.fontSize,
      fontFamily: theme.typography.h6.fontFamily,
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.subtitle1.fontSize,
        fontFamily: theme.typography.subtitle1.fontFamily,
      },
    },
    textParagraph: {
      fontSize: theme.typography.subtitle1.fontSize,
      fontFamily: theme.typography.subtitle1.fontFamily,
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.subtitle2.fontSize,
        fontFamily: theme.typography.subtitle2.fontFamily,
      },
    },
    textRemark: {
      fontSize: theme.typography.body2.fontSize,
      fontFamily: theme.typography.body2.fontFamily,
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.caption.fontSize,
        fontFamily: theme.typography.caption.fontFamily,
      },
    },

    /* ====================================

    modal styles

    ==================================== */
    modalBasic: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      padding: '2em',
      borderRadius: '10px',
      [theme.breakpoints.down('sm')]: {
        padding: '0.5em',
      },
    },
    /* ====================================

    card styles

    ==================================== */
    cardBasic: {
      backgroundColor: theme.palette.background.paper,
      padding: '2em',
      [theme.breakpoints.down('sm')]: {
        padding: '1em',
      },
    },
    cardFullWidth: {},
    /* ====================================

    position styles

    ==================================== */
    positionCentering: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    positionLefting: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    positionXCenterYBottom: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'flex-end',
      width: '100%',
      height: '100%',
    },
    positionXCenterYTop: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '100%',
      height: '100%',
    },
    positionFixedCentering: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
    },
    /* ====================================

    transition styles

    ==================================== */
    '@keyframes SimpleFadeIn': {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },
    transitionSimpleFadeIn: {
      animation: '$SimpleFadeIn',
      animationDuration: '1s',
      animationTimingFunction: theme.transitions.easing.easeInOut,
    },
    transitionFadeInDownPending: {
      opacity: 0,
      transform: 'translateY(-10vh)',
    },
    transitionFadeInUpPending: {
      opacity: 0,
      transform: 'translateY(10vh)',
    },
    transitionFadeInRightPending: {
      opacity: 0,
      transform: 'translateX(100vw)',
    },
    transitionFadeInLeftPending: {
      opacity: 0,
      transform: 'translateX(-100vw)',
    },
    transitionFadeInRun: {
      // 本来表示するべき位置へ戻す。
      transition: theme.transitions.create(['opacity', 'transform'], {
        duration: theme.transitions.duration.complex,
        easing: theme.transitions.easing.easeInOut,
      }),
      opacity: 1,
      transform: 'translateX(0px)',
    },
    transitionFadeInEnd: {
      opacity: 1,
      transform: 'translateX(0px)',
    },
    /* ====================================

    other styles

    ==================================== */
    // サイトコンテンツに適用する設定
    contentSectionContainer: {
      maxWidth: theme.breakpoints.values.md,
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
      },
    },
    // body要素直下に適用するサイト全体への設定
    rootContainer: {
      overflow: 'hidden',
      width: '100%',
    },
    drawerContainer: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    },
    toolbar: theme.mixins.toolbar,
  }),
);
