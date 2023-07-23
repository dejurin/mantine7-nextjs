import { Container, SimpleGrid } from "@mantine/core";

export default function SimpleGridExample() {
  return (
    <Container>
      <SimpleGrid cols={6}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </SimpleGrid>
    </Container>
  );
}
