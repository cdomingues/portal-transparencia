#!/bin/bash

# URL do Portal de Transparência de Mogi das Cruzes
URL="https://dadosabertos.mogidascruzes.sp.gov.br/"

# Caminho para o script de reinicialização
SCRIPT_REINICIO="/var/www/dadosabertos/dadosabertos/scripts/startServer.sh"

# E-mail para receber notificações
EMAIL="marcostorres@mogidascruzes.sp.gov.br"

# Fazer uma requisição HTTP e capturar o código de status
STATUS=$(curl -o /dev/null -s -w "%{http_code}\n" -k $URL)

# Verificar se o código de status é diferente de 200
if [ $STATUS -ne 200 ]; then
  echo "Erro $STATUS detectado. Iniciando rotina de reinicialização." | mail -s "Alerta: Portal Fora do Ar" $EMAIL

  # Executar o script de reinicialização
  bash $SCRIPT_REINICIO

  echo "Rotina de reinicialização concluída." | mail -s "Atualização: Rotina de Reinicialização Concluída" $EMAIL
else
  echo "O portal está operacional."
fi

