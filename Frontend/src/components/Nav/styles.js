import { createStyles } from "@mantine/core";

export const useNavStyles = createStyles((theme) => ({
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
  }
}));
