import { PropsWithChildren } from 'react';
import {
  ItemCardGrid,
  ItemCardHeader,
  LinkProps,
} from '@backstage/core-components';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Box,
  Grid,
  withStyles,
  Button,
} from '@material-ui/core';
import { GitHubSvgIcon } from '../utils/icons';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';
import DocsIcon from '@material-ui/icons/Description';
import EventIcon from '@material-ui/icons/Event';
import { GcdsText, GcdsHeading } from '@cdssnc/gcds-components-react';
import * as tokens from '@cdssnc/gcds-tokens/build/web/js/tokens.js';

import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../../i18n/i18n';

const CardTitleIcon = withStyles({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 20,
    '& .icon': {
      padding: '0.25rem',
    },
  },
})(Box);

interface CardTitleProps {
  icon: React.ReactNode;
  linkProps: LinkProps;
}

const CardTitle = ({
  children,
  icon,
  ...props
}: PropsWithChildren<CardTitleProps>) => {
  return (
    <CardTitleIcon>
      <div className="icon">{icon}</div>
      <Link {...props.linkProps}>{children}</Link>
    </CardTitleIcon>
  );
};

const CardLinkButton = withStyles({
  root: {
    paddingLeft: tokens.GcdsCardPadding,
    paddingRight: tokens.GcdsCardPadding,
    '& .link-text': {
      color: tokens.GcdsLinkDefault,
      transition: 'transform .25s ease',
    },
    '& .icon': {
      fill: tokens.GcdsLinkDefault,
      marginLeft: tokens.GcdsIconMargin100,
      transition: 'transform .25s ease',
    },
    '&:hover': {
      background: 'none',
      '& .link-text': {
        textDecoration: 'none',
        color: tokens.GcdsColorBlue900,
      },
      '& .icon': {
        transform: 'translateX(6px)',
        fill: tokens.GcdsColorBlue900,
      },
    },
  },
})(Button);

const CardButton = ({ children, ...props }: PropsWithChildren<LinkProps>) => {
  return (
    <CardLinkButton variant="text">
      <Link className="link-text" {...props}>
        {children}
      </Link>
      <ChevronRightIcon className="icon" />
    </CardLinkButton>
  );
};

const useStyles = makeStyles({
  cardGroup: {
    paddingTop: 20,
  },
  cardGrid: {
    gridTemplateColumns: 'repeat(auto-fit)',
    gridGap: 20,
  },
  card: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  cardHeader: {
    backgroundImage: 'unset',
    paddingBottom: 0,
  },
  cardContent: {
    background: tokens.GcdsBgLight,
    color: tokens.GcdsTextPrimary,
  },
  cardActions: {
    background: tokens.GcdsBgLight,
    color: tokens.GcdsTextPrimary,
  },
  background: {
    padding: `0px calc(9% + ${20}) ${20}`,
    marginLeft: `-${20}`,
    marginRight: `-${20}`,
    background: tokens.GcdsBgLight,
  },
});

const InnerGcdsHomePageCards = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const docs = [
    {
      key: 'd1',
      url: 'https://aurora.gccloudone.ca/architecture/',
      label: t('docs.aurora_label'),
      icon: <DocsIcon />,
      buttonText: t('docs.aurora_button'),
      desc: t('docs.aurora_description'),
    },
    {
      key: 'd3',
      url: 'https://private-prive.cloud-nuage.canada.ca',
      label: t('docs.private_label'),
      icon: <DocsIcon />,
      buttonText: t('docs.private_button'),
      desc: t('docs.private_description'),
    },
    {
      key: 'd2',
      url: 'https://service.ssc-spc.gc.ca',
      label: t('docs.serving_label'),
      icon: <DocsIcon />,
      buttonText: t('docs.serving_button'),
      desc: t('docs.serving_description'),
    },
  ];

  const events = [
    {
      key: 'e1',
      url: 'https://aurora.gccloudone.ca/',
      label: t('event.aurora_label'),
      icon: <EventIcon />,
      buttonText: t('event.aurora_button'),
      desc: (
        <>
          <GcdsText>{t('event.aurora_description')}</GcdsText>
          <GcdsText>
            <b>{t('event.aurora_what')} </b>
            {t('event.aurora_what_description')}
          </GcdsText>
          <GcdsText>
            <b>{t('event.aurora_where')} </b>
            {t('event.aurora_where_description')}
          </GcdsText>
          <GcdsText>
            <b>{t('event.aurora_when')} </b>
            {t('event.aurora_when_description')}
          </GcdsText>
        </>
      ),
    },
  ];

  const tools = [
    {
      key: 't3',
      url: 'https://github.com/gccloudone',
      label: t('tool.github_label'),
      icon: <GitHubSvgIcon />,
      buttonText: t('tool.github_button'),
      desc: t('tool.github_description'),
    },
  ];

  return (
    <div className={classes.background}>
      <div className={classes.cardGroup}>
        <Grid container spacing={0} justifyContent="space-between">
          <GcdsHeading tag="h2">{t('docs.section_title')}</GcdsHeading>
          <CardButton to="docs">{t('docs.view_all')}</CardButton>
        </Grid>

        <Grid container spacing={4}>
          {docs.map(d => (
            <Grid item key={d.key} sm={12} md={4} style={{ display: 'flex' }}>
              <Card classes={{ root: classes.card }}>
                <CardMedia>
                  <ItemCardHeader
                    classes={{ root: classes.cardHeader }}
                    title={
                      <CardTitle
                        linkProps={{ to: d.url, title: d.label }}
                        icon={d.icon}
                      >
                        {d.label}
                      </CardTitle>
                    }
                  />
                </CardMedia>
                <CardContent classes={{ root: classes.cardContent }}>
                  <GcdsText>{d.desc}</GcdsText>
                </CardContent>
                <CardActions classes={{ root: classes.cardActions }}>
                  <CardButton to={d.url} title={d.label}>
                    {d.buttonText}
                  </CardButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className={classes.cardGroup}>
        <GcdsHeading tag="h2">{t('event.section_title')}</GcdsHeading>
        <ItemCardGrid classes={{ root: classes.cardGrid }}>
          {events.map(e => (
            <Card key={e.key} classes={{ root: classes.card }}>
              <CardMedia>
                <ItemCardHeader
                  classes={{ root: classes.cardHeader }}
                  title={
                    <CardTitle
                      linkProps={{
                        to: e.url,
                        title: e.label,
                        target: '_blank',
                      }}
                      icon={e.icon}
                    >
                      {e.label}
                    </CardTitle>
                  }
                />
              </CardMedia>
              <CardContent classes={{ root: classes.cardContent }}>
                {e.desc}
              </CardContent>
              <CardActions classes={{ root: classes.cardActions }}>
                <CardButton to={e.url} title={e.label} target="_blank">
                  {e.buttonText}
                </CardButton>
              </CardActions>
            </Card>
          ))}
        </ItemCardGrid>
      </div>

      <div className={classes.cardGroup}>
        <GcdsHeading tag="h2">{t('community.section_title')}</GcdsHeading>
        <GcdsText marginTop="300" character-limit="false">
          {t('community.section_description')}
        </GcdsText>

        <ItemCardGrid classes={{ root: classes.cardGrid }}>
          {tools.map(t => (
            <Card key={t.key} classes={{ root: classes.card }}>
              <CardMedia>
                <ItemCardHeader
                  classes={{ root: classes.cardHeader }}
                  title={
                    <CardTitle
                      linkProps={{
                        to: t.url,
                        title: t.label,
                        target: '_blank',
                      }}
                      icon={t.icon}
                    >
                      {t.label}
                    </CardTitle>
                  }
                />
              </CardMedia>
              <CardContent>
                <GcdsText>{t.desc}</GcdsText>
              </CardContent>
              <CardActions>
                <CardButton to={t.url} title={t.label} target="_blank">
                  {t.buttonText}
                </CardButton>
              </CardActions>
            </Card>
          ))}
        </ItemCardGrid>
      </div>
    </div>
  );
};

export const GcdsHomePageCards = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <InnerGcdsHomePageCards />
    </I18nextProvider>
  );
};
