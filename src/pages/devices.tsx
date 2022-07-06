import { useEffect, useState } from "react";
import { useMantineTheme, Button, Group, ActionIcon } from "@mantine/core";
import { cutString } from "../helpers/cutString";
import { formatDate } from "../helpers/formatDate";
import PageTitle from "../components/layouts/pageTitle";
import DataTable from "../components/dataTable";
import { Edit, Qrcode } from "tabler-icons-react";
import { getDevices, getDeviceSearch } from "../services/deviceService";

interface DataProps {
  name: string;
  createdAt: string;
  id: number;
  description: string;
  deviceId: string;
}

export default function Devices() {
  const theme = useMantineTheme();

  const [loading, setloading] = useState(true);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState<DataProps[]>([]);
  const [activePage, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const limit = 20;

  useEffect(() => {
    getDevices(activePage, limit).then((response) => {
      setData(response.items);
      setPageCount(Math.ceil(response.count / limit));
      setloading(false);
    });
  }, [activePage]);

  const searchDevice = () => {
    setloading(true);
    getDeviceSearch(
      filter.toString().toLocaleLowerCase("tr"),
      activePage,
      limit
    ).then((response) => {
      setData(response.items);
      setPageCount(Math.ceil(response.count / limit));
      setloading(false);
    });
  };

  const rows = data.map((row) => (
    <tr key={row.id}>
      <td>{row.id}</td>
      <td>{row.name}</td>
      <td>{formatDate(row.createdAt)}</td>
      <td>{cutString(row.description, 50)}</td>
      <td align="right">
        <Group spacing={6} position="right">
          <ActionIcon variant="default">
            <Edit size={18} color={theme.colors.blue[6]} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  const columns = () => (
    <tr>
      <th style={{ width: 50 }}>ID</th>
      <th>Cihaz Adı</th>
      <th style={{ width: 100 }}>Kayıt Tarihi</th>
      <th style={{ width: 400 }}>Açıklama</th>
      <th style={{ width: 30, textAlign: "right" }}>Eylemler</th>
    </tr>
  );

  return (
    <>
      <PageTitle title="Cihazlar" />
      <DataTable
        rows={rows}
        columns={columns}
        loading={loading}
        activePage={activePage}
        totalPage={pageCount}
        onPageChange={setPage}
        searchClick={searchDevice}
        searchValueProps={setFilter}
        searchPlaceholder={"Cihaz adında arama yapın..."}
        actionBar={
          <Button
            leftIcon={<Qrcode size={18} color={theme.colors.blue[6]} />}
            variant="default"
            color="gray"
            size="xs"
          >
            Barkod Okuma
          </Button>
        }
      />
    </>
  );
}
