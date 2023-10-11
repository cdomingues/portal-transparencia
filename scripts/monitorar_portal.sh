#!/bin/bash

# URL do Portal de Transparência de Mogi das Cruzes
URL="https://dadosabertos.mogidascruzes.sp.gov.br/"

# Caminho para o script de reinicialização
SCRIPT_REINICIO="startServer.sh"

# Fazer uma requisição HTTP e capturar o código de status
STATUS=$(curl -o /dev/null -s -w "%{http_code}\n" -k $URL)

# Verificar se o código de status é 504 ou 502
if [ $STATUS -eq 504 ] || [ $STATUS -eq 502 ]; then
  echo "Erro $STATUS detectado. Iniciando rotina de reinicialização."

  # Executar o script de reinicialização
  bash $SCRIPT_REINICIO

  echo "Rotina de reinicialização concluída."
else
  echo "O portal está operacional."
fi
