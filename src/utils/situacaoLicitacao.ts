export const getSituacaoText = (situacao: string | undefined) => {
    switch (situacao) {
      case "P":
        return 'Publicada';
      case 'S':
        return 'Suspensa';
        case 'C':
          return 'Concluída';
    case 'R':
        return 'Revogada';
   case 'E':
    return 'EM ANDAMENTO'  
    case 'U':
    return 'Republicada'     
      default:
        return 'Desconhecida'; // Valor padrão para quando situacao não é reconhecida
    }
  };


  
  

  