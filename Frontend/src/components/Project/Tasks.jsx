import {
  Container,
  Title,
  Button,
  Group,
  SimpleGrid,
  Paper,
  Text,
  Avatar,
  Badge,
  Modal,
  TextInput,
  Box,
  Stack,
  Textarea,
  Select,
} from "@mantine/core";
import { useLocation } from "react-router-dom";
import { IconPlus, IconCalendarEvent, IconCheckbox } from "@tabler/icons";
import { useTaskStyles } from "./styles";
import { useState } from "react";

const TASKS = [
  {
    task: "Home Screen Sections",
    ticket: 1224,
    status: "complete",
    color: "lime",
  },
  { task: "Footer Sections", ticket: 1214, status: "in review", color: "red" },
  { task: "Routes", ticket: 1288, status: "in progress", color: "yellow" },
  { task: "Model Development", ticket: 1112, status: "pto", color: "blue" },
  { task: "Mobile Map", ticket: 1121, status: "complete", color: "lime" },
];

const data = [
  { value: "John Doe", label: "John Doe" },
  { value: "Raj Kumar", label: "Raj Kumar" },
  { value: "Mary Poppings", label: "Mary Poppings" },
  { value: "Jane Eyre", label: "Jane Eyre" },
];

const status = [
  "complete",
  "in progress",
  "in review",
  "pto",
  "to do",
  "blocked",
];

const Tasks = () => {
  const { state } = useLocation();
  const { classes, theme } = useTaskStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const completeCount = TASKS.reduce((acc, val) => {
    if (val.status === "complete") acc = acc + 1;
    return acc;
  }, 0);

  return (
    <Container size="xl">
      {/* header */}
      <Group className={classes.taskHeader}>
        <div>
          <Title order={2}>Module: {state.moduleName}</Title>
          <Group>
            <Group align="center">
              <IconCalendarEvent size={18} />
              <Text className={classes.headerText}>Due: 12 Jan 2023</Text>
            </Group>
            <Group align="center">
              <IconCheckbox size={18} />
              <Text className={classes.headerText}>
                Tasks: {completeCount}/{TASKS.length}
              </Text>
            </Group>
          </Group>
        </div>
        <Button
          className={classes.addBtn}
          leftIcon={<IconPlus size={18} />}
          uppercase
          radius="md"
          onClick={() => setModalOpen(true)}
          sx={{ backgroundColor: theme.colors.ocean[4] }}
        >
          Add
        </Button>
      </Group>

      {/* cards */}
      <SimpleGrid
        spacing="xl"
        breakpoints={[{ minWidth: "sm", cols: 2 }]}
        my="xl"
      >
        {TASKS.map((task, index) => (
          <Paper
            key={index}
            shadow="xs"
            radius="md"
            p="md"
            className={classes.taskCard}
            onClick={() => setModalOpen(true)}
          >
            <Group sx={{ justifyContent: "space-between" }}>
              <Text className={classes.taskName}>{task.task}</Text>
              <Avatar radius="xl" color={task.color} />
            </Group>
            <Group>
              <Badge color="gray" radius="sm" variant="outline">
                #{task.ticket}
              </Badge>
              <Badge radius="sm" color={task.color}>
                {task.status}
              </Badge>
            </Group>
          </Paper>
        ))}
      </SimpleGrid>

      {/* modal */}
      <Modal
        centered
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Task Details"
        size="lg"
        sx={{ zIndex: 10000 }}
      >
        <Box component="form">
          <TextInput
            placeholder="Task Name"
            variant="unstyled"
            size="xl"
            required
            className={classes.formTaskName}
          />
          <Stack spacing="md">
            <TextInput placeholder="Ticket Number" label="Task ID" required />
            <Select
              data={status}
              label="Status"
              placeholder="Status of task.."
              withAsterisk
            />

            <Textarea
              placeholder="Short Description"
              label="Short Description"
            />
            <Textarea placeholder="Activity" label="Add Activity" minRows={1} />
            <Select
              data={data}
              label="Assignee"
              placeholder="Pick a team member.."
              withAsterisk
            />
            <TextInput
              placeholder="Hours Spent"
              label="Hours Spent"
              disabled
              required
            />
            <Group sx={{justifyContent: "center"}}>
              <Button
                my="sm"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setModalOpen(false);
                }}
              >
                SAVE
              </Button>
              <Button
                my="sm"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setModalOpen(false);
                }}
                color="red"
              >
                DELETE
              </Button>
            </Group>
          </Stack>
        </Box>
      </Modal>
    </Container>
  );
};
export default Tasks;
