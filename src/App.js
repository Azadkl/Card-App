import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import {
  Button,
  Checkbox,
  Grid,
  Input,
  Textarea,
  Container,
  Stack,
} from "@mantine/core";
import "@mantine/core/styles.css";

function App() {
  let arr = [
    {
      id: 1,
      title: "Dağ 1",
      p: "Açıklama 1",
    },
    {
      id: 2,
      title: "Dağ 2",
      p: "Açıklama 2",
    },
    {
      id: 3,
      title: "Dağ 3",
      p: "Açıklama 3",
    },
  ];



  const [title, setTitle] = useState("");
  const [paragraf, setParagraf] = useState("");
  const [list, setList] = useState(arr);
  const [val, setVal] = useState([]);
  const click = () => {
    console.log("Butona tıklandı");
    setTitle("");
    setParagraf("");

    setList([
      ...list,
      {
        id: 6,
        title: title,
        p: paragraf,
      },
    ]);
  };
  return (
    <Container>
      <h1>Kart Oluşturma Programı</h1>
      <Stack>
        <Input.Wrapper
          label="Başlık"
          //description="Input description"
          //error="Input error"
        >
          <Input
            placeholder="Başlık Yazınız"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Input.Wrapper>

        <Textarea
          label="Paragraf"
          // description="Input description"
          placeholder="Paragraf yazınız"
          value={paragraf}
          onChange={(e) => setParagraf(e.target.value)}
        />
        <Button color="blue" onClick={click}>
          Kart Oluştur
        </Button>
      </Stack>
      <h2>Kartlar</h2>

      <Grid>
        {list.map(({title, p },id) => (
          <Grid.Col key={id} span={4}>
            <Card
              index={id}
              title={title}
              p={p}
              val={val}
              click={() => {
                let copyList = [...list];
                copyList.splice(id, 1);
                setList(copyList);
                console.log("Dışardan tıklandı");
              }}
            ></Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
