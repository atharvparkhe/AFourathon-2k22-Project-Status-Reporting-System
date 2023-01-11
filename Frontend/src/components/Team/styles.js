import { createStyles } from "@mantine/core";

export const useTeamNavStyles = createStyles((theme) => ({
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

export const useMemberStyles = createStyles((theme) => ({
  memberCard: {
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-3px)",
      transition: "transform 0.2s linear",
    },
  },
  memberName: {
    fontWeight: 600,
  },
  memberEmail: {
    fontSize: theme.fontSizes.sm,
  },

  // form styles ===========================
  formMemberName: {
    "& .mantine-TextInput-input:focus": {
      outline: `${theme.colors.gray[4]} solid 1px`,
      outlineStyle: "dashed",
    },
  },
}));
