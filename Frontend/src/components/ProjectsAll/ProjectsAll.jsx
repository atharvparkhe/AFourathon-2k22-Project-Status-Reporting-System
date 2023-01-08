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
  Drawer,
  Stack,
  TextInput,
  Textarea,
  MultiSelect,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import {
  IconDots,
  IconTrash,
  IconFilter,
  IconChevronDown,
  IconPlus,
  IconCalendarEvent,
} from "@tabler/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

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

const data = [
  { value: "hr team", label: "HR Team" },
  { value: "ui/ux team", label: "UI/UX Team" },
  { value: "dev 1", label: "Development Team Delta" },
  { value: "dev 2", label: "Development Team Beta" },
  { value: "dev 3", label: "Development Team Alpha" },
];

const ProjectsAll = () => {
  const { classes, theme } = useProjectStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

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
          onClick={() => setOpenDrawer(true)}
        >
          Add
        </Button>
      </Group>

      {/* add project form ------------------------> */}
      <Drawer
        classNames={{
          root: classes.projectDrawer,
          drawer: classes.innerDrawer,
        }}
        opened={openDrawer}
        onClose={() => setOpenDrawer(false)}
        title="Add Project"
        padding="xl"
        size="50%"
        position="right"
      >
        <Box component="form" sx={{ padding: "0 2rem" }}>
          <TextInput
            placeholder="Project Name"
            variant="unstyled"
            size="xl"
            required
            className={classes.formProjectName}
          />

          <Stack spacing="1.5rem">
            <DatePicker
              placeholder="Start date"
              label="Start date"
              rightSection={<IconCalendarEvent size={18} />}
              withAsterisk
            />
            <DatePicker
              placeholder="End date"
              label="End date"
              rightSection={<IconCalendarEvent size={18} />}
              withAsterisk
            />
            <TextInput
              placeholder="John Doe"
              label="Manager name"
              withAsterisk
            />
            <TextInput
              placeholder="John Doe"
              label="Manager email"
              type="email"
              withAsterisk
            />
            <Textarea
              placeholder="Short Description"
              label="Short Description"
            />
            <MultiSelect
              data={data}
              label="Mailing List"
              placeholder="Pick teams for Mailing List"
              withAsterisk
            />
          </Stack>
          <Button
            sx={{ margin: "1rem 0", backgroundColor: theme.colors.ocean[4] }}
            type="submit"
            onClick={() => setOpenDrawer(false)}
          >
            Save
          </Button>
        </Box>
      </Drawer>

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
            shadow="xs"
            p="md"
            component={Link}
            to="project"
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
