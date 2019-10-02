// Red
// #530606
// Black
// #000
// Blue
// #000033
// Yellow
// #FFC260
// LtGreen
// #D7DBA6
// Green
// #047D53
// Red
// #910101
import tinycolor from "tinycolor2";

const primary = "#530606";
const secondary = "#000033";
const warning = "#910101";
const success = "#047D53";
const info = "#000033";

const lightenRate = 7.5;
const darkenRate = 15;

export default {
  palette: {
    primary: {
      main: primary,
      light: tinycolor(primary)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(primary)
        .darken(darkenRate)
        .toHexString(),
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(secondary)
        .darken(darkenRate)
        .toHexString(),
      contrastText: "#FFFFFF",
    },
    warning: {
      main: warning,
      light: tinycolor(warning)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(warning)
        .darken(darkenRate)
        .toHexString(),
    },
    success: {
      main: success,
      light: tinycolor(success)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(success)
        .darken(darkenRate)
        .toHexString(),
    },
    info: {
      main: info,
      light: tinycolor(info)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(info)
        .darken(darkenRate)
        .toHexString(),
    },
    text: {
      primary: "#000033",
      secondary: "#6E6E6E",
      hint: "#6E6E6E",
    },
    background: {
      default: "#000000",
      light: "#000000",
    },
  },
  customShadows: {
    widget:
      "0px 3px 11px 0px #047D53, 0 3px 3px -2px #047D53, 0 1px 8px 0 #047D53",
    widgetDark:
      "0px 3px 18px 0px #047D53, 0 3px 3px -2px #047D53, 0 1px 8px 0 #047D53",
    widgetWide:
      "0px 12px 33px 0px #910101, 0 3px 3px -2px #910101, 0 1px 8px 0 #910101",
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "#000000",
      },
    },
    MuiMenu: {
      paper: {
        boxShadow:
          "0px 3px 11px 0px #910101, 0 3px 3px -2px #910101, 0 1px 8px 0 #910101",
      },
    },
    MuiSelect: {
      icon: {
        color: "#B9B9B9",
      },
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "#000033 !important",
          "&:focus": {
            backgroundColor: "#000033",
          },
        },
      },
      button: {
        "&:hover, &:focus": {
          backgroundColor: "#F3F5FF",
        },
      },
    },
    MuiTouchRipple: {
      child: {
        backgroundColor: "#000000",
      },
    },
    MuiTableRow: {
      root: {
        height: 56,
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: "1px solid rgba(224, 224, 224, .5)",
      },
      head: {
        fontSize: "0.95rem",
      },
      body: {
        fontSize: "0.95rem",
      },
    },
  },
};
