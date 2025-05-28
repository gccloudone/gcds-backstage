import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { themeGcdsPlugin, ThemeGcdsPage } from '../src/plugin';

createDevApp()
  .registerPlugin(themeGcdsPlugin)
  .addPage({
    element: <ThemeGcdsPage />,
    title: 'Root Page',
    path: '/theme-gcds',
  })
  .render();
