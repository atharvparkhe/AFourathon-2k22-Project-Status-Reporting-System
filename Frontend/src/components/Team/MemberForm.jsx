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
import { useMemberStyles } from "./styles";
import { useForm, isNotEmpty, isEmail } from "@mantine/form";
import { useState, useEffect } from "react";

// COMPONENT =========================================>
const MemberForm = ({ isOpen, closeModal, formDetails }) => {
  const { classes, theme } = useMemberStyles();

  const form = useForm({
    initialValues: {
      memberName: "",
      memberEmail: "",
      contact: "",
    },

    validate: {
      memberName: isNotEmpty(),
      memberEmail: isEmail("Please enter valid email ID."),
    },
  });

  // if form is edit mode, fetch initial values -------->
  useEffect(() => {
    // setLoading(true);

    if (formDetails.memberID !== null && formDetails.type === "edit")
      console.log("form edit type");
    // fetch form data
    //   set default values
    /**
       * form.setValues({
          initialValues: {
              memberName: "",
                memberEmail: "",
                contact: "",
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
          placeholder="Member Name"
          variant="unstyled"
          size="xl"
          className={classes.formMemberName}
          {...form.getInputProps("memberName")}
        />
        <Stack spacing="md">
          <TextInput
            placeholder="John Doe"
            label="Team Lead email"
            type="email"
            withAsterisk
            {...form.getInputProps("memberEmail")}
          />

          <TextInput
            placeholder="+91 ..."
            label="Contact Number"
            type="tel"
            {...form.getInputProps("contact")}
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
export default MemberForm;
