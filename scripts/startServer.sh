#!/bin/bash

#Iniciar server

yarn build

#Sincronizar PM2

pm2 save —force

#Iniciar portal

pm2 start yarn --name "dadosabertos" -- start

#Sincronizar PM2

pm2 save —force

#Sincronizar api

yarn build

#Finalizar inicializacao

pm2 restart all

echo "O portal foi reiniciado e a configuração do PM2 foi salva.”
