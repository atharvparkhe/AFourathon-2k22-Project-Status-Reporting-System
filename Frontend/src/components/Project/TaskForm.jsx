import {
  Button,
  Group,
  Modal,
  TextInput,
  Box,
  Stack,
  Textarea,
  Select,
} from "@mantine/core";
import { useTaskStyles } from "./styles";
import { useForm, isNotEmpty } from "@mantine/form";
import { useState, useEffect } from "react";

const data = [
  { value: "John Doe", label: "John Doe" },
  { value: "Raj Kumar", label: "Raj Kumar" },
  { value: "Mary Poppings", label: "Mary Poppings" },
  { value: "Jane Eyre", label: "Jane Eyre" },
];

// PROJECT STATUS VALUES ==============================>
const status = [
  "complete",
  "in progress",
  "in review",
  "pto",
  "to do",
  "blocked",
];

// COMPONENT =========================================>
const TaskForm = ({ isOpen, closeModal, formDetails }) => {
  const { classes, theme } = useTaskStyles();

  const form = useForm({
    initialValues: {
      taskName: "",
      status: status[4],
      desc: "",
      assignee: "",
      hoursSpent: 0,
    },

    validate: {
      taskName: isNotEmpty(),
      hoursSpent: (value) =>
        value < 0 ? "Hours spent cannot be negative" : null,
      assignee: isNotEmpty("Please choose a team member."),
    },
  });

  // if form is edit mode, fetch initial values -------->
  useEffect(() => {
    // setLoading(true);

    if (formDetails.ticket !== null && formDetails.type === "edit")
      console.log("form edit type");
    // fetch form data
    //   set default values
    /**
     * form.setValues({
        initialValues: {
            status: status[4],
            desc: "",
            assignee: "",
            hoursSpent: 0,
        },
    })
     */
  }, []);

  const handleSubmit = (values) => {
    console.log(values);
    closeModal();
  };

  return (
    <Modal
      centered
      opened={isOpen}
      onClose={closeModal}
      title="Task Details"
      size="lg"
      sx={{ zIndex: 10000 }}
    >
      <Box
        component="form"
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
      >
        <TextInput
          placeholder="Task Name"
          variant="unstyled"
          size="xl"
          className={classes.formTaskName}
          {...form.getInputProps("taskName")}
        />
        <Stack spacing="md">
          {/* status */}
          <Select
            data={status}
            label="Status"
            placeholder="Status of task.."
            withAsterisk
            {...form.getInputProps("status")}
          />
          {/* desc */}
          <Textarea
            placeholder="Short Description"
            label="Short Description"
            {...form.getInputProps("desc")}
          />
          {/* <Textarea placeholder="Activity" label="Add Activity" minRows={1} /> */}

          {/* team member */}
          <Select
            data={data}
            label="Assignee"
            placeholder="Pick a team member.."
            withAsterisk
            {...form.getInputProps("assignee")}
          />

          {/* hours spent */}
          <TextInput
            placeholder="Hours Spent"
            label="Hours Spent"
            withAsterisk
            type="number"
            {...form.getInputProps("hoursSpent")}
          />

          {/* submit buttons */}
          <Group sx={{ justifyContent: "center" }}>
            <Button my="sm" type="submit">
              SAVE
            </Button>
            <Button my="sm" type="button" color="red">
              DELETE
            </Button>
          </Group>
        </Stack>
      </Box>
    </Modal>
  );
};
export default TaskForm;
