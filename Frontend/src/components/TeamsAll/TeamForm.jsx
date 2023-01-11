import {
  Box,
  Stack,
  TextInput,
  Textarea,
  Button,
  Drawer,
  LoadingOverlay,
} from "@mantine/core";
import { useTeamStyles } from "./styles";
import dayjs from "dayjs";
import { IconCalendarEvent } from "@tabler/icons";
import { DatePicker } from "@mantine/dates";
import { useEffect } from "react";
import { useForm, isNotEmpty } from "@mantine/form";
import { useState } from "react";

const TeamForm = ({ openForm, closeDrawer, formDetails }) => {
  const { classes, theme, cx } = useTeamStyles();
  const [loading, setLoading] = useState(false);

  // form validation and initial values
  const form = useForm({
    initialValues: {
      teamName: "",
      startDate: new Date(),
      endDate: new Date(),
      leadName: "",
      leadEmail: "",
      desc: "",
    },

    validate: {
      teamName: isNotEmpty(),
      leadEmail: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      leadName: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
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
          teamName: "",
          startDate: '',
          endDate: '',
          leadName: "",
          leadEmail: "",
          desc: "",
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
        root: classes.teamDrawer,
        drawer: classes.innerDrawer,
      }}
      opened={openForm}
      onClose={closeDrawer}
      title="Add Team Details"
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
            placeholder="Team Name"
            variant="unstyled"
            size="xl"
            withAsterisk
            className={classes.formTeamName}
            {...form.getInputProps("teamName")}
          />

          <Stack spacing="1.5rem">
            <Textarea
              placeholder="Short Description"
              label="Short Description"
            />
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
              label="Team Lead name"
              withAsterisk
              {...form.getInputProps("leadName")}
            />
            {/* manager email */}
            <TextInput
              placeholder="John Doe"
              label="Team Lead email"
              type="email"
              withAsterisk
              {...form.getInputProps("leadEmail")}
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
export default TeamForm;
