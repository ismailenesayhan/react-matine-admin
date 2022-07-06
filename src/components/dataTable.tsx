import { useState, useEffect } from "react";

import {
  ActionIcon,
  useMantineTheme,
  TextInput,
  createStyles,
  Container,
  Group,
  ScrollArea,
  Table,
  Card,
  Center,
  Text,
  Pagination,
  Grid,
  Skeleton,
} from "@mantine/core";
import { Bookmark, DatabaseOff, Search, X } from "tabler-icons-react";

interface DataTableProps {
  rows?: any;
  columns?: any;
  loading?: boolean;
  searchValueProps?: any;
  setFilter?: any;
  searchPlaceholder?: string;
  searchClick?: any;
  actionBar?: any;
  activePage: number;
  onPageChange: any;
  totalPage: number;
}

function DataTable(props: DataTableProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [searchValue, setSearchValue] = useState("");

  const searchKeyDown = (e: any) => {
    if (e.key === "Enter") {
      props.searchClick();
    }
  };

  const searchClearValue = () => {
    setSearchValue("");
    props.searchClick();
  };

  useEffect(() => {
    props.searchValueProps(searchValue);
  }, [props, searchValue]);

  return (
    <>
      <Container size="lg">
        <Group position="apart" mb="xs">
          <TextInput
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchValue(e.target.value)
            }
            onKeyDown={searchKeyDown}
            className={classes.searchBox}
            placeholder={
              props.searchPlaceholder
                ? props.searchPlaceholder
                : "Arama Yapın..."
            }
            rightSectionWidth={80}
            rightSection={
              <Group
                position="right"
                spacing={5}
                direction="row"
                mr="xs"
                sx={{ width: 80 }}
              >
                {searchValue && searchValue.length > 0 && (
                  <ActionIcon
                    color="gray"
                    variant="transparent"
                    onClick={searchClearValue}
                  >
                    <X size={18} />
                  </ActionIcon>
                )}

                <ActionIcon
                  className={classes.searchButton}
                  color="gray"
                  variant="light"
                  onClick={props.searchClick}
                >
                  <Search size={18} />
                </ActionIcon>
              </Group>
            }
          />
          <Group spacing={6}>
            {props.actionBar}
            <ActionIcon variant="default" size="lg">
              <Bookmark size={18} color={theme.colors.blue[6]} />
            </ActionIcon>
          </Group>
        </Group>

        <ScrollArea>
          <Table
            sx={{ minWidth: 800 }}
            className={classes.table}
            verticalSpacing="xs"
            highlightOnHover
          >
            {
              <thead className={classes.table}>
                <props.columns />
              </thead>
            }
            {!props.loading && <tbody>{props.rows}</tbody>}
          </Table>

          {props.loading && (
            <Grid mt={0}>
              {[...Array(18)].map((x, i) => (
                <Grid.Col py={2} key={i}>
                  <Skeleton  height={44} />
                </Grid.Col>
              ))}
            </Grid>
          )}

          {/* No Data Component */}
          {props.rows && props.rows.length === 0 && (
            <Card shadow="sm" py={60}>
              <Center mb="md">
                <DatabaseOff size={30} color={theme.colors.gray[6]} />
              </Center>

              <Text weight={500} size="xl" align="center">
                Veri Bulunamadı!
              </Text>

              <Text size="sm" align="center">
                Lütfen arama kriterlerinizi güncelleyin veya sistem yöneticisi
                ile iletişime geçin.
              </Text>
            </Card>
          )}

          {props.rows && props.rows.length > 0 && (
            <Center my="lg">
              <Pagination
                page={props.activePage}
                onChange={props.onPageChange}
                total={props.totalPage}
              />
            </Center>
          )}
        </ScrollArea>
      </Container>
    </>
  );
}
export default DataTable;

const useStyles = createStyles((theme) => ({
  table: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  searchBox: {
    width: "33%",
    [theme.fn.smallerThan("md")]: {
      width: "50%",
    },
    [theme.fn.smallerThan("sm")]: {
      width: "50%",
    },
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
    },
    input: {
      border: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.gray[7]
          : theme.colors.gray[2]
      }`,
    },
  },
  searchButton: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },
}));
