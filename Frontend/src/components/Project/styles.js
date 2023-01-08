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
      flex: "0 1 100%"
    },
    "& label": {
      color: theme.colors.gray[6],
      fontWeight: 400,
      fontSize: theme.fontSizes.sm,
    },
  },
}));
