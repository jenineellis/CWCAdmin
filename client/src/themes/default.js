/* .navbar-light .navbar-nav .nav-link {
  color: #d7dba6cd;
  list-style-type: none;
  width:100%;
}

.navbar{
  border-radius: 20px;
  background-color: #530606;
  border-color: #00000033;
  color: #fff;
  list-style: none;
  margin: 0 2px;
  display: flex;
  justify-content: space-around;
  padding: 2.7rem;
}

.navbar .nav-pills >li >a {
  color: #d7dba6;
  padding: 2rem;
  background-color: #530606;
  border-color: #00000033;
  list-style-type: none;
  width:100%;
  padding: 2.7rem;

 }

.navbar .nav-pills > li > a:hover {
  color: #000;
  background-color: #530606;
  border-color: #00000033;
  border-radius: 20px;
  padding: 2.7rem;
  list-style-type: none;
  width:100%;
 }

 li{
   margin: 10px;
   padding: 2rem;
   background-color: #530606;
   border-color: #00000033;
   list-style-type: none;
   padding: 2.7rem;
   width:100%;
}


.navbar .nav-pills .active {
  background-color: #D7DBA6;
  color:#000;
  font-weight:bolder;
  border-radius: 20px;
  padding: 2.7rem;
  list-style-type: none;
  width:100%;
} */
import tinycolor from "tinycolor2";

const primary = "#530606";
const secondary = "#000033";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";

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
      primary: "#D7DBA6",
      secondary: "#6E6E6E",
      hint: "#B9B9B9",
    },
    background: {
      default: "#000000",
      light: "#000000",
    },
  },
  customShadows: {
    widget:
      "0px 3px 11px 0px #D7DBA6, 0 3px 3px -2px #D7DBA6, 0 1px 8px 0 #D7DBA6",
    widgetDark:
      "0px 3px 18px 0px #D7DBA6, 0 3px 3px -2px #D7DBA6, 0 1px 8px 0 #D7DBA6",
    widgetWide:
      "0px 12px 33px 0px #D7DBA6, 0 3px 3px -2px #D7DBA6, 0 1px 8px 0 #D7DBA6",
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
          "0px 3px 11px 0px #D7DBA6, 0 3px 3px -2px #D7DBA6, 0 1px 8px 0 #D7DBA6",
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
          backgroundColor: "#F3F5FF !important",
          "&:focus": {
            backgroundColor: "#F3F5FF",
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
