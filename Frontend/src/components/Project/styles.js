import { createStyles } from "@mantine/core";

export const useProjectNavStyles = createStyles((theme) => ({
  hiddenDesktop: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
  hiddenMobile: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  hiddenSmaller: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  //   user avatar
  userButton: {
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: theme.black,

    "&:hover": {
      backgroundColor: theme.colors.gray[0],
    },
  },

  //   nav styles ==========
  navbar: {
    height: "calc(100% - 70px)",
  },
}));

export const useProjectAboutStyles = createStyles((theme) => ({
  formGroup: {
    width: "100%",
    justifyContent: "space-between",
    margin: "1rem 0",
  },
  formStack: {
    flex: "0 1 48%",
    [theme.fn.smallerThan("md")]: {
      flex: "0 1 100%",
    },
    "& label": {
      color: theme.colors.gray[6],
      fontWeight: 400,
      fontSize: theme.fontSizes.sm,
    },
  },
}));

export const useModuleStyles = createStyles((theme) => ({
  projectCardHeader: {
    justifyContent: "space-between",
  },
  projectDesc: {
    color: theme.colors.gray[6],
    padding: "1rem 0",
    fontSize: theme.fontSizes.sm,
  },

  // drawer styles
  projectDrawer: {
    zIndex: 10000,
  },
  innerDrawer: {
    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },

  // form styles
  formProjectName: {
    "& .mantine-TextInput-input:focus": {
      outline: `${theme.colors.gray[4]} solid 1px`,
      outlineStyle: "dashed",
    },
  },
}));

export const useTaskStyles = createStyles((theme) => ({
  taskHeader: {
    justifyContent: "space-between",
  },
  headerText: {
    color: theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
  },

  // cards
  taskCard: {
    cursor: "pointer",
    "&:hover": {
      boxShadow: `0px 5px 7px 0px ${theme.colors.gray[3]}`,
    },
  },

  formTaskName: {
    "& .mantine-TextInput-input:focus": {
      outline: `${theme.colors.gray[4]} solid 1px`,
      outlineStyle: "dashed",
    }
  }
}));
