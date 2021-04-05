import React, { FC, Fragment, CSSProperties } from 'react';
import Card from '@material-ui/core/Card';
import createStyles from '@material-ui/core/styles/createStyles';
import CardContent from '@material-ui/core/CardContent';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import { GlobalStyles } from '../Styles/globalClsx';
import { analitics } from '../../firebase';

interface PostCardArgs extends BasicComponentArgs {
  /** ヘッダーのタイトル箇所。名前等 */
  headerTitle: string;
  /** ヘッダーサブタイトル箇所。日付等 */
  headerSubTitle: string;
  /** ヘッダーの最も右側の情報欄。金額等 */
  headerInfo: JSX.Element;
  /** アイコン */
  headerIcon: JSX.Element;
  /** 常に表示するカードの情報 */
  description: JSX.Element;
  /** 非表示としているカードの情報 */
  collapseArea: JSX.Element;
}

const useStylesForPostCard = makeStyles((theme: Theme) =>
  createStyles({
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }),
);
/**
 * ユーザーの投稿を表示するカードを定義
 * @param props
 */
export function PostCard(props: PostCardArgs) {
  const classes = useStylesForPostCard();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    analitics.logEvent(`search page content click. ${props.headerTitle}`);
    setExpanded(!expanded);
  };

  return (
    <Card className={props.className} style={props.style}>
      <CardHeader
        avatar={<Avatar aria-label='post'>{props.headerIcon}</Avatar>}
        action={props.headerInfo}
        title={props.headerTitle}
        subheader={props.headerSubTitle}
      />
      <CardContent>{props.description}</CardContent>
      <CardActions>
        <Box textAlign='right' color='text.secondary' style={{ flexGrow: 1 }}>
          詳細はここをクリック
        </Box>
        <IconButton
          className={expanded ? classes.expand : classes.expandOpen + ' ' + classes.expand}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'>
          <Icon>expand_more</Icon>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>{props.collapseArea}</CardContent>
      </Collapse>
    </Card>
  );
}

interface TopImageCardArgs extends BasicComponentArgs {
  /** TopImageCardの右辺テキスト */
  title: JSX.Element;
  /** TopImageCardの左辺テキスト */
  messages: JSX.Element;
  /** 背景のURL */
  backgroundUrl: string;
  /** Card要素に適用するdata-info属性 */
  dataInfo: string;
}
/**
 * サイトTOP等にて利用する背景ありカード要素を定義
 * @description desktop表示の場合は左右にテキストの表示
 * @description mobile表示の場合は、上下にテキストの表示
 */
export function TopImageCard(props: TopImageCardArgs) {
  const theme = useTheme();
  const matches: boolean = useMediaQuery(theme.breakpoints.down('sm'));
  const clsx = GlobalStyles();
  const propsStyle = !props.style ? ({} as CSSProperties) : (props.style as CSSProperties);

  const css: CSSProperties = {
    ...propsStyle,
    padding: 0,
    backgroundImage: `url(${props.backgroundUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
  };

  const Centering: FC = props => (
    <div className={clsx.positionCentering}>
      <div>{props.children}</div>
    </div>
  );

  return (
    <Card style={css} data-info={props.dataInfo}>
      <Grid container justify='center' alignItems='stretch' spacing={3} style={{ height: '100%' }}>
        {matches ? (
          <Grid item sm={12} style={{ height: '100%' }}>
            <Centering>
              {props.title}
              {props.messages}
            </Centering>
          </Grid>
        ) : (
          <Fragment>
            <Grid item md={6}>
              <Centering>{props.title}</Centering>
            </Grid>
            <Grid item md={6}>
              <Centering>{props.messages}</Centering>
            </Grid>
          </Fragment>
        )}
      </Grid>
    </Card>
  );
}
