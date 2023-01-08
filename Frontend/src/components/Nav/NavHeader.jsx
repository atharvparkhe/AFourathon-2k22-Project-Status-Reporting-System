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
} from "@mantine/core";
import {
  IconChevronRight,
  IconLogout,
  IconBrandAsana,
  IconUsers,
  IconHierarchy,
} from "@tabler/icons";
import { useNavStyles } from "./styles";
import { Outlet, Link } from "react-router-dom";

const NavHeader = ({navOpened, navOpen}) => {
  const { classes, cx, theme } = useNavStyles();

    return(
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={navOpen}
                onClick={() => navOpened((o) => !o)}
                size="sm"
                mr="xl"
              />
            </MediaQuery>

            <Group sx={{ width: "100%", justifyContent: "space-between" }}>
              <Title size="h4" className={classes.hiddenSmaller}>
                Daily Status Reporting App
              </Title>

              {/* nav user */}
              <UnstyledButton
                className={cx(classes.hiddenMobile, classes.userButton)}
              >
                <Group>
                  <div>
                    <Text fz="sm">Bob Handsome</Text>
                    <Text size="xs" color="dimmed">
                      bob@handsome.inc
                    </Text>
                  </div>
                  <Avatar size={40} color="blue" radius="xl">
                    BH
                  </Avatar>
                  <IconChevronRight size={16} />
                </Group>
              </UnstyledButton>
            </Group>
          </div>
        </Header>
    )
}
export default NavHeader;