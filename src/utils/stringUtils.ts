/// utils/stringUtils.ts

export const formatString = (str: string | null | undefined): string => {
  if (!str) return "";
  return str
    .split(" ")
    .map((word: string) => {
      // Remove os caracteres ( e . da palavra antes de contar seu comprimento
      const cleanedWord = word.replace(/[().]/g, "");

      // Se a palavra "limpa" tem 1 ou 2 letras, mantém em minúsculas
      if (cleanedWord.length === 1 || cleanedWord.length === 2) {
        return word.toLowerCase();
      }
      // Caso contrário, a primeira letra é maiúscula e as demais são minúsculas
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};
