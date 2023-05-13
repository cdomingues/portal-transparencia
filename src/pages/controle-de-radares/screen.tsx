import { Divider } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../components/Table";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
  };
};

export const contentRadarsControl = {
  titlePage:"Controle de Radares",
  description:"Agora você tem um ambiente onde pode conferir, de forma oficial, as principais informações sobre os equipamentos de fiscalização de trânsito em Mogi das Cruzes. Acompanhe um mapa interativo com a localização de cada radar, tenha acesso ao tipo de equipamento, à velocidade máxima permitida e ao status de operação deles.",
}

const markerChildren = (data: any) => {
  return (
    <>
      <p>
        <b>Tipo:</b> {data?.tipo}
      </p>
      <p>
        <b>Velocidade (km/h):</b> {data?.velocidade}
      </p>
      <p>
        <b>Bairro:</b> {data?.bairro}
      </p>
      <p>
        <b>Logradouro:</b> {data?.logradouro}
      </p>
      <p>
        <b>Sentido:</b> {data?.sentido}
      </p>
      <p>
        <b>Faixas:</b> {data?.faixas}
      </p>
      <p>
        <b>Status:</b> {data?.status}
      </p>
    </>
  );
};

const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

function Screen({ handler: { columns, data, loading } }: PropsInput) {
  const title = contentRadarsControl?.titlePage;
  const description = contentRadarsControl?.description;

  return (
    <ContainerBasic title={title} description={description}>
      <div style={{ height: "500px", width: "100%" }}>
        <MapWithNoSSR
          coords={[ -23.528986, -46.192973 ]}
          markers={data.map((item) => {
            return {
              lat: item?.coordenadas[ 0 ],
              lng: item?.coordenadas[ 1 ],
              children: markerChildren(item),
            };
          })}
        />
      </div>
      <Divider borderWidth="2px" mt="10" mb="10" />
      <TableComponent columns={columns} loading={loading} data={data} />
    </ContainerBasic>
  );
}

export default Screen;
