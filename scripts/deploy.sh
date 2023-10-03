#!/bin/bash

# Atualize o repositório Git usando o git pull
git pull

# Use o Yarn para instalar as dependências
yarn

# Execute o comando Yarn para construir o projeto
yarn build

# Reinicie todos os processos gerenciados pelo PM2
pm2 restart all