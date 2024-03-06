import "./Card.css";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  CloseButton,
} from "@mantine/core";

function CardComponent(props) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{props.title}</Text>
        <CloseButton onClick={props.click} />
      </Group>

      <Text size="sm" c="dimmed">
        {props.p}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}

export default CardComponent;
