import {
  Affix,
  Group,
  Container,
  Title,
  ActionIcon,
  Button,
  Transition,
} from "@mantine/core";

import { useWindowScroll } from "@mantine/hooks";
import { ArrowUp, Plus } from "tabler-icons-react";

export default function PageTitle(props: { filter?: any; setFilter?: any; title:string; }) {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <Container size="lg">
      <Group position="apart" my="lg">
          <Title order={1}>{props.title}</Title>
          <Button leftIcon={<Plus size={18} />}>Yeni Ekle</Button>
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
