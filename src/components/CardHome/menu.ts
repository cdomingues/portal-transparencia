import Diretriz_orcamentaria from "../../assets/images/icones/diretriz_orcamentaria.svg";
import CardHorizon from "../CardHorizon";
import IconeOrcamento from "../../assets/images/icones/orcamento_home.svg";
import IconeServidores from '../../assets/images/icones/servidores_home.svg'
import IconeAdmMunicipal from '../../assets/images/icones/adm_municipal_home.svg'
import IconeSocial from '../../assets/images/icones/lupa.svg'
import IconePortais from '../../assets/images/icones/portais_home.svg'
import IconePlanejamento from '../../assets/images/icones/planejamento_home.svg'
import IconesGovernoAberto from '../../assets/images/icones/governo_aberto_home.svg'
import IconeContratos from '../../assets/images/icones/3925398-budget-money-stocks-icon_111548.svg'
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
import IconeLeisDecretos from '../../assets/images/icones/leis_e_decretos.svg'
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
        'description': 'Informações sobre ciclo orçamentário, despesa, receitas',
        "submenus": [
          {"id_submenu": 1, 
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
            { label: "Pareceres do Tribunal", url: "/ciclo-orcamentario/pareceres-do-tribunal" },
            { label: "Aprovação de Contas pelo Legislativo", url: "http://www.cmmc.com.br/paginas/contas_do_executivo_municipal_e_pareceres_do_tcesp/" },
            { label: "Desonerações/ Renúncia de Receita", url: "/ciclo-orcamentario/desoneracoes-renuncias" },
          ]},
        {"id_submenu": 2, 
            "title": "Execução Orçamentária",
            'imageURL': Gestao_orcamentaria.src,
            "link":"", 
            "extralinks": [
            { label: "Receitas Gerais", url: "/gestao-orcamentaria/receitas" },
            {label: "Emendas Parlamentares",url: "/gestao-orcamentaria/receitas/receitas-emendas",},
            {label: "Despesas Gerais", url: "/gestao-orcamentaria/despesas/despesas-gerais",},
            {label: "Emendas Parlamentares",url: "/gestao-orcamentaria/despesas/despesas-emendas",},
            {label: "Propaganda e Publicidade",url: "/gestao-orcamentaria/despesas/propaganda", },
            {label: "Subvenções e Terceiro Setor", url: "/gestao-orcamentaria/despesas/subvencoes",},
            {label: "Adiantamentos",url: "/gestao-orcamentaria/despesas/adiantamentos",},
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
            {"id_submenu": 4, 
                "title": "Convênios e Transferências", 
                'imageURL': Convenios_transferencias.src,
                "link":"",
                "extralinks": [
                    { label: "Convênios", url: "/convenios-transferencias/convenios" },
                    { label: "Recebidos", url: "/convenios-transferencias/recebidos" },
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
            "title": "PROMAE", 
            'imageURL': Compras_publicas.src,
            "link":"/promae",
            "extralinks": []}
        ]
      },


      {
        "id": 2,
        "title": "CONTRATOS E LICITAÇÕES",
        'imageURL': IconeContratos.src, 
        'description': 'Informações sobre contratos, atas, licitações, acordos e termos de cooperação',
        "submenus": [
            {
                "id_submenu": 1, 
                "title": "Contratos e Atas", 
                "imageUrl":promae.src,
                "url":"",
                "extralinks": [
                    { label: "Contratos", url: "/contratos-atas/contratos"  },
                    { label: "Contratos de Gestão", url: "/contratos-atas/contratos-gestao"  },
                    { label: "Atas",  url: "/contratos-atas/atas"   },
                    { label: "Relação dos Gestores de contratos encerrados",  url: "/contratos-atas/relacao-fiscais-encerrados"  },
                    { label: "Relação dos Gestores de contratos vigentes",  url: "/contratos-atas/relacao-fiscais-vigentes"   },
                ]
            },
            {
                "id_submenu": 2, 
                "title": "Acordos e Termos", 
                "imageUrl":Acordos_termos.src,
                "url":"",
                "extralinks": [
                    {label: "Acordo de Cooperação", url: "/acordos-termos/acordo-de-cooperacao",},
                    {label: "Termo de Colaboração",url: "/acordos-termos/termo-de-colaboracao", },
                    { label: "Termo de Fomento", url: "/acordos-termos/termo-de-fomento" },
                ]},
            {"id_submenu": 3, 
                "title": "Licitações", 
                "imageUrl":Compras_publicas.src,
                "url":"",
                "extralinks": [
                    { label: "Licitações", url: "/compras-publicas/licitacoes" },
                    { label: "Pregão Eletrônico", url: "https://www.mogidascruzes.sp.gov.br/servico/alvara-certidoes-e-licencas/pregao-eletronico" },
                    {label: "Cadastro de Fornecedor",url: "https://www.mogidascruzes.sp.gov.br/servico/alvara-certidoes-e-licencas/cadastro-de-fornecedor"},
                    { label: "Portal Nacional de Contratações Públicas",url: "https://pncp.gov.br/app/editais?q=&status=recebendo_proposta&pagina=1"},
                ]}
        ]
      },
      {
        "id": 3,
        "title": "LEIS E DECRETOS",
        'imageURL': IconeLeisDecretos.src, 
        'description': "Leis, decretos e portarias",
        "submenus": [
          {
            "id_submenu": 1, 
            "label": "Pessoal", 
            "imageUrl":IconeLeis.src,
            "url":"",
            "extralinks": [
                {label: "Solicitar Acesso à Informação",url: "https://mogidascruzes.1doc.com.br/b.php?pg=wp/detalhes&itd=3", },
                {label: "Relatório de Demandas LAI",url: "https://mogidascruzes.1doc.com.br/b.php?pg=o/transparencia",},
                { label: "Acompanhe os dados genéricos dos pedidos",url: "https://mogidascruzes.1doc.com.br/b.php?pg=wp/wp&itd=3&ss=5", },
                {label: "Painel de Acompanhamento da LAI 2023",
                  },
                { label: "Painel de Acompanhamento da LAI2024", url: "https://app.powerbi.com/view?r=eyJrIjoiY2RiMWYxZWQtN2NlOS00NTNjLTkyMGEtZmNiOWVhMmYzNTJiIiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9",
                  },
            ]},
          {
            "id_submenu": 2, 
            "title": "Leis, Decretos e Portarias", 
            "imageUrl":IconeLeis.src,
            "url":"",
            "extralinks": [
                {label: "Leis, Decretos e Portarias - Início", url: "/leis-decretos-portarias/",  },
                { label: "Leis e Decretos Municipais", url: "/leis-decretos-portarias/protocolo-geral",},
                { label: "Portarias", url: "https://ged.mogidascruzes.sp.gov.br/weblink7/Browse.aspx", },
            ]},
          
        ]
      },
      {
        "id": 4,
        "title": "SERVIDORES",
        'imageURL': IconeServidores.src, 
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
                "url":"/gestao-de-pessoas/cargos-salarios",
                "extralinks": [ ]
            },
            {
                "id_submenu": 3, 
                "label": "Carga Horária", 
                "imageUrl":CargosSalarios.src,
                "url":"/gestao-de-pessoas/cargos-salarios",
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
                "id_submenu": 5, 
                "label": "Concurso Público", 
                "imageUrl":FolhaPagamento.src,
                "url":"/gestao-de-pessoas/concurso-publico",
                "extralinks": []
            },
           
        ]
      },
      {
        "id": 5,
        "title": "ADMINISTRAÇÃO MUNICIPAL",
        'imageURL': IconeAdmMunicipal.src, 
        'description': "Informações sobre a administração municipal",
        "submenus": [
            {   
                "id_submenu": 1,
                "label": "Estrutura Organizacional",   
                'imageUrl': FolhaPagamento.src,
                "url":"http://leismunicipa.is/0ji28",
                "extralinks": []
            },
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
                "url":"/perguntas-frequentes",
                "extralinks": []
            },
            {
                "id_submenu": 8, 
                "label": "Relaçao de Unidades e Equipamentos", 
                'imageUrl': Patrimonio.src,
                "url":"/patrimonio",
                "extralinks": []
            },
          
        ]
      },
      {
        "id": 6,
        "title": "CONTROLE SOCIAL",
        'imageURL': IconeSocial.src, 
        'description': "Informações sobre agenda da autoridades, controle de radares, conselhos municipais e uso de carros oficiais, etc .",
        "submenus": [
            {   
                "id_submenu": 1,
                "label": "Controle de Radares",   
                'imageUrl': IconeRadar.src,
                "url":"http://leismunicipa.is/0ji28",
                "extralinks": []
            },
            {
                'id_submenu': 2,
                "label": "Agenda do Prefeito e Vice-Prefeito",      
                'imageUrl': Agenda_aberta.src,
                "url":"",
                "extralinks": [
                    {label: "Prefeita - Mara Bertaiolli", url: "/agenda-prefeito",  },
                    {label: "Vice Prefeito - Teo Cusatis",url: "/agenda-vice-prefeito",},
                ]
            },
            {   
                "id_submenu": 3,
                "label": "Veículos Oficiais",   
                'imageUrl': IconeVeiculo.src,
                "url":"/veiculos-oficiais",
                "extralinks": []
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
            }
        ]
      },
      {
        "id": 7,
        "title": "PLANEJAMENTO E PRESTAÇÃO DE CONTAS",
        'imageURL': IconePlanejamento.src, 
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
           
        ]
      },
      {
        "id": 8,
        "title": "INICIATIVAS DE GOVERNO ABERTO",
        'imageURL': IconesGovernoAberto.src, 
        'description': "Veja aqui as principais iniciativas de governo aberto",
        "submenus": [
            {
                "id_submenu": 1,
                "label":"LGPD",
                "imageUrl": IconeLeis.src,
                'url':"/leis-decretos-portarias/lgpd",
                "extralinks": [ ]
            },
            {
                'id_submenu': 2,
                "label":"Governo aberto",
                'imageUrl': IconeLeis.src,
                'url':"/governo-aberto",
                "extralinks": [
                    {label: "Governo Aberto - Início", url:"/governo-aberto/"},
                    {label: "Portas de Participação Cidadã", url:"/governo-aberto/participacao-cidada"},
                 ]
            },
            {
                "id_submenu": 3,
                "label":"Governo Digital",
                "imageUrl": IconeLeis.src,
                'url':"/governo-digital",
                "extralinks": [ ]
            },
            {
                "id_submenu": 4,
                "label":"Diário Oficial",
                "imageUrl": IconeLeis.src,
                'url':"#",
                "extralinks": [ ]
            },
            {
                "id_submenu": 5,
                "label":"InfoDados",
                "imageUrl": IconeLeis.src,
                'url':"/infodados",
                "extralinks": [ ]
            }
        ]
      },
      {
        "id": "9",
        "title": "APLICATIVOS E PORTAIS",
        'imageURL': IconePortais.src, 
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
                'extralinks': [ ]
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
     
    ]
