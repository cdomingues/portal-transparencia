import Diretriz_orcamentaria from "../../assets/images/icones/diretriz_orcamentaria.svg";
import CardHorizon from "../CardHorizon";
import IconeOrcamento from "../../assets/images/icones/orcamento_home.svg";
import IconeOrcamentoBranco from "../../assets/images/icones/orcamento_home_branco.svg";
import IconeContratos from '../../assets/images/icones/icone_home_contratos.svg'
import IconeContratosBranco from '../../assets/images/icones/icone_home_contratos_branco.svg'
import IconeLeisDecretos from '../../assets/images/icones/leis_e_decretos.svg'
import IconeLeisDecretosBranco from '../../assets/images/icones/leis_e_decretos_branco.svg'
import IconeServidores from '../../assets/images/icones/servidores_home.svg'
import IconeServidoresBranco from '../../assets/images/icones/servidores_home_branco.svg'
import IconeAdmMunicipal from '../../assets/images/icones/adm_municipal_home.svg'
import IconeAdmMunicipalBranco from '../../assets/images/icones/adm_municipal_home_branco.svg'
import IconeSocial from '../../assets/images/icones/lupa.svg'
import IconeSocialBranco from '../../assets/images/icones/lupa branco.svg'
import IconePortais from '../../assets/images/icones/portais_home.svg'
import IconePortaisBranco from '../../assets/images/icones/portais_home_branco.svg'
import IconePlanejamento from '../../assets/images/icones/planejamento_home.svg'
import IconePlanejamentoBranco from '../../assets/images/icones/planejamento_home_branco.svg'
import IconesGovernoAberto from '../../assets/images/icones/governo_aberto_home.svg'
import IconesGovernoAbertoBranco from '../../assets/images/icones/governo_aberto_home_branco.svg'
import IconeLai from '../../assets/images/icones/lai.svg';
import IconeLaiBranco from '../../assets/images/icones/lai_branco.svg';
import IconeDiario from '../../assets/images/icones/diario.svg'
import IconePortal from '../../assets/images/icones/portal_dados_abertos.svg';
import IconeDiarioBranco from '../../assets/images/icones/diario_branco.svg'
import IconePortalBranco from '../../assets/images/icones/portal_dados_abertos_branco.svg';


import FolhaPagamento from '../../assets/images/icones/folha_de_pagamento.svg'
import CargosSalarios from '../../assets/images/icones/folha de pagamento__cargos e salarios.svg'
import Diarias from '../../assets/images/icones/folha de pagamento__adiantamentos e hospedagem.svg'
import Viagens from '../../assets/images/icones/folha de pagamento__passagens e locomoção.svg'
import IconeRadar from '../../assets/images/icones/Home_botoes_radares_red2.svg'
import IconeVeiculo from '../../assets/images/icones/vehicle_icon3.svg'
import IconeGlobo from '../../assets/images/icones/icone_globo_Red2.svg'
import IconeOnibus from '../../assets/images/icones/icone_onibus_red2.svg'
import IconeMap from '../../assets/images/icones/icone_map_red2.svg'
import IconeSsocial from '../../assets/images/icones/icones_ssocial_red2.svg'
import IconeOS from '../../assets/images/icones/icones_barra lateral__patrimonio.svg'
import IconeLeis from '../../assets/images/icones/LAI__protocolo geral.svg'

import IconeLixeira from '../../assets/images/icones/trash_styled.svg'



import Perfil_municipio from "../../assets/images/icones/icones_barra lateral__perfil do municipio.svg";
import Ciclo_orcamentario from "../../assets/images/icones/icones_barra lateral__ciclo orcamentario.svg";
import Gestao_orcamentaria from "../../assets/images/icones/icones_barra lateral__gestão orcamentaria.svg";
import Gestao_orcamentaria_covid from "../../assets/images/icones/icones_barra lateral__gestão orcamentaria covid.svg";
import Gestao_orcamentaria_outros from "../../assets/images/icones/icones_barra lateral__gestão orcamentaria outros.svg";
import Gestao_extra_orcamentaria from "../../assets/images/icones/icones_barra lateral__gestão extra orcamentaria.svg";
import Acordos_termos from "../../assets/images/icones/icones_barra lateral__acordos e termos.svg";
import Compras_publicas from "../../assets/images/icones/icones_barra lateral__compras publicas.svg";
import Gestao_de_pessoas from "../../assets/images/icones/icones_barra lateral__gestao de pessoas.svg";
import Patrimonio from "../../assets/images/icones/icones_barra lateral__patrimonio.svg";
import Controle_de_obras from "../../assets/images/icones/portal_de_obras_red3.svg";
import Controle_de_radares from "../../assets/images/icones/Home_botoes_radares.svg";
import Agenda_aberta from "../../assets/images/icones/icones_barra lateral__agenda aberta.svg";
import Convenios_transferencias from "../../assets/images/icones/terceiro setor__convenios.svg";
import Leis_decretos_portarias from "../../assets/images/icones/Home_botoes_leisedecretos.svg";
import Acesso_a_informacao from "../../assets/images/icones/LAI__acesso a informação.svg";
import Ouvidoria from "../../assets/images/icones/ouvidoria_Red2.svg";
import Instituto_autarquia from "../../assets/images/icones/icones_barra lateral__institutos e autarquias.svg";
import Perguntas_frequentes from "../../assets/images/icones/icones_barra lateral__perguntas frequentes.svg";
import Ultimas_noticias from "../../assets/images/icones/icones_barra lateral__ultimas noticias.svg";
import Plano_municipal_educacao from "../../assets/images/icones/plano_plurianual.svg";
import Plano_municipal_saude from "../../assets/images/icones/Home_botoes_planosaude.svg";
import Mapa_do_site from "../../assets/images/icones/icones_barra lateral__mapa do site.svg";
import promae from "../../assets/images/icones/relatorio_resumido.svg"
import { FaMoneyBillWave } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi"
import CustomAccordion from "../CustomAccordion";
import { useState } from "react";
import AccordionMenuItem from "../MenuAcordion";
import { AiOutlineGlobal } from "react-icons/ai";

export const menus=[
      {
        "id": 1,
        "title": "ORÇAMENTO",
        'imageURL': IconeOrcamento.src, 
        'imageURL2': IconeOrcamentoBranco.src, 
        'description': 'Informações sobre ciclo orçamentário, despesa, receitas',
        "submenus": [
        
        {"id_submenu": 2, 
            "title": "Execução Orçamentária",
            'imageURL': Gestao_orcamentaria.src,
            "link":"", 
            "extralinks": [
            { label: "Receitas Gerais", url: "/gestao-orcamentaria/receitas" },
           // {label: "Emendas Parlamentares",url: "/gestao-orcamentaria/receitas/receitas-emendas",},
            {label: "Despesas Gerais", url: "/gestao-orcamentaria/despesas/despesas-gerais",},
          //  {label: "Emendas Parlamentares",url: "/gestao-orcamentaria/despesas/despesas-emendas",},
            {label: "Propaganda e Publicidade",url: "/gestao-orcamentaria/despesas/propaganda", },
            {label: "Subvenções e Terceiro Setor", url: "/gestao-orcamentaria/despesas/subvencoes",},
            //{label: "Adiantamentos",url: "/gestao-orcamentaria/despesas/adiantamentos",},
            {label: "Restos a Pagar",url: "/gestao-orcamentaria/despesas/despesas-restos", },
            { label: "Ordem Cronológica de Pagamentos", url: "/gestao-orcamentaria/despesas/pagamentos",},
            {label: "Divida ativa", url: "/gestao-orcamentaria/divida-ativa", },
            {label: "Incentivos Fiscais",url: "/gestao-orcamentaria/incentivos-fiscais", },
    ]},
          {"id_submenu": 3, 
            "title": "Execução Extra Orçamentária", 
            'imageURL': Gestao_extra_orcamentaria.src,
            "link":"",
            "extralinks": [
                { label: "Receitas Extra Orçamentárias",url: "/gestao-extra-orcamentaria/receitas", },
                {label: "Despesas Extra Orçamentárias",url: "/gestao-extra-orcamentaria/despesas", },
            ]},
               {"id_submenu": 3, 
            "title": "Fiscalização Orçamentária", 
            'imageURL': Gestao_extra_orcamentaria.src,
            "link":"",
            "extralinks": [
                 { label: "Pareceres do Tribunal", url: "/ciclo-orcamentario/pareceres-do-tribunal" },
            { label: "Aprovação de Contas pelo Legislativo", url: "http://www.cmmc.com.br/paginas/contas_do_executivo_municipal_e_pareceres_do_tcesp/" },
            ]},
            {"id_submenu": 4, 
                "title": "Convênios e Transferências", 
                'imageURL': Convenios_transferencias.src,
                "link":"",
                "extralinks": [
                    { label: "Convênios - Recebidos", url: "/convenios-transferencias/convenios-recebidos" },
                    { label: "Convênios - Repasse", url: "/convenios-transferencias/convenios-repasse" },
                ]},
        {"id_submenu": 5, 
            "title": "Execução Orçamentária Covid 19", 
            'imageURL': Gestao_orcamentaria_covid.src,
            "link":"",
            "extralinks": [
                { label: "Receitas", url: "covid/receitas" },
                { label: "Despesas", url: "covid/despesas" },
                { label: "Compras COVID-19", url: "http://covid19.pmmc.com.br/" },
            ]}
            ,
        {"id_submenu": 6, 
            "title": "Consulta de Fornecedores a Pagamentos", 
            'imageURL': Gestao_extra_orcamentaria.src,
            "link":"http://consultacompras.pmmc.com.br/pagamento-fornecedor",
            "extralinks": [ ]
        }   ,
        {"id_submenu": 7, 
            "title": "Benefícios Fiscais", 
            'imageURL': Compras_publicas.src,
            "link":"",
            "extralinks": [
               // { label: "Benefícios Fiscais", url: "/beneficios-fiscais" },
                { label: "Desonerações e Renúncias", url: "/beneficios-fiscais/desoneracoes_renuncias" },
                { label: "PROMAE", url: "/beneficios-fiscais/promae" },
                { label: "Lic e Lide", url: "/beneficios-fiscais/lic_lide" },
                {label: "Regras Benefícios Fiscais", url: "/beneficios-fiscais/regras-beneficios-fiscais"},
            ]},
              {"id_submenu": 8, 
            "title": "Emendas parlamentares", 
            'imageURL': Compras_publicas.src,
            "link":"",
            "extralinks": [
               // { label: "Benefícios Fiscais", url: "/beneficios-fiscais" },
               { label: "Emendas - receitas", url: "emendas-parlamentares/receitas-emendas" },
                { label: "Emendas - despesas", url: "emendas-parlamentares/despesas-emendas" },
                
                 ]}, 

        ]
      },


      {
        "id": 2,
        "title": "CONTRATOS E LICITAÇÕES",
        'imageURL': IconeContratos.src, 
        'imageURL2': IconeContratosBranco.src, 
        'description': 'Informações sobre contratos, atas, licitações, acordos e termos de cooperação',
        "submenus": [
            {
                "id_submenu": 1, 
                "title": "Contratos", 
                "imageUrl":promae.src,
                "url":"",
                "extralinks": [
                    { label: "Contratos", url: "/contratos-atas/contratos"  },
                    //{ label: "Contratos de Gestão", url: "/contratos-atas/contratos-gestao"  },
                   { label: "Atas de registro de preços",  url: "/contratos-atas/atas"   },
                    { label: "Relação dos Gestores de contratos",  url: "/contratos-atas/gestores-contratos"  },
                    
                ]
            },
            {
                "id_submenu": 2, 
                "title": "Acordos e Termos", 
                "imageUrl":Acordos_termos.src,
                "url":"",
                "extralinks": [
                    {label: "Acordos e Termos - Gerais", url: "/acordos-termos/acordo-e-termos-gerais",},
                    {label: "Acordo de Cooperação", url: "/acordos-termos/acordo-de-cooperacao",},
                    {label: "Termo de Colaboração",url: "/acordos-termos/termo-de-colaboracao", },
                    { label: "Termo de Fomento", url: "/acordos-termos/termo-de-fomento" },
                    {label:'Termo de Cooperação', url: "/acordos-termos/termo-de-cooperacao", },
                    {label: 'Termo de Financiamento Cultural', url: "/acordos-termos/termo-de-financiamento-cultural",},
                    {label: 'Credenciamento', url: "/acordos-termos/credenciamento",},
                ]},

            {"id_submenu": 3, 
                "title": "Licitações", 
                "imageUrl":Compras_publicas.src,
                "url":"",
                "extralinks": [
                    { label: "Licitações", url: "/compras-publicas/licitacoes" },
                    { label: "Portal Nacional de Contratações Públicas",url: "https://pncp.gov.br/app/editais?q=&status=recebendo_proposta&pagina=1"},
                     { label: "Plano de Contratações Anual", url: "/compras-publicas/plano-contratacoes-anual" },
                    
                ]},
                {"id_submenu": 4, 
                "title": "Plano de Contratações Anual", 
                "imageUrl":Compras_publicas.src,
                "url":"/compras-publicas/plano-contratacoes-anual",
                "extralinks": [  ]},

                 {"id_submenu": 5, 
                "title": "Empresas sancionadas administrativamente", 
                "imageUrl":Compras_publicas.src,
                "url":"/compras-publicas/empresas-sancionadas",
                "extralinks": [  ]},
        ]
      },
      {
        "id": 3,
        "title": "LEIS E DECRETOS",
        'imageURL': IconeLeisDecretos.src, 
         'imageURL2': IconeLeisDecretosBranco.src, 
        'description': "Leis, decretos e portarias",
        "submenus": [
         
          {
            "id_submenu": 2, 
            "title": "Leis, Decretos e Portarias", 
            "imageUrl":IconeLeis.src,
            "url":"",
            "extralinks": [
               
                { label: " Legislação Municipal", url: "https://leismunicipais.com.br/prefeitura/sp/mogi-das-cruzes",},
                { label: "Repositório Laserfiche ", url: "https://ged.mogidascruzes.sp.gov.br/weblink7/Browse.aspx", },
                
            ]},
                     
        ]
      },
      {
        "id": 4,
        "title": "SERVIDORES",
        'imageURL': IconeServidores.src, 
        'imageURL2': IconeServidoresBranco.src,
        'description': "Informações sobre concursos públicos, processos seletivos, folha de pagamento",
        "submenus": [
            {
                "id_submenu": 1, 
                "label": "Folha de Pagamento", 
                "imageUrl":FolhaPagamento.src,
                "url":"/gestao-de-pessoas/folha-pagamento",
                "extralinks": [ ]
            },
            {
                "id_submenu": 2, 
                "label": "Cargos e Salários", 
                "imageUrl":CargosSalarios.src,
                "url":"/gestao-de-pessoas/cargos-e-salarios",
                "extralinks": [ ]
            },
            {
                "id_submenu": 3, 
                "label": "Carga Horária", 
                "imageUrl":CargosSalarios.src,
                "url":"/gestao-de-pessoas/carga-horaria",
                "extralinks": [ ]
            },
            {
                "id_submenu": 4, 
                "label": "Diárias", 
                "imageUrl":Diarias.src,
                "url":"/gestao-de-pessoas/diarias-viagens",
                "extralinks": [ ]
            },

             {
                "id_submenu": 4, 
                "label": "Adiantamentos", 
                "imageUrl":Diarias.src,
                "url":"/gestao-de-pessoas/adiantamentos",
                "extralinks": [ ]
            },
            
            {
                "id_submenu": 5, 
                "label": "Concurso Público", 
                "imageUrl":FolhaPagamento.src,
                "url":"/gestao-de-pessoas/concurso-publico",
                "extralinks": []
            },
            {
                "id_submenu": 6, 
                "label": "Servidores Terceirizados",  
                "imageUrl":FolhaPagamento.src,
                "url":"/gestao-de-pessoas/terceirizados",
                "extralinks": []
            },
           
           
           
        ]
      },
      {
        "id": 5,
        "title": "ADMINISTRAÇÃO MUNICIPAL",
        'imageURL': IconeAdmMunicipal.src,
        'imageURL2': IconeAdmMunicipalBranco.src, 
        'description': "Informações sobre a administração municipal",
        "submenus": [
            
            {
                "id_submenu": 2, 
                "label": "Perfil do Município", 
                'imageUrl': Perfil_municipio.src,
                "url":"/perfil-do-municipio",
                "extralinks": []
            },
            {
                "id_submenu": 3, 
                "label": "Mapa do site", 
                'imageUrl': Mapa_do_site.src,
                "url":"/mapa-do-site",
                "extralinks": []
            },
           
            {
                "id_submenu": 4, 
                "label": "Feiras, Mercado Municipal e Mercado do Produto", 
                'imageUrl': Instituto_autarquia.src,
                "url":"/permissionarios",
                "extralinks": []
            },
            {
                "id_submenu": 5, 
                "label": "Institutos e Autarquias", 
                'imageUrl': Instituto_autarquia.src,
                "url":"",
                "extralinks": [
                    {label: "Transparência SEMAE", url: "http://www.transparenciasemae.pmmc.com.br/",  },
                    {label: "Transparência IPREM",url: "https://iprem.mogidascruzes.sp.gov.br/?page_id=1542",},
                ]
            },
            {
                "id_submenu": 6, 
                "label": "Patrimônio", 
                'imageUrl': Patrimonio.src,
                "url":"/patrimonio",
                "extralinks": []
            },
            {
                "id_submenu": 7, 
                "label": "Perguntas Frequentes", 
                'imageUrl': Perguntas_frequentes.src,
                "url":"https://www.mogidascruzes.sp.gov.br/pagina/gabinete/perguntas-frequentes-faq",
                "extralinks": []
            },
            {
                "id_submenu": 8, 
                "label": "Relaçao de Unidades e Equipamentos", 
                'imageUrl': Patrimonio.src,
                "url":"https://www.mogidascruzes.sp.gov.br/unidades-e-equipamentos/todos-os-assuntos",
                "extralinks": []
            },
             {
                "id_submenu": 9, 
                "label": "Estrutura Organizacional", 
                'imageUrl': Patrimonio.src,
                "url":"/gestao-de-pessoas/estrutura-organizacional",
                "extralinks": []
            },
          
        ]
      },
      {
        "id": 6,
        "title": "CONTROLE SOCIAL",
        'imageURL': IconeSocial.src, 
        'imageURL2': IconeSocialBranco.src, 
        'description': "Informações sobre agenda da autoridades, controle de radares, conselhos municipais e uso de carros oficiais, etc .",
        "submenus": [
            {   
                "id_submenu": 1,
                "label": "Controle de Radares",   
                'imageUrl': IconeRadar.src,
                "url":"/controle-de-radares",
                "extralinks": [
                    {label:"Fiscalização Eletrônica de Trânsito", url :'https://mobilidade.mogidascruzes.sp.gov.br/radar_listagem'},
                    {label:"Controle de radares", url :'/controle-de-radares/'},
                ]
            },
            {
                'id_submenu': 2,
                "label": "Agenda do Prefeito e Vice-Prefeito",      
                'imageUrl': Agenda_aberta.src,
                "url":"",
                "extralinks": [
                    {label: "Prefeita - Mara Bertaiolli", url: "agenda-aberta/agenda-prefeita",  },
                    {label: "Vice Prefeito - Teo Cusatis",url: "agenda-aberta/agenda-viceprefeito",},
                ]
            },
           
            {   
                "id_submenu": 4,
                "label": "Organizações Sociais",   
                'imageUrl': IconeOS.src,
                "url":"https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude-e-bem-estar/organizacoes-sociais",
                "extralinks": []
            },
            {
                "id_submenu": 5,
                "label": "Conselhos Municipais",    
                "imageUrl": IconeOS.src,
                "url":"",
                "extralinks": [
                    { label: "Abastecimento", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-abastecimento-de-alimentos-e-bens-de-consumo/institucional" },
                    { label: "Alimentação Escolar", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-alimentacao-escolar/institucional" },
                    { label: "Assistência Social", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-assistencia-social/institucional" },
                    { label: "Cidade", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-da-cidade/institucional" },
                    { label: "Criança e Adolescente", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-dos-direitos-da-crianca-e-do-adolescente/institucional" },
                    { label: "Cultura", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-cultura/institucional" },
                    { label: "Desenvolvimento Rural", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-desenvolvimento-rural/institucional" },
                    { label: "Desporto", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-do-desporto/institucional" },
                    { label: "Educação", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-educacao/institucional" },
                    { label: "Fundeb", url: "https://www.mogidascruzes.sp.gov.br/pagina/fundo-de-manutencao-e-desenvolvimento-da-educacao-basica/institucional" },
                    { label: "Idoso", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-do-idoso/institucional" },
                    { label: "Igualdade Racial", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-promocao-da-igualdade-racial/institucional" },
                    { label: "Inovação e Tecnologia", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-inovacao-e-tecnologia/institucional" },
                    { label: "Meio Ambiente", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-mogiano-de-meio-ambiente/institucional" },
                    { label: "Mobilidade Urbana", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-mobilidade-urbana/institucional" },
                    { label: "Mulher", url: "/pagina/conselho-da-mulher/institucional" },
                    { label: "Parcerias Público-Privadas", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-gestor-de-parcerias-publico-privadas/institucional" },
                    { label: "Patrimônio Histórico", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-preservacao-do-patrimonio-historico-cultural-e-artistico/institucional" },
                    { label: "Pessoa com Deficiência", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-para-assuntos-da-pessoa-com-deficiencia/institucional" },
                    { label: "Políticas Sobre Drogas", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-politicas-sobre-drogas/institucional" },
                    { label: "Saúde", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-saude/institucional" },
                    { label: "Segurança Alimentar", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-seguranca-alimentar/institucional" },
                    { label: "Segurança Pública", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-seguranca-publica/institucional" },
                    { label: "Turismo", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-turismo/institucional" },
                    { label: "Tutelar", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-tutelar/institucional" }
                ]
            },
            {
                "id_submenu": 6,
                "label": "Fundos Municipais",
                'imageUrl': IconeOS.src,
                "url":"/gestao-orcamentaria/despesas/fundos-municipais",
                "extralinks": [ ]
            },
            {
                "id_submenu": 7,
                "label": "Fila de Espera Creches Públicas",
                'imageUrl': IconeOS.src,
                "url":"https://sge.sme-mogidascruzes.sp.gov.br/grid_classificacao_unidade/",
                "extralinks": [ ]
            },
            {
                "id_submenu":8,
                "label": "Empresas reclamadas no PROCON",
                'imageUrl': IconeOS.src,
                'url': 'empresas-reclamadas-procon',
                'extralinks': []
            },
             {
                "id_submenu":9,
                "label": "Estoque de medicamentos",
                'imageUrl': IconeOS.src,
                'url': '/medicamentos',
                'extralinks': []
            },
             {
                "id_submenu":10,
                "label": "Lista de espera de consultas e exames",
                'imageUrl': IconeOS.src,
                'url': '/fila_de_espera',
                'extralinks': []
            }
            
        ]
      },
      {
        "id": 7,
        "title": "PLANEJAMENTO E PRESTAÇÃO DE CONTAS",
        'imageURL': IconePlanejamento.src, 
        'imageURL2': IconePlanejamentoBranco.src, 
        'description': "Informações sobre planejamento e prestação de contas",
        "submenus": [
            {
                "id_submenu": 1,
                "label": "Relatório de Gestão",
                'imageUrl': promae.src,
                "url":"/relatorio-gestao",
                "extralinks": [ ]
            },
            {
                "id_submenu": 2,
                "label": "Planos municipais",
                'imageUrl': Plano_municipal_educacao.src,
                "url":"",
                "extralinks": [
                    { label: "Plano Municipal de Saúde", url: "planos-municipais/plano-municipal-saude" },
                    { label: "Plano Municipal de Educação", url: "planos-municipais/plano-municipal-educacao" },
                    { label: "Planos Municipais Diversos", url: "planos-municipais/plano-municipal-diversos" },
                ]
            },
            {   
                "id_submenu": 3,
                "label": "Políticas e Programas",
                'imageUrl': Plano_municipal_educacao.src,
                "url":"/politicas-programas",
                "extralinks": []
            },
            {
                "id_submenu": 4,
                "label":"Prestação de Contas Simplificada",
                "imageUrl": IconeLeis.src,
                'url':"/governo-aberto/prestacao-contas",
                "extralinks": [ ]
            },
            {
                "id_submenu": 5,
                "label":"Prestação de Contas à Câmara Municipal",
                "imageUrl": IconeLeis.src,
                'url':"/ciclo-orcamentario/prestacao-de-contas",
                "extralinks": [ ]
            },
              {
                "id_submenu": 6,
                "label":"Pareceres do Tribunal",
                "imageUrl": IconeLeis.src,
                'url':"/ciclo-orcamentario/pareceres-do-tribunal",
                "extralinks": [ ]
            },  
            {
                'id_submenu': 7,
                "label": "Plano de Governo",
                "imageUrl": IconeLeis.src,
                "url": "https://mogisp.sharepoint.com/sites/SMTDA-DTPI/Documentos%20Compartilhados/Forms/AllItems.aspx?id=%2Fsites%2FSMTDA%2DDTPI%2FDocumentos%20Compartilhados%2F01%2E%20Transpar%C3%AAncia%2F05%2E%20Portal%20da%20Transpar%C3%AAncia%2FPortal%20da%20Transpar%C3%AAncia%5F2025%2FPublica%C3%A7%C3%B5es%20do%20Portal%20da%20Transpar%C3%AAncia%2FPlano%20de%20Governo%5FMara%20Bertaiolli%5F2025%2D2029%2Epdf&parent=%2Fsites%2FSMTDA%2DDTPI%2FDocumentos%20Compartilhados%2F01%2E%20Transpar%C3%AAncia%2F05%2E%20Portal%20da%20Transpar%C3%AAncia%2FPortal%20da%20Transpar%C3%AAncia%5F2025%2FPublica%C3%A7%C3%B5es%20do%20Portal%20da%20Transpar%C3%AAncia&p=true&ga=1"
            },
              {"id_submenu": 8, 
            "label": "Ciclo Orçamentário", 
            "link":"",
            "imageURL":Ciclo_orcamentario.src,
            "extralinks": [
            { label: "Plano Plurianual", url: "/ciclo-orcamentario/plurianual" },
            { label: "Diretrizes Orçamentárias", url: "/ciclo-orcamentario/diretrizes-orcamentarias" },
            { label: "Lei Orcamentária Anual", url: "/ciclo-orcamentario/lei-orcamentaria-anual" },
            { label: "Relatório de Gestão Fiscal", url: "/ciclo-orcamentario/relatorio-gestao-fiscal" },
            { label: "Relatório Resumido", url: "/ciclo-orcamentario/relatorio-resumido" },
            { label: "Balanços Anuais", url: "/ciclo-orcamentario/balancos-anuais" },
           
            { label: "Desonerações/ Renúncia de Receita", url: "/ciclo-orcamentario/desoneracoes-renuncias" },
          ]},
           
        ]
      },
      {
        "id": 8,
        "title": "INICIATIVAS DE GOVERNO ABERTO",
        'imageURL': IconesGovernoAberto.src, 
        'imageURL2': IconesGovernoAbertoBranco.src, 
        'description': "Veja aqui as principais iniciativas de governo aberto",
        "submenus": [
           
            {
                'id_submenu': 1,
                "label":"Governo aberto",
                'imageUrl': IconeLeis.src,
                'url':"/governo-aberto",
                "extralinks": [
                    {label: "Governo Aberto - Início", url:"/governo-aberto/"},
                   //{label: "Portas de Participação Cidadã", url:"/governo-aberto/participacao-cidada"},
                 ]
            },
            {
                "id_submenu": 2,
                "label":"Governo Digital",
                "imageUrl": IconeLeis.src,
                'url':"/governo-digital",
                "extralinks": [ ]
            },
          
            {
                "id_submenu": 4,
                "label":"InfoDados",
                "imageUrl": IconeLeis.src,
                'url':"/infodados",
                "extralinks": [ ]
            }
        ]
      },
      {
        "id": 9,
        "title": "APLICATIVOS E PORTAIS",
        'imageURL': IconePortais.src, 
        'imageURL2': IconePortaisBranco.src, 
        'description': "Acesso aos demais portais e aplicativos da prefeitura",
        "submenus": [
            {
                "id_submenu": 1,
                "label":"Portal de Obras",
                "imageUrl": Controle_de_obras.src,
                'url':"",
                "extralinks": [ 
                    { label: "Pesquise Obras", url: "/controle-de-obras/pesquisar-obras" },
                    { label: "Versão Antiga", url: "/controle-de-obras/obras-publicas" },
                ]
            },
            {
                "id_submenu": 2,
                "label":"VISUAS - Visor do Sistema Único de Assistência Social",
                'imageUrl': IconeSsocial.src,
                'url':"http://visuas.mogidascruzes.sp.gov.br/",
                "extralinks": [ ]
            },
            {
                "id_submenu": 3,
                "label":"GeoMogi",
                'imageUrl': IconeGlobo.src,
                'url':"https://geomogi.mogidascruzes.sp.gov.br/",
                "extralinks": [ ]
            },
            {
                "id_submenu": 4,
                "label":"Ônibus municipais",
                'imageUrl': IconeOnibus.src,
                'url':"https://mobilidadeservicos.mogidascruzes.sp.gov.br/site/transportes/linhas",
                'extralinks': [ ]
            },
            {
                'id_submenu': 5,
                "label":"Ouvidoria - COLAB",
                'imageUrl': Ouvidoria.src,
                'url':"https://www.mogidascruzes.sp.gov.br/pagina/ouvidoria-geral/colab",
                'extralinks': [ 
                   { label: "Pesquisa de satisfação", url: "https://www.mogidascruzes.sp.gov.br/pagina/ouvidoria-geral/publicacoes" },
                {label:'Colab', url: 'https://www.mogidascruzes.sp.gov.br/pagina/ouvidoria-geral/colab'} ]
            },
            {
                'id_submenu': 6,
                'label':"Agenda da cidade",
                'imageUrl': IconeMap.src,
                'url':"https://www.mogidascruzes.sp.gov.br/agenda-da-cidade/atracoes",
                'extralinks': [ ]
            },
            {
                'id_submenu': 7,
                'label':"Pontos Turísticos",
                'imageUrl': IconeMap.src,
                'url':"https://www.mogidascruzes.sp.gov.br/pontos-turisticos/todos-os-assuntos",
                'extralinks': [ ]
            },
            {
                'id_submenu': 8,
                'label':" Operação Cata Tranquerira ",
                'imageUrl': IconeLixeira.src,
                'url':"https://www.mogidascruzes.sp.gov.br/servico/todos-os-assuntos/operacao-cata-tranqueira ",
                'extralinks': [ ]
            }
        ]
      },
      {
        "id": 10,
        "title": "LEI DE ACESSO À INFORMAÇÃO",
        'imageURL': IconeLai.src, 
        'imageURL2': IconeLaiBranco.src, 
        'description': "Veja aqui as principais iniciativas de governo aberto",
        "submenus": [
             {
                "id_submenu": 0,
                "label":"Lei de acesso à informação",
                "imageUrl": IconeLeis.src,
                'url':"/acesso-a-informacao",
                "extralinks": [ ]
            },
            {
                "id_submenu": 1,
                "label":"Solicitar Acesso à Informação",
                "imageUrl": IconeLeis.src,
                'url':"https://mogidascruzes.1doc.com.br/b.php?pg=wp/detalhes&itd=3",
                "extralinks": [ ]
            },
           
              {
                'id_submenu': 6,
                "label":"Ouvidoria - COLAB",
                'imageUrl': Ouvidoria.src,
                'url':"https://www.mogidascruzes.sp.gov.br/pagina/ouvidoria-geral/colab",
                'extralinks': [ 
                    { label: "Pesquisa de satisfação", url: "https://www.mogidascruzes.sp.gov.br/pagina/ouvidoria-geral/publicacoes" },
                {label:'Colab', url: 'https://www.mogidascruzes.sp.gov.br/pagina/ouvidoria-geral/colab'}
                ]
            },
            {
                'id_submenu': 7,
                "label":"Portal de Dados Abertos ",
                'imageUrl': IconeLeis.src,
                'url':"https://dados.mogidascruzes.sp.gov.br/",
                'extralinks': [ ]
            },
        ]
      },
       {
        "id": 11,
        "title": "LGPD",
        'imageURL': IconeLeisDecretos.src, 
        'imageURL2': IconeLeisDecretosBranco.src, 
        'description': "Veja aqui as principais iniciativas de governo aberto",
        "submenus": [
             {
                "id_submenu": 1,
                "label":"LGPD",
                "imageUrl": IconeLeis.src,
                'url':"/lgpd",
                "extralinks": [ ]
            },

            {
                "id_submenu": 2,
                "label":"Direitos do titular",
                "imageUrl": IconeLeis.src,
                'url':"/lgpd/direitos_titular",
                "extralinks": [ ]
            },
            {
                "id_submenu": 3,
                "label":"Glossário de Termos Técnicos LGPD",
                "imageUrl": IconeLeis.src,
                'url':"/lgpd/glossario-lgpd",
                "extralinks": [ ]
            },
        ]
       },
       {
        "id": 12,
        "title": "InfoDados",
        'imageURL': IconesGovernoAberto.src,
        'imageURL2': IconesGovernoAbertoBranco.src, 
        'description': "InfoDados",
        "submenus": [
             {
                "id_submenu": 1,
                "label":"InfoDados",
                "imageUrl": IconeLeis.src,
                'url':"/infodados",
                "extralinks": [ ]
            },
        ]
       },
         {
        "id": 13,
        "title": "Diário Oficial",
        'imageURL': IconeDiario.src, 
        'imageURL2': IconeDiarioBranco.src, 
        'description': "Diário oficial",
        "submenus": [
             {
                "id_submenu": 1,
                "label":"Diário oficial",
                "imageUrl": IconeLeis.src,
                'url':"https://diario-oficial.mogidascruzes.sp.gov.br/diarios/publicacoes/",
                "extralinks": [ ]
            },
        ]
       },
        {
        "id": 14,
        "title": "Plano Municipal de Integridade",
        'imageURL': IconesGovernoAberto.src,
        'imageURL2': IconesGovernoAbertoBranco.src, 
        'description': "Plano Municicipal de Integridade",
        "submenus": [
             {
                "id_submenu": 1,
                "label":"Plano municipal de integridade",
                "imageUrl": IconeLeis.src,
                'url':"/plano-municipal-integridade",
                "extralinks": [ ]
            },
        ]
       },
        {
        "id": 15,
        "title": "Portal de dados abertos",
        'imageURL': IconePortal.src, 
        'imageURL2': IconePortalBranco.src, 
        'description': "Portal de dados abertos",
        "submenus": [
             {
                "id_submenu": 1,
                "label":"Portal de dados abertos",
                "imageUrl": IconeLeis.src,
                'url':"https://dados.mogidascruzes.sp.gov.br/",
                "extralinks": [ ]
            },
        ]
       },
        {
        "id": 16,
        "title": "Plano de Ação - SIAFIC",
        'imageURL': IconePortal.src, 
        'imageURL2': IconePortalBranco.src, 
        'description': "Plano de Ação - SIAFIC",
        "submenus": [
             {
                "id_submenu": 1,
                "label":"Plano de Ação - SIAFIC",
                "imageUrl": IconeLeis.src,
                'url':"/siafic",
                "extralinks": [ ]
            },
        ]
       }

      
     
     
    ]
