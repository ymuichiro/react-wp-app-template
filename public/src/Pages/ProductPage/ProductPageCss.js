import { makeStyles, createStyles } from '@material-ui/core/styles';
export var useStyles = makeStyles(function (theme) {
    return createStyles({
        InImageTitleText: {
            textAlign: 'center',
            fontWeight: theme.typography.fontWeightBold,
            color: 'inherit',
        },
        InImageSubTitleText: {
            textAlign: 'center',
            fontWeight: theme.typography.fontWeightBold,
            color: 'inherit',
        },
        InImageParagraphText: {
            textAlign: 'center',
            fontWeight: theme.typography.fontWeightBold,
            maxWidth: theme.breakpoints.width('sm'),
            color: 'inherit',
        },
        CardContainer: {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            height: '60vh',
            width: 'inherit',
        },
        Inducation: {
            height: '30vh',
            marginTop: '5vh',
        },
    });
});
