import {
  Container,
  Paper,
  Group,
  Title,
  Text,
  Menu,
  ActionIcon,
  Box,
  Badge,
  SimpleGrid,
  Button,
  Drawer,
  Stack,
  TextInput,
  Textarea,
  Select,
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
import ModuleForm from "./ModuleForm";

const CARD_DATA = [
  {
    id: 11,
    title: "Build Site Map",
    desc: "Create a design system for a hero section in 2 different variants. Create a simple presentation with these components.",
  },
  {
    id: 12,
    title: "Database Design",
    desc: "Create a db system for a simple presentation with the components.",
  },
  {
    id: 13,
    title: "Hardware Specifications",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ex?",
  },
];

const Modules = () => {
  const { classes, theme } = useModuleStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [formType, setFormType] = useState({ type: null, moduleId: null });

  const moduleDetailsHandler = (formState, module = null) => {
    setFormType((prev) => ({ ...prev, type: formState, moduleId: module }));
    setOpenDrawer(true);
  };

  return (
    <Container size="xl">
      <Group sx={{ width: "100%", justifyContent: "flex-end" }}>
        <Button
          className={classes.addBtn}
          leftIcon={<IconPlus size={18} />}
          uppercase
          radius="md"
          sx={{ backgroundColor: theme.colors.ocean[4] }}
          onClick={() => moduleDetailsHandler("add")}
        >
          Add
        </Button>
      </Group>

      {/* add project form ------------------------> */}
      {openDrawer && (
        <ModuleForm
          openForm={openDrawer}
          closeDrawer={() => setOpenDrawer(false)}
          formDetails={formType}
        />
      )}

      {/* module cards --------------------------->*/}
      <SimpleGrid
        spacing="xl"
        breakpoints={[
          { minWidth: "sm", cols: 2 },
          { minWidth: "md", cols: 3 },
        ]}
        my="xl"
      >
        {CARD_DATA.map((card, index) => (
          <Paper key={index} shadow="xs" p="md" className={classes.projectCard}>
            <Group className={classes.projectCardHeader}>
              <Title size="h5" className={classes.projectTitle}>
                {card.title}
              </Title>
              {/* edit & delete buttons */}
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
                    onClick={() => moduleDetailsHandler("edit", card.id)}
                  >
                    Edit
                  </Menu.Item>
                  <Menu.Item color="red" icon={<IconTrash size={14} />}>
                    Delete
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>

            {/* nav link + desc */}
            <Box
              component={Link}
              to="tasks"
              sx={{ textDecoration: "none" }}
              state={{ moduleName: card.title }}
            >
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
