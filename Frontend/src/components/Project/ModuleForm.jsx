import {
  Box,
  Stack,
  TextInput,
  Textarea,
  Select,
  Button,
  Drawer,
  LoadingOverlay,
} from "@mantine/core";
import { useEffect } from "react";
import { useForm, isNotEmpty } from "@mantine/form";
import { useState } from "react";
import { useModuleStyles } from "./styles";
// input type='select' options
const data = [
  { value: "hr team", label: "HR Team" },
  { value: "ui/ux team", label: "UI/UX Team" },
  { value: "dev 1", label: "Development Team Delta" },
  { value: "dev 2", label: "Development Team Beta" },
  { value: "dev 3", label: "Development Team Alpha" },
];

const ModuleForm = ({ openForm, closeDrawer, formDetails }) => {
  const { classes, theme, cx } = useModuleStyles();
  const [loading, setLoading] = useState(false);

  // form validation and initial values
  const form = useForm({
    initialValues: {
      projectName: "",
      desc: "",
      team: "",
    },

    validate: {
      projectName: isNotEmpty(),
      team: (value) => (value === "" ? "Select atleast one team" : null),
    },
  });

  // if form is edit mode, fetch initial values -------->
  useEffect(() => {
    // setLoading(true);

    if (formDetails.moduleId !== null && formDetails.type === "edit")
      console.log("form edit type");
    // fetch form data
    //   set default values
    /**
       * form.setValues({
            projectName: "",
            desc: "",
            team: "",
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
            placeholder="Module Name"
            variant="unstyled"
            size="xl"
            className={classes.formProjectName}
            {...form.getInputProps("projectName")}
          />

          <Stack spacing="2rem" my="lg">
            <Textarea
              placeholder="Short Description"
              label="Short Description"
              {...form.getInputProps("desc")}
            />
            <Select
              data={data}
              label="Team"
              placeholder="Pick a team..."
              withAsterisk
              {...form.getInputProps("team")}
            />
            <Button
              sx={{
                margin: "1rem 0",
                backgroundColor: theme.colors.ocean[4],
                alignSelf: "center",
              }}
              type="submit"
            >
              Save
            </Button>
          </Stack>
        </Box>
        // form ends ==========================>
      )}
    </Drawer>
  );
};
export default ModuleForm;
