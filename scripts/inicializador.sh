#!/bin/bash

# Salvar a configuração atual do PM2 antes de qualquer ação
/usr/local/bin/pm2 save --force

# Navegar até o diretório onde o conteúdo do site está localizado
cd /var/www/dadosabertos || exit 1

# Seus comandos para reiniciar o portal
start yarn --name "carlos" -- start

yarn build

pm2 restart all

yarn build


pm2 restart all

# Salvar a configuração atual do PM2 após todas as ações
pm2 save --force

echo "O portal foi reiniciado e a configuração do PM2 foi salva."
