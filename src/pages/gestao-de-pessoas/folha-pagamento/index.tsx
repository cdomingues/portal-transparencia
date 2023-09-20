import { GetStaticProps } from "next";
import React, { useState, useEffect } from "react";
import Screen from "./screen";
import {
  getChart,
  getChartYear,
  getPayroll,
} from "../../../calls/expenses/payroll";
import { revalidate } from "../../../config";
import moment from "moment";
import { Row } from "../../api/despesas/folha-pagamento";

function Controller({ chartYear = { datasets: [] }, chart = { datasets: [] } }: any) {
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState(moment().year());
  const [month, setMonth] = useState(moment().subtract(1, "month").month() + 1);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [payroll, setPayroll] = useState<Row[]>([]);

  const handlePayroll = async () => {
    setLoading(true);
    const { payroll } = await getPayroll({
      mes: month,
      ano: year,
      cargo: role,
      matricula: enrollment,
      nome: name,
    });
    setLoading(false);
    setPayroll(payroll);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { payroll } = await getPayroll({
        mes: moment().subtract(1, "month").month() + 1,
        ano: moment().year(),
      });
      setLoading(false);
      setPayroll(payroll);
    };

    fetchData();
  }, []);

  const columns = [
    { title: "Matrícula", field: "matricula" },
    { title: "Nome", field: "nome" },
    { title: "Cargo", field: "cargo" },
    { title: "Situação", field: "situacao" },
    { title: "Data Admissão", field: "dataadmissao" },
    { title: "Data Exoneração", field: "dataexoneracao" },
    { title: "Secretaria", field: "secretaria" },
    { title: "Ano", field: "ano" },
    { title: "Mês", field: "mes" },
    { title: "Salário Base", field: "salariobase" },
    { title: "Valor Bruto", field: "bruto" },
    { title: "Valor Líquido", field: "liquido" },
    { title: "Valor Desconto", field: "desconto" },
  ];

  const handler = {
    data: payroll,
    columns,
    loading,
    chart,
    chartYear,
    setYear,
    year,
    setEnrollment,
    enrollment,
    setMonth,
    month,
    setName,
    name,
    setRole,
    role,
    handlePayroll,
  };

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  const { chartYear } = await getChartYear();
  const { payroll } = await getPayroll({
    mes: moment().subtract(1, "month").month() + 1,
    ano: moment().year(),
  });
  const { chart } = await getChart();
  return {
    props: {
      chartYear: chartYear || { datasets: [] },
      chart: chart || { datasets: [] },
      payroll: payroll || [],
    },
    revalidate,
  };
};
