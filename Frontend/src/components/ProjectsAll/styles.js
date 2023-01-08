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
    margin: "1rem 0"
  },
}));
