function moneyFormatter(
  initialValue: number,
  options?: {
    currency?: string;
    precision?: number;
    locale?: string;
  }
): string {
  const currencies: any = {
    USD: "$",
    EUR: "€",
    BRL: "R$",
  };

  const { currency, precision, locale } = Object.assign(
    {
      currency: "BRL",
      precision: 2,
      locale: "pt-BR",
    },
    options
  );

  const str = initialValue
    ? initialValue.toFixed(options?.precision || 2)
    : "0";

  const splited = str.split(".");
  const cents =
    splited.length > 1
      ? String(splited[1]).padEnd(precision, "0")
      : "0".repeat(precision);

  // Valor inteiro antes da vírgula
  let value = splited[0];

  // Preservar sinal negativo e remover pontos indevidos
  const isNegative = value.startsWith("-");
  value = value.replace(/[^0-9]/g, ""); // remove tudo que não é número
  if (isNegative) value = "-" + value;

  // Criar grupos de milhar
  const chunks: string[] = [];
  const absValue = isNegative ? value.slice(1) : value;
  for (let i = absValue.length; i > 0; i -= 3) {
    chunks.push(absValue.substring(Math.max(0, i - 3), i));
  }
  chunks.reverse();

  const formattedValue = chunks.join(locale === "pt-BR" ? "." : ",");

  switch (locale) {
    case "pt-BR":
      return `${currencies[currency]} ${isNegative ? "-" : ""}${formattedValue}${
        precision > 0 ? "," + cents : ""
      }`;
    default:
      return `${currencies[currency]} ${isNegative ? "-" : ""}${formattedValue}${
        precision > 0 ? "." + cents : ""
      }`;
  }
}

export default moneyFormatter;
