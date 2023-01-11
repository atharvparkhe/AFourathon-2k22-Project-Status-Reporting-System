import { useProjectStyles } from "./styles";
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
import {
  IconDots,
  IconTrash,
  IconFilter,
  IconChevronDown,
  IconPlus,
  IconEdit,
} from "@tabler/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProjectForm from "./ProjectForm";

const CARD_DATA = [
  {
    id: 11,
    title: "Project Kio",
    desc: "Paper is the most basic ui component Lorem ipsum dolor sit amet.",
  },
  {
    id: 12,
    title: "Kyota Dashboard",
    desc: "Paper is the most basic ui component Lorem ipsum dolor sit amet.",
  },
  {
    id: 13,
    title: "Chrome Release",
    desc: "Paper is the most basic ui component Lorem ipsum dolor sit amet.",
  },
  {
    id: 14,
    title: "Mercedes Dashboard",
    desc: "Paper is the most basic ui component Lorem ipsum dolor sit amet.",
  },
  {
    id: 15,
    title: "Micro App",
    desc: "Paper is the most basic ui component Lorem ipsum dolor sit amet.",
  },
  {
    id: 16,
    title: "Micro App",
    desc: "Paper is the most basic ui component Lorem ipsum dolor sit amet.",
  },
];

const ProjectsAll = () => {
  const { classes, theme } = useProjectStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [formType, setFormType] = useState({ type: null, projectId: null });
  const projectDetailsHandler = (formState, projectId = null) => {
    // fetch form data if action == 'edit'
    setFormType((prev) => {
      return { ...prev, type: formState, projectId: projectId };
    });
    setOpenDrawer(true);
  };

  return (
    <Container size="xl">
      {/* action buttons -------------------------->*/}
      <Group sx={{ width: "100%", justifyContent: "space-between" }}>
        <Menu shadow="md" width={150}>
          <Menu.Target>
            <Button
              className={classes.sortBtn}
              variant="outline"
              leftIcon={<IconFilter size={18} />}
              rightIcon={<IconChevronDown size={18} />}
              uppercase
              color="primary"
              radius="md"
            >
              Sort
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>Date</Menu.Item>
            <Menu.Item>Team</Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Button
          className={classes.addBtn}
          leftIcon={<IconPlus size={18} />}
          uppercase
          radius="md"
          sx={{ backgroundColor: theme.colors.ocean[4] }}
          onClick={() => projectDetailsHandler("add")}
        >
          Add
        </Button>
      </Group>

      {/* add project form ------------------------> */}
      {openDrawer && (
         <ProjectForm
          openForm={openDrawer}
          closeDrawer={() => setOpenDrawer(false)}
          formDetails={formType}
        />
      )}

      {/* project cards --------------------------->*/}
      <SimpleGrid
        breakpoints={[
          { minWidth: "sm", cols: 2 },
          { minWidth: "md", cols: 3 },
          { minWidth: 1200, cols: 4 },
        ]}
        my="xl"
      >
        {CARD_DATA.map((card, index) => (
          <Paper
            key={index}
            id={card.id}
            shadow="xs"
            p="md"
            className={classes.projectCard}
          >
            <Group className={classes.projectCardHeader}>
              <Title size="h5" className={classes.projectTitle}>
                {card.title}
              </Title>

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
                    onClick={() => projectDetailsHandler("edit", card.id)}
                  >
                    Edit
                  </Menu.Item>
                  <Menu.Item color="red" icon={<IconTrash size={14} />}>
                    Delete
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
            <Box component={Link} to="project" sx={{ textDecoration: "none" }}>
              <Text className={classes.projectDesc}>{card.desc}</Text>
            </Box>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  );
};
export default ProjectsAll;
