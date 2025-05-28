import { Content, Page } from '@backstage/core-components';
import { HomePageSearchBar } from '@backstage/plugin-search';
import { makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { configApiRef, useApi } from '@backstage/core-plugin-api';
import { GcdsLink } from '@cdssnc/gcds-components-react';
import { GcdsNotice } from '@cdssnc/gcds-components-react';
import { GcdsText } from '@cdssnc/gcds-components-react';
import { GcdsHeading } from '@cdssnc/gcds-components-react';
import { GcdsHomePageCards } from './GcdsHomePageCards';
import * as tokens from '@cdssnc/gcds-tokens/build/web/js/tokens.js'

const useStyles = makeStyles({

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
  const config = useApi(configApiRef);

  return (
    <Page themeId="home">
      <Content>
        <section className={classes.root}>
          <GcdsHeading tag="h1">
            GC Developer Portal
          </GcdsHeading>

          <GcdsNotice type="info" noticeTitleTag="h2" noticeTitle="Provide Feedback">
            <GcdsText>The GC Developer Portal is managed by the Product Office
            team. Join us as we work together to create impactful solutions by{' '}
            <GcdsLink href="mailto:aurora-aurore@ssc-spc.gc.ca">providing feedback.</GcdsLink>
            </GcdsText>
          </GcdsNotice>

          <GcdsText marginTop="300" character-limit="false">
            The GC Developer Portal is a place to access common technical
            documentation, community knowledge bases, code samples and APIs.
          </GcdsText>

          <HomePageSearchBar
            classes={{ root: classes.searchBar }}
            InputProps={{
              classes: { notchedOutline: classes.searchBarOutline },
            }}
            placeholder="Search all GC Developer Portal resources"
          />
        </section>

        <GcdsHomePageCards />

      </Content>
    </Page>
  );
};
