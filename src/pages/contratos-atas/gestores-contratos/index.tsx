import React, { useEffect, useState } from "react";
import { getFile } from "../../../services/cloudStorage";
import Screen from "./screen";
import axios from "axios";
import moneyFormatter from "../../../utils/moneyFormatter";
import moment from "moment";

function Controller() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
   const formatarContrato = (contrato: string) => {
    if (!contrato) return "";
    
    const [numero, ano] = contrato.split("/");
    const numeroFormatado = numero.padStart(6, "0");
    return `C${numeroFormatado}/${ano}`;
  };

  const columns = [
    
    { title: "Secretaria", field: "secretaria" },
   {
      title: "Contrato",
      field: "n_contrato",
      render: (row: any) => {
        const contratoFormatado = formatarContrato(row.n_contrato);
        return (
          <span
            style={{ color: "#1976d2", cursor: "pointer", textDecoration: "underline" }}
            onClick={() => window.open(`/detalhes?contrato=${row.n_contrato}`, "_blank")}
          >
            {contratoFormatado}
          </span>
        );
      },
    },
    { title: "Contratada", field: "contratada" },
    { title: "Objeto", field: "objeto" },
    { title: "Data Ínicio", field: "data_inicio" },
    { title: "Data Fim", field: "data_fim" },
   { title: "Status", field: "status" },
    { title: "Gestor", field: "gestor" },
    { title: "Cargo", field: "cargo" },
   
    
  ];

  const getData = async () => {
    const response = await axios.get("https://dadosadm.mogidascruzes.sp.gov.br/api/gestores_fiscais_vigentes")
    const rows = response.data;
        
     const mappedRows = rows.map((item: any) => {
      const dataFim = moment(item?.data_fim);
      const status = dataFim.isAfter(moment(), 'day') ? "Vigente" : "Encerrado";

       let n_contrato_formatado = "";
  if (item?.n_contrato) {
    const [numero, ano] = item.n_contrato.split("/");
    const numero_formatado = numero.padStart(6, "0");
    n_contrato_formatado = `C${numero_formatado}/${ano}`;
  }

      return {
        secretaria: item?.secretaria,
        n_contrato: n_contrato_formatado,
        contratada: item?.contratada,
        objeto: item?.objeto,
        data_inicio: moment(item?.data_inicio).format("DD/MM/YYYY"),
        data_fim: dataFim.format("DD/MM/YYYY"),
        gestor: item?.gestor,
        cargo: item?.cargo,
        status: status,
      };
    });
    setData(mappedRows);
   
    
  };

  useEffect(() => {
    getData();
  }, []);

  const handler = {
    data,
    columns,
    loading,
  };

  return <Screen handler={handler} />;
}

export default Controller;
