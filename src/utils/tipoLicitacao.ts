export const getTipoText = (tipo: number | undefined) => {
    switch (tipo) {
      case 2:
        return 'Pregão Presencial';
      case 3:
        return 'Tomada de Preços';
      case 4:
        return 'Concorrência';
      case 5:
        return 'Leilão';
      case 7:
        return 'Chamada Pública';
      case 8:
        return 'Chamamento Público';
      case 9:
        return 'Pré-Qualificação';
      case 10:
        return 'Convite';
      case 11:
        return 'Dispensa/Inexigibilidade';
      case 12:
        return 'Chamamento Público - Saúde';
      case 13:
        return 'Chamamento Público - Esportes';
      case 14:
        return 'Chamamento Público - Verde e Meio Ambiente';
      case 15:
        return 'Chamada Pública - Saúde';
      case 16:
        return 'Chamamento Público - Educação';
      case 17:
        return 'Pregão Eletrônico';
      case 18:
        return 'Credenciamento';
      case 20:
        return 'Audiência Pública - Saúde';
      case 21:
        return 'CONCURSO';
      case 27:
        return 'PROCESSO SELETIVO';
      default:
        return 'Desconhecido'; // Valor padrão para quando tipo não é reconhecido
    }
  };