import { Content, Page } from '@backstage/core-components';
import { HomePageSearchBar } from '@backstage/plugin-search';
import { makeStyles } from '@material-ui/core';
import { GcdsLink } from '@cdssnc/gcds-components-react';
import { GcdsNotice } from '@cdssnc/gcds-components-react';
import { GcdsText } from '@cdssnc/gcds-components-react';
import { GcdsHeading } from '@cdssnc/gcds-components-react';
import { GcdsHomePageCards } from './GcdsHomePageCards';
import * as tokens from '@cdssnc/gcds-tokens/build/web/js/tokens.js'
import i18n  from '../../i18n/i18n';
import { I18nextProvider, useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  searchBar: {
    width: '100%',
  },
  searchBarOutline: {
    borderStyle: '1px solid' + tokens.GcdsActiveBackground,
  },
});

makeStyles({
  svg: {
    width: 'auto',
    height: 100,
  },
  path: {
    fill: '#7df3e1',
  },
});

export const GcdsHomePage = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <Page themeId="home">
        <Content>
          <section>
            <GcdsHeading tag="h1">{t('home.title')}</GcdsHeading>

            <GcdsNotice type="info" noticeTitleTag="h2" noticeTitle={t('home.feedback_title')}>
              <GcdsText>
                {t('home.feedback_message')}{' '}
                <GcdsLink href="mailto:aurora-aurore@ssc-spc.gc.ca">{t('home.feedback_link')}</GcdsLink>
              </GcdsText>
            </GcdsNotice>

            <GcdsText marginTop="300" character-limit="false">
              {t('home.description')}
            </GcdsText>

            <HomePageSearchBar
              classes={{ root: classes.searchBar }}
              InputProps={{
                classes: { notchedOutline: classes.searchBarOutline },
              }}
              placeholder={t('home.search_placeholder')}
            />
          </section>

          <GcdsHomePageCards />
        </Content>
      </Page>
    </I18nextProvider>
  );
};
