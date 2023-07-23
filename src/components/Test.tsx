import { Container, NativeSelect, SimpleGrid } from "@mantine/core";

function Test() {
  return (
    <Container>
      <div style={{ width: 200 }}>
        <NativeSelect
          label="Input label"
          description="Input description"
          data={["React", "Angular", "Vue"]}
        />
        <NativeSelect
          label="Input label"
          description="Input description"
          data={["React", "Angular", "Vue"]}
        />
        <NativeSelect
          label="Input label"
          description="Input description"
          data={["React", "Angular", "Vue"]}
        />
      </div>
      <SimpleGrid cols={3}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </SimpleGrid>
    </Container>
  );
}

export default Test;
