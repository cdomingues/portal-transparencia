export const data = [
  { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
  { name: "Zerya Betül", surname: "Baran", birthYear: 2017, birthCity: 34 },
  { name: "Vinicius", surname: "Branco", birthYear: 1999, birthCity: 34 },
  { name: "Carol", surname: "Seabra", birthYear: 2017, birthCity: 34 },
  { name: "Lucas", surname: "Santos", birthYear: 2017, birthCity: 34 },
  { name: "Jefferson", surname: "Amaral", birthYear: 2017, birthCity: 34 },
  { name: "Suzane", surname: "Aguiar", birthYear: 2017, birthCity: 34 },
  { name: "Pedro", surname: "Soares", birthYear: 2017, birthCity: 34 },
  { name: "Maria", surname: "Aparecida", birthYear: 2017, birthCity: 34 },
  { name: "Valeria", surname: "Soares", birthYear: 2017, birthCity: 34 },
  { name: "Carlos", surname: "Suzano", birthYear: 2017, birthCity: 34 },
  { name: "Diego", surname: "Souza", birthYear: 2017, birthCity: 34 },
  { name: "Pedro", surname: "Pires", birthYear: 2017, birthCity: 34 },
  { name: "Mirian", surname: "Barao", birthYear: 2017, birthCity: 34 },
];

export const columns = [
  { title: "Name", field: "name" },
  { title: "Surname", field: "surname" },
  { title: "Birth Year", field: "birthYear", type: "numeric" },
  {
    title: "Birth Place",
    field: "birthCity",
    lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
  },
];
