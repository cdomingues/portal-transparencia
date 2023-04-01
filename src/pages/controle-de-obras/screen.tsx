import { Divider, Stack } from "@chakra-ui/react";
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

const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

const markerChildren = (data: any) => {
  return (
    <>
      <p>
        <b>Tipo de Obra:</b> {data?.descricao}
      </p>
      <p>
        <b>Bairro:</b> {data?.bairro}
      </p>
      <p>
        <b>Endereço:</b> {data?.endereco}
      </p>
      <p>
        <b>Numero:</b> {data?.numero}
      </p>
      <p>
        <b>Previsão de término:</b> {data?.fim_do_contrato}
      </p>
      <p>
        <b>Situação:</b> {data?.situacao}
      </p>
      <p>
        <b>Valor Total:</b> {data?.valor_total}
      </p>
      {/* <p>
        <b>Status:</b> <a href="https://www.uol.com.br">Veja detalhes</a>
      </p> */}
    </>
  );
};

function Screen({ handler: { columns, data, loading } }: PropsInput) {
  const title = "Controle de Obras";
  const description =
    "Acompanhe as principais informações sobre as obras que a Prefeitura está realizando na cidade e tenha acesso também a dados sobre aquelas que foram concluídas. Pesquise por contrato, por localização, situação ou descritivo da obra.";

  return (
    <ContainerBasic title={title} description={description}>
      <Stack>
        <div style={{ height: "500px", width: "100%", zIndex: 0 }}>
          <MapWithNoSSR
            coords={[ -23.528986, -46.192973 ]}
            markers={data.map((item, index) => {
              const coords = item.coordenadas.split(",");
              return {
                lat: coords[ 0 ],
                lng: coords[ 1 ],
                children: markerChildren(item),
              };
            })}
          />
        </div>
      </Stack>
      <Divider borderWidth="2px" mt="10" mb="10" />
      <TableComponent columns={columns} loading={loading} data={data} />
    </ContainerBasic>
  );
}

export default Screen;
