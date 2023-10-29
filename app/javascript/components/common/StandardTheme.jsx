import { createTheme } from '@mui/material/styles';
import {
    DARK_GREY_TEXT,
    HYPERLINK_COLOR,
    SECONDARY_DARK_BLUE_COLOR,
    SECONDARY_LIGHT_BLUE_COLOR,
    SECONDARY_COLOR,
} from './Constants';

const StandardTheme = createTheme({
  typography: {
    h1: {
      fontSize: '1.375rem',
      fontWeight: 400,
    },
    h2: {
      fontSize: '1.125rem',
      fontWeight: 400,
    },
    h3: {
      fontSize: '0.9375rem',
      fontWeight: 400,
    },
    h4: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    h5: {
      fontSize: '0.8125rem',
      fontWeight: 400,
    },
  },
  zIndex: {
    appBar: 1009,
  },
  overrides: {
    MuiAutocomplete: {
      listbox: {
        fontSize: '0.875rem',
      },
      groupLabel: {
        fontSize: '0.875rem',
      },
      noOptions: {
        fontSize: '0.875rem',
      },
      option: {
        '&:focus': {
          backgroundColor: SECONDARY_LIGHT_BLUE_COLOR,
        },
        '&[data-focus="true"]': {
          backgroundColor: SECONDARY_LIGHT_BLUE_COLOR,
        },
      },
    },
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: SECONDARY_DARK_BLUE_COLOR,
        },
        '&$active': {
          color: SECONDARY_DARK_BLUE_COLOR,
        },
      },
      active: {},
      completed: {},
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#fafafa',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontSize: '0.9375rem',
          backgroundColor: '#fafafa',
        },
        body: {
          fontSize: '0.875rem',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: '0.875rem',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
        },
        outlined: {
          zIndex: 'auto',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: DARK_GREY_TEXT,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          color: HYPERLINK_COLOR,
          '&:hover': {
            color: HYPERLINK_COLOR,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: 'unset',
          backgroundColor: 'unset',
          padding: '0.28125rem 1.375rem',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        },
        outlined: {
          padding: '0.21875rem 1.375rem',
          border: '1px solid rgba(0, 0, 0, 0.23)',
          '&:hover': {
            border: '1px solid rgba(0, 0, 0, 0.23)',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          height: '100%',
        },
        indicator: {
          backgroundColor: SECONDARY_COLOR,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: SECONDARY_COLOR,
          },
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        label: {
          fontSize: 'inherit',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
        },
      },
    },
  },
});

export default StandardTheme;
