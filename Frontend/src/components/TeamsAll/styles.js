import { createStyles } from "@mantine/core";

export const useTeamStyles = createStyles((theme) => ({
  projectCardHeader: {
    width: "100%",
    justifyContent: "space-between",
  },

  cardLink: {
    textDecoration: "none",
    color: theme.colors.dark[8],
    "&:hover": {
      textDecoration: "underline",
      textUnderlineOffset: 5,
      color: theme.colors.ocean[5],
      textDecorationColor: theme.colors.blue[4],
    },
  },

  // project add form
  teamDrawer: {
    zIndex: 10000,
    "& .mantine-Drawer-closeButton svg": {
      color: theme.colors.ocean[5],
      width: "1.5rem",
      height: "1.5rem",
    },
  },

  innerDrawer: {
    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },

  //  form styles
  formTeamName: {
    "& .mantine-TextInput-input:focus": {
      outline: `${theme.colors.gray[4]} solid 1px`,
      outlineStyle: "dashed",
    },
  },
}));
