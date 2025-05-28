import {
  createBaseThemeOptions,
  palettes,
  createUnifiedTheme,
  shapes,
  genPageTheme,
} from '@backstage/theme';
import { alpha } from '@material-ui/core/styles';

// https://github.com/cds-snc/gcds-fonts
import '@cdssnc/gcds-fonts/fonts/icons/gcds-icons.css'
import '@cdssnc/gcds-fonts/fonts/lato/gcds-lato.css'
import '@cdssnc/gcds-fonts/fonts/noto-sans/gcds-noto-sans.css'

// https://github.com/cds-snc/gcds-components
import '@cdssnc/gcds-components/dist/gcds/gcds.css'
import '@cdssnc/gcds-components/dist/gcds/gcds.esm.js'

// https://github.com/cds-snc/gcds-tokens
import * as tokens from '@cdssnc/gcds-tokens/build/web/js/tokens.js'

export const gcdsTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.light,
      gcds: {
        background: tokens.GcdsBgLight,
        currentLine: tokens.GcdsColorBlue900,
        foreground: tokens.GcdsBgLight,
        comment: tokens.GcdsLinkLight,
        green: tokens.GcdsColorGreen500,
        orange: tokens.GcdsColorOrange700,
        purple: tokens.GcdsColorPurple700,
        red: tokens.GcdsColorRed500,
        yellow: tokens.GcdsColorYellow500,
      },
      background: {
        default: tokens.GcdsBgLight,
        paper: tokens.GcdsBgLight,
      },
      text: {
        primary: tokens.GcdsTextPrimary,
      },
      primary: {
        main: tokens.GcdsTextPrimary,
        light: tokens.GcdsTextPrimary,
        dark: tokens.GcdsTextPrimary,
      },
      secondary: {
        main: tokens.GcdsTextSecondary,
        light: tokens.GcdsTextSecondary,
        dark: tokens.GcdsTextSecondary,
      },
      grey: {
        50: tokens.GcdsColorGrayscale100,
        100: tokens.GcdsColorGrayscale100,
        200: '#c1c4c9',
        300: tokens.GcdsColorGrayscale300,
        400: '#92979f',
        500: tokens.GcdsColorGrayscale500,
        600: '#686d75',
        700: tokens.GcdsColorGrayscale700,
        800: tokens.GcdsColorGrayscale800,
        900: tokens.GcdsColorGrayscale900,
      },
      error: {
        main: tokens.GcdsDangerText,
        light: tokens.GcdsDangerText,
        dark: tokens.GcdsDangerText,
      },
      warning: {
        main: tokens.GcdsAlertWarningText,
        light: tokens.GcdsAlertWarningText,
        dark: tokens.GcdsAlertWarningText,
      },
      success: {
        main: tokens.GcdsAlertSuccessText,
        light: tokens.GcdsAlertSuccessText,
        dark: tokens.GcdsAlertSuccessText,
      },
      info: {
        main: tokens.GcdsAlertInfoText,
        light: tokens.GcdsAlertInfoText,
        dark: tokens.GcdsAlertInfoText,
      },
      navigation: {
        ...palettes.light.navigation,
        background: tokens.GcdsColorBlue500,
        color: tokens.GcdsLinkLight,
        indicator: tokens.GcdsLinkLight,
        navItem: {
          hoverBackground: tokens.GcdsColorGrayscale500,
        },
        submenu: {
          background: tokens.GcdsColorBlue500,
        }
      },
    },
  }),
  fontFamily: tokens.GcdsFontText.fontFamily,
  pageTheme: {
    home: genPageTheme({
      colors: [tokens.GcdsBgLight, tokens.GcdsBgLight],
      shape: shapes.wave,
      options: { fontColor: tokens.GcdsTextPrimary },
    }),
    documentation: genPageTheme({
      colors: [tokens.GcdsBgLight, tokens.GcdsBgLight],
      shape: shapes.wave,
      options: { fontColor: tokens.GcdsTextPrimary },
    }),
    tool: genPageTheme({
      colors: [tokens.GcdsBgLight, tokens.GcdsBgLight],
      shape: shapes.round,
      options: { fontColor: tokens.GcdsTextPrimary },
    }),
    service: genPageTheme({
      colors: [tokens.GcdsBgLight, tokens.GcdsBgLight],
      shape: shapes.wave,
      options: { fontColor: tokens.GcdsTextPrimary },
    }),
    website: genPageTheme({
      colors: [tokens.GcdsBgLight, tokens.GcdsBgLight],
      shape: shapes.wave,
      options: { fontColor: tokens.GcdsTextPrimary },
    }),
    library: genPageTheme({
      colors: [tokens.GcdsBgLight, tokens.GcdsBgLight],
      shape: shapes.wave,
      options: { fontColor: tokens.GcdsTextPrimary },
    }),
    other: genPageTheme({
      colors: [tokens.GcdsBgLight, tokens.GcdsBgLight],
      shape: shapes.wave,
      options: { fontColor: tokens.GcdsTextPrimary },
    }),
    app: genPageTheme({
      colors: [tokens.GcdsBgLight, tokens.GcdsBgLight],
      shape: shapes.wave,
      options: { fontColor: tokens.GcdsTextPrimary },
    }),
    apis: genPageTheme({
      colors: [tokens.GcdsBgLight, tokens.GcdsBgLight],
      shape: shapes.wave,
      options: { fontColor: tokens.GcdsTextPrimary },
    }),
  },
  defaultPageTheme: 'home',
  components: {
    BackstageBottomLink: {
      styleOverrides: {
        root:({ theme }) => ({
          maxWidth: "fit-content",
          padding: theme.spacing(2, 2, 2, 2.5),
          color: tokens.GcdsLinkLight,
        }),
        arrow: {
          margin: 0,
          color: tokens.GcdsLinkLight,
        },
        boxTitle: {
          color: tokens.GcdsLinkLight,
        },
      },
    },
    BackstageHeader: {
      styleOverrides: {
        header: ({ theme }) => ({
          backgroundColor: tokens.GcdsBgLight,
          backgroundImage: 'unset',
          boxShadow: 'unset',
          paddingBottom: theme.spacing(5),
        }),
        title: ({ theme }) => ({
          color: tokens.GcdsTextSecondary,
          fontWeight: 100,
        }),
        subtitle: ({ theme }) => ({
          color: alpha(tokens.GcdsTextSecondary, 0.8),
        }),
        type: ({ theme }) => ({
          color: alpha(tokens.GcdsTextSecondary, 0.8),
        }),
      },
    },
    BackstageHeaderLabel: {
      styleOverrides: {
        root: {
          color: tokens.GcdsLinkDefault,
        },
        label: {
          color: tokens.GcdsLinkDefault,
        },
        value: {
          color: tokens.GcdsLinkDefault,
        },
      },
    },
    BackstageHeaderTabs: {
      styleOverrides: {
        tabsWrapper: {
          backgroundColor: tokens.GcdsBgLight,
          color: tokens.GcdsLinkDefault,
          fontSize: 'inherit',
          textTransform: 'none',
        },
        defaultTab: {
          backgroundColor: tokens.GcdsBgLight,
          color: tokens.GcdsLinkDefault,
          fontSize: 'inherit',
          textTransform: 'none',
        },
      },
    },
    BackstageIconLinkVertical: {
      styleOverrides: {
        primary: ({ theme }) => ({
          color: tokens.GcdsTextSecondary,
        }),
      },
    },
    BackstageItemCardHeader: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          backgroundColor: tokens.GcdsColorGrayscale500,
          backgroundImage: 'unset',
          border: tokens.GcdsColorBlue900,
          color: tokens.GcdsTextLight,
        },
      },
    },
    BackstageOpenedDropdown: {
      styleOverrides: {
        icon: {
          '& path': {
            fill: tokens.GcdsTextPrimary,
          },
        },
      },
    },
    BackstageSelectInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-focused > div[role=button]': {
            borderColor: tokens.GcdsTextPrimary,
          },
        },
        input: {
          border: '1px solid ' + tokens.GcdsTextPrimary,
        },
      },
    },
    BackstageTable: {
      styleOverrides: {
        root: {
          '&> :first-child': {
            borderBottom: '1px solid ' + tokens.GcdsTextPrimary,
            boxShadow: 'none',
          },
          '& th': {
            borderTop: 'none',
            textTransform: 'none !important',
          },
        },
      },
    },
    BackstageTableToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 3,
          backgroundColor: tokens.GcdsColorGrayscale500,
          border: tokens.GcdsColorBlue500,
          color: tokens.GcdsTextLight,
          margin: 4,
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
        standardError: ({ theme }) => ({
          color: tokens.GcdsAlertDangerText,
          backgroundColor: tokens.GcdsAlertDangerBackground,
          '& $icon': {
            color: tokens.GcdsAlertDangerText,
          },
        }),
        standardInfo: ({ theme }) => ({
          color: tokens.GcdsAlertSuccessText,
          backgroundColor: tokens.GcdsAlertSuccessBackground,
          '& $icon': {
            color: tokens.GcdsAlertSuccessText,
          },
        }),
        standardSuccess: ({ theme }) => ({
          color: tokens.GcdsAlertSuccessText,
          backgroundColor: tokens.GcdsAlertSuccessBackground,
          '& $icon': {
            color: tokens.GcdsAlertSuccessText,
          },
        }),
        standardWarning: ({ theme }) => ({
          color: tokens.GcdsAlertWarningText,
          backgroundColor: tokens.GcdsAlertWarningBackground,
          '& $icon': {
            color: tokens.GcdsAlertWarningText,
          },
        }),
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&[aria-expanded=true]': {
            backgroundColor: tokens.GcdsBgLight,
            color: tokens.GcdsTextPrimary,
          },
          '&[aria-expanded=true] path': {
            fill: tokens.GcdsTextPrimary,
          },
        }),
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          textTransform: 'none',
        },
        contained: {
          boxShadow: 'none',
        },
        containedPrimary: ({ theme }) => ({
          backgroundcolor: tokens.GcdsTextSecondary,
          '&:hover': {
            backgroundcolor: tokens.GcdsBgDark,
          },
        }),
        outlinedPrimary: ({ theme }) => ({
          color: tokens.GcdsTextSecondary,
          border: `1px solid ${tokens.GcdsTextSecondary}`,
          '&:hover': {
            backgroundColor: alpha(tokens.GcdsBgDark, 0.1),
            color: tokens.GcdsTextSecondary,
            border: `1px solid ${tokens.GcdsTextSecondary}`,
          },
        }),
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          // Reduce padding between header and content
          paddingBottom: 0
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          // When cards have a forced size, such as when they are arranged in a
          // CSS grid, the content needs to flex such that the actions (buttons
          // etc) end up at the bottom of the card instead of just below the body
          // contents.
          flexGrow: 1,
          "&:last-child": {
            paddingBottom: void 0
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: tokens.GcdsColorBlue500,
          color: tokens.GcdsTextLight,
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorPrimary: ({ theme }) => ({
          color: tokens.GcdsTextSecondary,
        }),
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: tokens.GcdsBgLight,
          },
        },
        divider: {
          borderBottom: '1px solid' + tokens.GcdsBgLight,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: tokens.GcdsColorBlue900,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: tokens.GcdsBgLight,
          color: tokens.GcdsTextPrimary,
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: ({ theme }) => ({
          color: tokens.GcdsTextPrimary,
          '&[aria-expanded]': {
            backgroundColor: tokens.GcdsColorBlue500,
            color: tokens.GcdsTextPrimary,
          },
        }),
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 10,
        },
        switchBase: {
          padding: 12,
        },
        thumb: {
          backgroundColor: tokens.GcdsTextPrimary,
          height: 14,
          width: 14,
        },
        track: {
          borderRadius: 9,
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.GcdsBgLight,
          color: tokens.GcdsTextPrimary,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.GcdsBgLight,
          color: tokens.GcdsTextPrimary,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          transition: 'none',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        button: {
          textTransform: 'none',
        },
      },
    },
    PluginCatalogEntityContextMenu: {
      styleOverrides: {
        button: {
          color: tokens.GcdsTextPrimary,
        },
      },
    },
  },
});
