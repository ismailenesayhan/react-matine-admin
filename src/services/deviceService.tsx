const axios = require("axios");

// export async function getDevicePagination(
//   page: number,
//   limit: number
// ): Promise<any> {
//   return fetch(
//     `https://62bd7249bac21839b60367bd.mockapi.io/devices?page=${page}&limit=${limit}`
//   )
//     .then((response) => response.json())
//     .then((data: any) => {
//       return data;
//     })
//     .catch((err: any) => {
//       console.log(err);
//     });
// }

export async function getDevices(page: number, limit: number): Promise<any> {
  return axios
    .get(
      `https://62bd7249bac21839b60367bd.mockapi.io/devices?page=${page}&limit=${limit}`
    )
    .then((data: any) => {
      return data.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
}

export async function getDeviceSearch(text: string, page: number, limit: number): Promise<any> {
  return axios
    .get(
      `https://62bd7249bac21839b60367bd.mockapi.io/devices?filter=${text}&page=${page}&limit=${limit}`
    )
    .then((data: any) => {
      return data.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
}
