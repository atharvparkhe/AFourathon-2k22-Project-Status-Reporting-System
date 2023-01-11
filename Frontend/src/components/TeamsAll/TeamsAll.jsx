import { useTeamStyles } from "./styles";
import {
  Box,
  Container,
  Paper,
  Text,
  Title,
  Menu,
  ActionIcon,
  Group,
  SimpleGrid,
  Button,
} from "@mantine/core";
import { IconDots, IconTrash, IconPlus, IconEdit } from "@tabler/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import teamLogo from "../../assets/team-icon.png";
import TeamForm from "./TeamForm";

const CARD_DATA = [
  {
    id: 11,
    title: "Project Kio",
  },
  {
    id: 12,
    title: "Kyota Dashboard",
  },
  {
    id: 13,
    title: "Chrome Release",
  },
  {
    id: 14,
    title: "Mercedes Dashboard",
  },
  {
    id: 15,
    title: "Micro App",
  },
  {
    id: 16,
    title: "Micro App",
  },
];

// COMPONENT ===========================================>
const TeamsAll = () => {
  const { classes, theme } = useTeamStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [formType, setFormType] = useState({ type: null, teamId: null });

  const teamDetailsHandler = (formState, team) => {
    setFormType((prev) => ({ ...prev, type: formState, teamId: team }));
    setOpenDrawer(true)
  };

  return (
    <Container size="xl">
      {/* action buttons -------------------------->*/}
      <Group sx={{ width: "100%", justifyContent: "space-between" }}>
        <Button
          className={classes.addBtn}
          leftIcon={<IconPlus size={18} />}
          uppercase
          radius="md"
          sx={{ backgroundColor: theme.colors.ocean[4] }}
          onClick={() => teamDetailsHandler("add")}
        >
          Add
        </Button>
      </Group>

      {/* add team form ------------------------> */}
      {openDrawer && (
        <TeamForm
          openForm={openDrawer}
          closeDrawer={() => setOpenDrawer(false)}
          formDetails={formType}
        />
      )}

      {/* team cards --------------------------->*/}
      <SimpleGrid breakpoints={[{ minWidth: "sm", cols: 2 }]} my="xl">
        {CARD_DATA.map((card, index) => (
          <Paper
            key={index}
            id={card.id}
            shadow="sm"
            p="lg"
            className={classes.projectCard}
          >
            <Group className={classes.projectCardHeader}>
              <Group>
                <img src={teamLogo} alt="" />
                <Title size="h5" className={classes.projectTitle}>
                  <Link className={classes.cardLink} to="team/details">{card.title}</Link>
                </Title>
              </Group>
              <Menu shadow="md">
                <Menu.Target>
                  <ActionIcon color="dark" size="sm">
                    <IconDots />
                  </ActionIcon>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item
                    color="ocean"
                    icon={<IconEdit size={14} />}
                    onClick={() => teamDetailsHandler("edit", card.id)}
                  >
                    Edit
                  </Menu.Item>
                  <Menu.Item color="red" icon={<IconTrash size={14} />}>
                    Delete
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  );
};
export default TeamsAll;
