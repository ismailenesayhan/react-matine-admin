import {
  Affix,
  Group,
  Container,
  Title,
  ActionIcon,
  Button,
  TextInput,
  createStyles,
  Transition,
} from "@mantine/core";

import { useWindowScroll } from "@mantine/hooks";
import { ArrowUp, Plus, Search } from "tabler-icons-react";

export default function PageTitle(props: { filter: any; setFilter: any; title:string; }) {
  const [scroll, scrollTo] = useWindowScroll();
  const { classes } = useStyles();
  return (
    <Container size="lg">
      <Group position="apart" my="lg">
        <div>
          <Title order={1}>{props.title}</Title>
        </div>
        <Group position="apart">
          <TextInput
            value={props.filter}
            onChange={props.setFilter}
            className={classes.searchBox}
            placeholder="Arama Yapın"
            rightSectionWidth={40}
            rightSection={
              <ActionIcon
                className={classes.searchCode}
                color="gray"
                variant="light"
              >
                <Search size={18} />
              </ActionIcon>
            }
          />
          <Button leftIcon={<Plus size={18} />}>Yeni Ekle</Button>
        </Group>
      </Group>
      <Affix position={{ bottom: 50, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 100} timingFunction="ease-in-out">
          {(transitionStyles) => (
            <ActionIcon
              size="xl"
              variant="filled"
              onClick={() => scrollTo({ y: 0 })}
              style={transitionStyles}
              color="gray"
            >
              <ArrowUp size={18} />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </Container>
  );
}

const useStyles = createStyles((theme) => ({
  searchBox: {
    [theme.fn.smallerThan("xs")]: {
      width: "50%",
    },
    input: {
      border: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.gray[7]
          : theme.colors.gray[2]
      }`,
    },
  },
  searchCode: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));
