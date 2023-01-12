import { IconStar } from "@tabler/icons";
import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  Title,
  UnstyledButton,
  Group,
  Avatar,
  createStyles,
  NavLink,
  Stack,
  Divider,
} from "@mantine/core";
import {
  IconChevronRight,
  IconLogout,
  IconBrandAsana,
  IconUsers,
  IconHierarchy,
} from "@tabler/icons";
import { useProjectNavStyles } from "./styles";
import { Outlet, Link } from "react-router-dom";

import { logout } from "../../actions/auth";

// styles
const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
      borderRadius: theme.radius.md,
      fontWeight: 500,

      "&:hover": {
        backgroundColor: theme.colors.gray[0],
        color: theme.black,

        [`& .${icon}`]: {
          color: theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.colors.ocean[4],
        color: theme.fn.variant({ variant: "dark", color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: "dark",
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});

// nav content
const data = [
  { link: "/", label: "Home", icon: IconBrandAsana },
  { link: "about", label: "About", icon: IconUsers },
  { link: "modules", label: "Modules", icon: IconHierarchy },
];

export default function ProjectNav({ navOpen }) {
  const { classes, cx, theme } = useProjectNavStyles();
  const [active, setActive] = useState("Billing");
  const { classes: classesMain } = useStyles();

  const links = data.map((item) => (
    <NavLink
      className={cx(classesMain.link, {
        [classesMain.linkActive]: item.label === active,
      })}
      component={Link}
      to={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
      label={item.label}
      icon={<item.icon className={classesMain.linkIcon} stroke={1.5} />}
    />
  ));

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!navOpen}
          className={classes.navbar}
          width={{ sm: 200, lg: 250 }}
        >
          <Stack sx={{ justifyContent: "space-between", height: "100%" }}>
            <Group>
              <Avatar size={40} color="blue" radius="xl">
                <IconStar />
              </Avatar>
              <Title size="h4">Kia Dashboard</Title>
              <Divider sx={{ width: "100%" }} />
            </Group>

            {/* nav links */}
            <Stack>{links}</Stack>
           
           {/* logout */}
            <Stack>
            <button
                className={classesMain.link}
                onClick={() => logout}
              >
                <IconLogout className={classesMain.linkIcon} stroke={1.5} />
                <span>Logout</span>
              </button>


              {/* user avatar */}
              <UnstyledButton
                className={cx(classes.hiddenDesktop, classes.userButton)}
              >
                <Group sx={{ justifyContent: "space-between" }}>
                  <Group>
                    <Avatar size={40} color="blue" radius="xl">
                      BH
                    </Avatar>
                    <div>
                      <Text>Bob Handsome</Text>
                      <Text size="xs" color="dimmed">
                        bob@handsome.inc
                      </Text>
                    </div>
                  </Group>
                  <IconChevronRight size={16} />
                </Group>
              </UnstyledButton>
            </Stack>
          </Stack>
        </Navbar>
      }
    >
      <Outlet />
    </AppShell>
  );
}
