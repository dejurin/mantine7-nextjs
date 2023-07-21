import { Container, NativeSelect } from "@mantine/core";

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
    </Container>
  );
}

export default Test;
