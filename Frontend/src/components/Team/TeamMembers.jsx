import {
  Container,
  Group,
  Title,
  Button,
  SimpleGrid,
  Paper,
  Text,
  Avatar,
  Stack,
} from "@mantine/core";
import { useMemberStyles } from "./styles";
import { useState } from "react";
import { IconPlus } from "@tabler/icons";
import MemberForm from "./MemberForm";

const MEMBERS = [
  { id: 11, userName: "john doe", userMail: "email@email.com" },
  { id: 12, userName: "john poe", userMail: "email@email.com" },
  { id: 13, userName: "gabbar singh", userMail: "email@email.com" },
  { id: 14, userName: "chudail", userMail: "email@email.com" },
];

const TeamMembers = () => {
  const { classes, theme } = useMemberStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [formType, setFormType] = useState({ type: null, memberId: null });

  const memberClickHandler = (formType, member = null) => {
    setFormType((prev) => ({ ...prev, type: formType, memberId: member }));
    setModalOpen(true);
  };

  return (
    <Container size="xl">
      <Group sx={{ justifyContent: "space-between" }}>
        <Title order={3} className={classes.teamTitle}>
          Team Name
        </Title>
        <Button
          leftIcon={<IconPlus size={18} />}
          uppercase
          radius="md"
          sx={{ backgroundColor: theme.colors.ocean[4] }}
          onClick={() => memberClickHandler("add")}
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
        {MEMBERS.map((member) => (
          <Paper
            //   id={task.ticket}
            shadow="xs"
            radius="md"
            p="lg"
            className={classes.memberCard}
            onClick={() => memberClickHandler("edit", member.id)}
          >
            <Group sx={{ justifyContent: "flex-start", gap: "20px" }}>
              <Avatar radius="xl" color={theme.colors.yellow[5]} />
              <Stack spacing={0}>
                <Text className={classes.memberName}>{member.userName}</Text>
                <Text className={classes.memberEmail}>{member.userMail}</Text>
              </Stack>
            </Group>
          </Paper>
        ))}
      </SimpleGrid>

      {modalOpen && (
        <MemberForm
          isOpen={modalOpen}
          closeModal={() => setModalOpen(false)}
          formDetails={formType}
        />
      )}
    </Container>
  );
};
export default TeamMembers;
