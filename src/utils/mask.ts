export const parseMoney = (value:any, currency?:any) => {
    return Number(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: currency || 'BRL',
    });
  };
  