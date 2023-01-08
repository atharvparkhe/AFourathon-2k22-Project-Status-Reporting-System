import { createStyles } from "@mantine/core";

export const useProjectStyles = createStyles((theme) => ({
  projectCard: {
    borderBottom: `2px solid ${theme.colors.blue[5]}`,
    "&:nth-of-type(3n)": {
      borderBottom: `2px solid ${theme.colors.lime[6]}`,
    },
    "&:nth-of-type(3n+1)": {
      borderBottom: `2px solid ${theme.colors.yellow[5]}`,
    },
  },
  projectCardHeader: {
    width: "100%",
    justifyContent: "space-between",
  },
  projectDesc: {
    color: theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    padding: "1.5rem 0",
  },

  // project add form
  projectDrawer: {
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
  formProjectName: {
    "& .mantine-TextInput-input:focus": {
      outline: `${theme.colors.gray[4]} solid 1px`,
      outlineStyle: "dashed",
    }
  }
}));
