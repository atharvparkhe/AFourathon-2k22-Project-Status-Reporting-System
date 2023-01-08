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
} from "@tabler/icons";
import { Link } from "react-router-dom";

const CARD_DATA = [
  {
    title: "Project Kio",
  },
  {
    title: "Kyota Dashboard",
  },
  {
    title: "Chrome Release",
  },
  {
    title: "Mercedes Dashboard",
  },
  {
    title: "Micro App",
  },
  {
    title: "Micro App",
  },
];

const ProjectsAll = () => {
  const { classes, theme } = useProjectStyles();

  return (
    <Container size="xl">
      <Group sx={{width: "100%", justifyContent: "space-between"}}>
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
          sx={{backgroundColor: theme.colors.ocean[4]}}
        >
          Add
        </Button>
      </Group>
      <SimpleGrid
        breakpoints={[
          { minWidth: "sm", cols: 2 },
          { minWidth: "md", cols: 3 },
          { minWidth: 1200, cols: 4 },
        ]}
        my="xl"
      >
        {CARD_DATA.map((card) => (
          <Paper
            shadow="xs"
            p="md"
            component={Link}
            to=""
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
                  <Menu.Item color="red" icon={<IconTrash size={14} />}>
                    Delete
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
            <Text className={classes.projectDesc}>
              Paper is the most basic ui component Lorem ipsum dolor sit amet.
            </Text>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  );
};
export default ProjectsAll;
