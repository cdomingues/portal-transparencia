import { RowDetails } from "../../../../../styles/components/contratos-e-atas/modal/styles";

const Details = ({ grants }: any) => {
  const mockData = [
    { title: "Servidor:", value: grants?.modalidade },
    { title: "Tipo do Empenho:", value: grants?.modalidade },
    { title: "Favorecido:", value: grants?.modalidade },
    { title: "CNPJ/CPF:", value: grants?.cpfcnpj },
    { title: "Data do Empenho:", value: grants?.data },
    { title: "Valor Empenhado (R$)", value: grants?.modalidade },
    { title: "Valor Liquidado (R$):", value: grants?.modalidade },
    { title: "Valor Pago (R$):", value: grants?.modalidade },
    { title: "Unidade Orçamentária:", value: grants?.modalidade },
    { title: "Funcional Programática:", value: grants?.modalidade },
    { title: "Função:", value: grants?.modalidade },
    { title: "Subfunção:", value: grants?.modalidade },
    { title: "Programa:", value: grants?.programa },
    { title: "Fonte Recurso:", value: grants?.modalidade },
    { title: "Natureza da Despesa:", value: grants?.modalidade },
    { title: "Unidade Executora:", value: grants?.unidade },
    { title: "Contrato N°:", value: grants?.modalidade },
    { title: "Licitação Nº:", value: grants?.modalidade },
    { title: "Tipo da Licitação:", value: grants?.modalidade },
  ];

  return (
    <div style={{ overflowX: "auto" }}>
      {mockData?.map((item: any, index: number) => {
        return (
          <RowDetails
            key={index}
            style={{ backgroundColor: (index + 1) % 2 ? "transparent" : "" }}
          >
            <div className="column">
              <div className="title">{item?.title}</div>
              <div className="value">{item?.value}</div>
            </div>
          </RowDetails>
        );
      })}
    </div>
  );
};

export default Details;
