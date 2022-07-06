import {
  Avatar,
  Group,
  Text,
  Container,
  Grid,
  Card,
  ActionIcon,
  useMantineTheme,
  Skeleton,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { cutString } from "../helpers/cutString";
import { formatDate } from "../helpers/formatDate";
import { Heart, Bookmark, Share } from "tabler-icons-react";
import PageTitle from "../components/layouts/pageTitle";

interface DataProps {
  name: string;
  createdAt: string;
  id: number;
  title: string;
  avatar: string;
}

export default function Users() {
  const [loading, setloading] = useState(true);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState<DataProps[]>([]);
  const theme = useMantineTheme();

  useEffect(() => {
    fetch("https://62bd7249bac21839b60367bd.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setloading(false));
    //return () => alert("kanal kapandı");
  }, []);

  return (
    <>
      <PageTitle title="Kullanıcılar" />
      <Container size="lg">
        <Grid>
          {loading &&
            [...Array(18)].map((x, i) => (
              <Grid.Col xs={12} md={6} lg={4} key={i}>
                <Skeleton height={130} />
              </Grid.Col>
            ))}

          {data
            .filter(
              (f) =>
                f.name
                  .toLocaleLowerCase("tr")
                  .toString()
                  .includes(filter.toString().toLocaleLowerCase("tr-TR")) ||
                filter === ""
            )
            .map((item) => (
              <Grid.Col xs={12} md={6} lg={4} key={item.id}>
                <Card withBorder p="lg" radius="md">
                  <Group>
                    <Avatar src={item.avatar} radius="sm" />
                    <div>
                      <Text weight={500}>{cutString(item.name, 20)}</Text>
                      <Text size="xs" color="dimmed">
                        {cutString(item.title, 28)}
                      </Text>
                    </div>
                  </Group>
                  <Card.Section p="lg" pt="xs">
                    <Group position="apart">
                      <Text size="xs" color="dimmed">
                        Kayıt Tarihi: {formatDate(item.createdAt)}
                      </Text>
                      <Group spacing={0}>
                        <ActionIcon>
                          <Heart size={18} color={theme.colors.red[6]} />
                        </ActionIcon>
                        <ActionIcon>
                          <Bookmark size={18} color={theme.colors.yellow[6]} />
                        </ActionIcon>
                        <ActionIcon>
                          <Share size={16} color={theme.colors.blue[6]} />
                        </ActionIcon>
                      </Group>
                    </Group>
                  </Card.Section>
                </Card>
              </Grid.Col>
            ))}
        </Grid>
      </Container>
    </>
  );
}
