import { makeStyles, createStyles } from '@material-ui/core/styles';
export var GlobalStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return createStyles({
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
        textTitle: (_a = {
                fontSize: theme.typography.h2.fontSize,
                fontFamily: theme.typography.h2.fontFamily
            },
            _a[theme.breakpoints.down('sm')] = {
                fontSize: theme.typography.h3.fontSize,
                fontFamily: theme.typography.h3.fontFamily,
            },
            _a),
        textSubTitle: (_b = {
                fontSize: theme.typography.h4.fontSize,
                fontFamily: theme.typography.h4.fontFamily
            },
            _b[theme.breakpoints.down('sm')] = {
                fontSize: theme.typography.h5.fontSize,
                fontFamily: theme.typography.h5.fontFamily,
            },
            _b),
        textCaption: (_c = {
                fontSize: theme.typography.h6.fontSize,
                fontFamily: theme.typography.h6.fontFamily
            },
            _c[theme.breakpoints.down('sm')] = {
                fontSize: theme.typography.subtitle1.fontSize,
                fontFamily: theme.typography.subtitle1.fontFamily,
            },
            _c),
        textParagraph: (_d = {
                fontSize: theme.typography.subtitle1.fontSize,
                fontFamily: theme.typography.subtitle1.fontFamily
            },
            _d[theme.breakpoints.down('sm')] = {
                fontSize: theme.typography.subtitle2.fontSize,
                fontFamily: theme.typography.subtitle2.fontFamily,
            },
            _d),
        textRemark: (_e = {
                fontSize: theme.typography.body2.fontSize,
                fontFamily: theme.typography.body2.fontFamily
            },
            _e[theme.breakpoints.down('sm')] = {
                fontSize: theme.typography.caption.fontSize,
                fontFamily: theme.typography.caption.fontFamily,
            },
            _e),
        /* ====================================
    
        modal styles
    
        ==================================== */
        modalBasic: (_f = {
                width: '100%',
                backgroundColor: theme.palette.background.paper,
                padding: '2em',
                borderRadius: '10px'
            },
            _f[theme.breakpoints.down('sm')] = {
                padding: '0.5em',
            },
            _f),
        /* ====================================
    
        card styles
    
        ==================================== */
        cardBasic: (_g = {
                backgroundColor: theme.palette.background.paper,
                padding: '2em'
            },
            _g[theme.breakpoints.down('sm')] = {
                padding: '1em',
            },
            _g),
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
        contentSectionContainer: (_h = {
                maxWidth: theme.breakpoints.values.md
            },
            _h[theme.breakpoints.down('sm')] = {
                padding: theme.spacing(1),
            },
            _h),
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
    });
});
