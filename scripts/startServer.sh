#!/bin/bash

# Verificar se o script está sendo executado como 'dadosabertos'
if [ "$(whoami)" != "dadosabertos" ]; then
  echo "Este script deve ser executado como dadosabertos"
  exit 1
fi

# Salvar a configuração atual do PM2 antes de qualquer ação
/usr/local/bin/pm2 save --force

# Iniciar o portal
/usr/local/bin/pm2 start /usr/local/bin/yarn --name "dadosabertos" -- start

# Construir o projeto
/usr/local/bin/yarn build && echo "Construção bem-sucedida" || { echo "Falha na construção"; exit 1; }

# Reiniciar todos os processos
/usr/local/bin/pm2 restart all && echo "Todos os processos reiniciados com sucesso" || { echo "Falha ao reiniciar processos"; exit 1; }

# Reconstruir o projeto
/usr/local/bin/yarn build && echo "Reconstrução bem-sucedida" || { echo "Falha na reconstrução"; exit 1; }

# Reiniciar todos os processos novamente
/usr/local/bin/pm2 restart all && echo "Todos os processos reiniciados com sucesso" || { echo "Falha ao reiniciar processos"; exit 1; }

# Salvar a configuração atual do PM2 após todas as ações
/usr/local/bin/pm2 save --force && echo "Configuração do PM2 salva com sucesso" || { echo "Falha ao salvar a configuração do PM2"; exit 1; }

echo "O portal foi reiniciado e a configuração do PM2 foi salva."

