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
} from "@mantine/core";
import { useLocation } from "react-router-dom";
import { IconPlus, IconCalendarEvent, IconCheckbox } from "@tabler/icons";
import { useTaskStyles } from "./styles";
import { useState } from "react";
import TaskForm from "./TaskForm";

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

// COMPONENT ==================================================>
const Tasks = () => {
  const { state } = useLocation();
  const { classes, theme } = useTaskStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [formType, setFormType] = useState({ type: null, ticket: null });

  const completeCount = TASKS.reduce((acc, val) => {
    if (val.status === "complete") acc = acc + 1;
    return acc;
  }, 0);

  const taskClickHandler = (formState, ticketId = null) => {
    setFormType((prev) => {
      return { ...prev, type: formState, ticket: ticketId };
    });
    setModalOpen(true);
  };

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
          onClick={() => taskClickHandler("add")}
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
            id={task.ticket}
            key={index}
            shadow="xs"
            radius="md"
            p="md"
            className={classes.taskCard}
            onClick={() => taskClickHandler("edit", task.ticket)}
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
      {modalOpen && <TaskForm isOpen={modalOpen} closeModal={() => setModalOpen(false)} formDetails={formType} />}
    </Container>
  );
};
export default Tasks;
