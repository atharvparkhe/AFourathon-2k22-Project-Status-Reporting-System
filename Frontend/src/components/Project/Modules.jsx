import {
  Container,
  Paper,
  Group,
  Title,
  Text,
  Menu,
  ActionIcon,
  Box,
  Chip,
  Badge,
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
  IconEdit,
  IconPlus,
  IconCalendarEvent,
} from "@tabler/icons";
import { Link } from "react-router-dom";
import { useModuleStyles } from "./styles";
import { useState } from "react";

const CARD_DATA = [
  {
    title: "Build Site Map",
    desc: "Create a design system for a hero section in 2 different variants. Create a simple presentation with these components.",
  },
  {
    title: "Database Design",
    desc: "Create a db system for a simple presentation with the components.",
  },
  {
    title: "Hardware Specifications",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ex?",
  },
];

const data = [
  { value: "hr team", label: "HR Team" },
  { value: "ui/ux team", label: "UI/UX Team" },
  { value: "dev 1", label: "Development Team Delta" },
  { value: "dev 2", label: "Development Team Beta" },
  { value: "dev 3", label: "Development Team Alpha" },
];

const Modules = () => {
  const { classes, theme } = useModuleStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Container size="xl">
      <Group sx={{ width: "100%", justifyContent: "flex-end" }}>
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
        title="Module Details"
        padding="xl"
        size="50%"
        position="right"
      >
        <Box component="form" sx={{ padding: "0 2rem" }}>
          <TextInput
            placeholder="Module Name"
            variant="unstyled"
            size="xl"
            required
            className={classes.formProjectName}
          />

          <Stack spacing="2rem" my="lg">
            <Textarea
              placeholder="Short Description"
              label="Short Description"
            />
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
            <MultiSelect
              data={data}
              label="Mailing List"
              placeholder="Pick teams for Mailing List"
              withAsterisk
            />
            <Button
              sx={{
                margin: "1rem 0",
                backgroundColor: theme.colors.ocean[4],
                alignSelf: "center",
              }}
              type="submit"
              onClick={() => setOpenDrawer(false)}
            >
              Save
            </Button>
          </Stack>
        </Box>
      </Drawer>

      {/* module cards --------------------------->*/}
      <SimpleGrid
        spacing="xl"
        breakpoints={[
          { minWidth: "sm", cols: 2 },
          { minWidth: "md", cols: 3 },
        ]}
        my="xl"
      >
        {CARD_DATA.map((card) => (
          <Paper
            // key={index}
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
                    onClick={() => setOpenDrawer(true)}
                  >
                    Edit
                  </Menu.Item>
                  <Menu.Item color="red" icon={<IconTrash size={14} />}>
                    Delete
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
            <Box component={Link} to="tasks" sx={{ textDecoration: "none" }}>
              <Text className={classes.projectDesc}>{card.desc}</Text>
            </Box>
            <Badge radius="sm">Dev Team Delta</Badge>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  );
};
export default Modules;
