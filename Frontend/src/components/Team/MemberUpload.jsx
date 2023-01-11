import { useState } from "react";
import {
  Container,
  FileButton,
  Button,
  Group,
  Text,
  Title,
} from "@mantine/core";

const MemberUpload = () => {
  const [file, setFile] = useState(null);
  console.log(file);
  return (
    <Container size="xl" my="md" sx={{ height: "100%" }}>
      <Title order={3}>Upload Member Details</Title>
      <Text my="md">
        Please upload an excel sheet containing the Member's Name and Email ID
      </Text>
      <Container
        size="lg"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
          height: "80%",
        }}
      >
        <Group position="center">
          <FileButton
            onChange={setFile}
            accept=".xls, .xlsx, .xltx, .xlsb"
            color="ocean"
          >
            {(props) => <Button {...props}>Upload Data Sheet</Button>}
          </FileButton>
        </Group>
        {file && (
          <Text size="sm" align="center" mt="sm">
            Picked file: {file.name}
          </Text>
        )}
      </Container>
    </Container>
  );
};
export default MemberUpload;
