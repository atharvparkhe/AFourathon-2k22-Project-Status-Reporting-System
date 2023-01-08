import {
  Box,
  Stack,
  TextInput,
  MultiSelect,
  Button,
  Textarea,
  Group,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { IconCalendarEvent } from "@tabler/icons";
import { useProjectAboutStyles } from "./styles";

const data = [
  { value: "hr team", label: "HR Team" },
  { value: "ui/ux team", label: "UI/UX Team" },
  { value: "dev 1", label: "Development Team Delta" },
  { value: "dev 2", label: "Development Team Beta" },
  { value: "dev 3", label: "Development Team Alpha" },
];

const About = () => {
  const { classes, theme } = useProjectAboutStyles();

  return (
    <>
      <Box component="form" sx={{ padding: "0 2rem" }}>
        <TextInput
          placeholder="Project Name"
          variant="unstyled"
          size="xl"
          required
          className={classes.formProjectName}
        />
        <Group sx={{width: "100%", alignItems: "flex-start"}} className={classes.formGroup}>
          <Stack spacing="2rem" className={classes.formStack}>
            <DatePicker
              placeholder="Start date"
              label="Start date"
              rightSection={<IconCalendarEvent size={18} />}
              withAsterisk
              size="md"
            />
            <DatePicker
              placeholder="End date"
              label="End date"
              rightSection={<IconCalendarEvent size={18} />}
              withAsterisk
              size="md"
            />
            <TextInput
              placeholder="John Doe"
              label="Manager name"
              withAsterisk
              size="md"
            />
            <TextInput
              placeholder="John Doe"
              label="Manager email"
              type="email"
              withAsterisk
              size="md"
            />
            <MultiSelect
              data={data}
              label="Mailing List"
              placeholder="Pick teams for Mailing List"
              withAsterisk
              size="md"
            />
          </Stack>
          <Stack className={classes.formStack} spacing="2rem">
            <Textarea
              placeholder="Short Description"
              label="Short Description"
              autosize
              size="md"
              minRows={5}
            />
            <Button
              sx={{ backgroundColor: theme.colors.ocean[4], alignSelf: "flex-end" }}
              type="submit"
            >
              Save
            </Button>
          </Stack>
        </Group>
      </Box>
    </>
  );
};
export default About;
