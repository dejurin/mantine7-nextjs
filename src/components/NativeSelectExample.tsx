import { Container, NativeSelect, SimpleGrid } from "@mantine/core";

export default  function NativeSelectExample() {
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
    </Container>
  );
}
