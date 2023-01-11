import {
  Box,
  Stack,
  TextInput,
  Textarea,
  MultiSelect,
  Button,
  Drawer,
  LoadingOverlay,
} from "@mantine/core";
import { useProjectStyles } from "./styles";
import dayjs from "dayjs";
import { IconCalendarEvent } from "@tabler/icons";
import { DatePicker } from "@mantine/dates";
import { useEffect } from "react";
import { useForm, isNotEmpty } from "@mantine/form";
import { useState } from "react";

// input type='select' options
const data = [
  { value: "hr team", label: "HR Team" },
  { value: "ui/ux team", label: "UI/UX Team" },
  { value: "dev 1", label: "Development Team Delta" },
  { value: "dev 2", label: "Development Team Beta" },
  { value: "dev 3", label: "Development Team Alpha" },
];

const ProjectForm = ({ openForm, closeDrawer, formDetails }) => {
  const { classes, theme, cx } = useProjectStyles();
  const [loading, setLoading] = useState(false);

  // form validation and initial values
  const form = useForm({
    initialValues: {
      projectName: "",
      startDate: new Date(),
      endDate: new Date(),
      managerName: "",
      managerEmail: "",
      desc: "",
      mailingList: "",
    },

    validate: {
      projectName: isNotEmpty(),
      managerEmail: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
      managerName: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      mailingList: (value) => (value === "" ? "Select atleast one team" : null),
    },
  });

  // if form is edit mode, fetch initial values -------->
  useEffect(() => {
    // setLoading(true);

    if (formDetails.projectId !== null && formDetails.type === "edit")
      console.log("form edit type");
    // fetch form data
    //   set default values
    /**
     * form.setValues({
        projectName: "",
        startDate: '',
        endDate: '',
        managerName: "",
        managerEmail: "",
        desc: "",
        mailingList: "",
    })
     */
  }, []);

  const handleSubmit = (values) => {
    console.log(values);
    // post data
  };

  return (
    <Drawer
      classNames={{
        root: classes.projectDrawer,
        drawer: classes.innerDrawer,
      }}
      opened={openForm}
      onClose={closeDrawer}
      title="Add Project"
      padding="xl"
      size="50%"
      position="right"
    >
      {loading ? (
        <LoadingOverlay visible={true} overlayBlur={2} />
      ) : (

        // form starts ==========================>
        <Box
          component="form"
          sx={{ padding: "0 2rem" }}
          onSubmit={form.onSubmit((values) => handleSubmit(values))}
        >
          <TextInput
            placeholder="Project Name"
            variant="unstyled"
            size="xl"
            withAsterisk
            className={classes.formProjectName}
            {...form.getInputProps("projectName")}
          />

          <Stack spacing="1.5rem">
            <DatePicker
              placeholder="Start date"
              label="Start date"
              rightSection={<IconCalendarEvent size={18} />}
              withAsterisk
              minDate={dayjs(new Date())
                .startOf("month")
                .add(5, "days")
                .toDate()}
              {...form.getInputProps("startDate")}
            />
            {/* dates */}
            <DatePicker
              placeholder="End date"
              label="End date"
              rightSection={<IconCalendarEvent size={18} />}
              withAsterisk
              minDate={dayjs(new Date())
                .startOf("month")
                .add(5, "days")
                .toDate()}
              {...form.getInputProps("endDate")}
            />
            <TextInput
              placeholder="John Doe"
              label="Manager name"
              withAsterisk
              {...form.getInputProps("managerName")}
            />
            {/* manager email */}
            <TextInput
              placeholder="John Doe"
              label="Manager email"
              type="email"
              withAsterisk
              {...form.getInputProps("managerEmail")}
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
              {...form.getInputProps("mailingList")}
            />
          </Stack>
          <Button
            sx={{ margin: "1rem 0", backgroundColor: theme.colors.ocean[4] }}
            type="submit"
          >
            Save
          </Button>
        </Box>
        // form ends ==========================>
      )}
    </Drawer>
  );
};
export default ProjectForm;
