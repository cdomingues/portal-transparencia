import React, { useState } from 'react';
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Icon,
  HStack,
  Text,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Show,
  Hide
} from '@chakra-ui/react';
import { 
  FaChevronDown, 
  FaHome, 
  FaBoxes, 
  FaTools, 
  FaInfoCircle, 
  FaEnvelope,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import  {TbZoomMoney}  from "react-icons/tb";
import { FaFileContract } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md"; 
import { GoPeople } from "react-icons/go";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { RiGovernmentFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";
import { sub } from 'date-fns';

const MenuHorizontalChakra = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const menuItems = [
    {
      label: 'Início',
      icon: FaHome,
      href: '/',
      submenu: null
    },
    {
      label: 'Orçamento',
      icon: TbZoomMoney,
      href: '#',
      submenu: [
        { label: 'Ciclo orçamentário', href: '#',
          submenu: [
            { label: "Plano Plurianual", href: "/ciclo-orcamentario/plurianual" },
            { label: "Diretrizes Orçamentárias", href: "/ciclo-orcamentario/diretrizes-orcamentarias" },
            { label: "Lei Orcamentária Anual", href: "/ciclo-orcamentario/lei-orcamentaria-anual" },
            { label: "Relatório de Gestão Fiscal", href: "/ciclo-orcamentario/relatorio-gestao-fiscal" },
            { label: "Relatório Resumido", href: "/ciclo-orcamentario/relatorio-resumido" },
            { label: "Balanços Anuais", href: "/ciclo-orcamentario/balancos-anuais" },
            { label: "Pareceres do Tribunal", href: "/ciclo-orcamentario/pareceres-do-tribunal" },
            { label: "Aprovação de Contas pelo Legislativo", href: "http://www.cmmc.com.br/paginas/contas_do_executivo_municipal_e_pareceres_do_tcesp/" }
          ]
         },
        
        { 
          label: 'Execução Orçamentária', 
          href: '#',
          submenu: [
            { label: "Receitas Gerais", href: "/gestao-orcamentaria/receitas" },
            {label: "Emendas Parlamentares", href: "/gestao-orcamentaria/receitas/receitas-emendas",},
            {label: "Despesas Gerais", href: "/gestao-orcamentaria/despesas/despesas-gerais",},
            {label: "Emendas Parlamentares", href: "/gestao-orcamentaria/despesas/despesas-emendas", },
            {label: "Propaganda e Publicidade", href: "/gestao-orcamentaria/despesas/propaganda", },
            {label: "Subvenções e Terceiro Setor", href: "/gestao-orcamentaria/despesas/subvencoes",},
            {label: "Adiantamentos", href: "/gestao-orcamentaria/despesas/adiantamentos",},
            {label: "Restos a Pagar",href: "/gestao-orcamentaria/despesas/despesas-restos",},
            {label: "Ordem Cronológica de Pagamentos",href: "/gestao-orcamentaria/despesas/pagamentos",},            
            {label: "Divida ativa", href: "/gestao-orcamentaria/divida-ativa", },
            {label: "Incentivos Fiscais", href: "/gestao-orcamentaria/incentivos-fiscais",},
          ]
        },
        { 
          label: 'Execução Extra Orçamentária', 
          href: '#',
          submenu: [
            { label: "Receitas Extra Orçamentárias",href: "/gestao-extra-orcamentaria/receitas", },
             {label: "Despesas Extra Orçamentárias",href: "/gestao-extra-orcamentaria/despesas", },
          ]
        },
        { 
          label: 'Execução Orçamentária Covid 19', 
          href: '#',
          submenu: [
            { label: "Receitas",href: "/covid/receitas", },
            {label: "Despesas",href: "/covid/despesas", },
            {label: "Compras COVID-19",href: "http://covid19.pmmc.com.br/", },
          ]
        },
        { 
          label: 'Convênios e Transferências', 
          href: '#',
          submenu: [
            { label: "Convênios",href: "/convenios-transferencias/convenios", },
            {label: "Recebidos",href: "/convenios-transferencias/recebidos", },
           
          ]
        },
        { label: 'Consulta de Fornecedores a Pagamentos', href: 'http://consultacompras.pmmc.com.br/pagamento-fornecedor' },
        { label: 'PROMAE - Programa Mogiano de Atração de Investimentos e Geração de Empregos', href: '/promae' }
      ]
    },
    {
      label: 'Contratos e licitações',
      icon: FaFileContract,
      href: '#',
      submenu: [
        { label: 'Contratos e Atas  ', href: '#',
          submenu: [
            { label: "Contratos",href: "/contratos-atas/contratos", },
            {label: "Contratos de gestão",href: "/contratos-atas/contratos-gestao", },
            {label: "Atas",href: "/contratos-atas/atas", },
            {label: "Relação dos Gestores de contratos encerrados",href: "/contratos-atas/relacao-fiscais-encerrados", },
            {label: "Relação dos Gestores de contratos vigentes",href: "/contratos-atas/relacao-fiscais-vigentes", },
           
          ] },
          { label: 'Licitações', href: '#',
            submenu: [
              { label: "Licitações", href: "/compras-publicas/licitacoes" }, 
              { label: "Pregão Eletrônico", href: "https://www.mogidascruzes.sp.gov.br/servico/alvara-certidoes-e-licencas/pregao-eletronico", },
               {label: "Cadastro de Fornecedor",href: "https://www.mogidascruzes.sp.gov.br/servico/alvara-certidoes-e-licencas/cadastro-de-fornecedor", },
               { label: "Portal Nacional de Contratações Públicas",href: "https://pncp.gov.br/app/editais?q=&status=recebendo_proposta&pagina=1", },
             
            ] },
            { label: 'Acordos e termos', href: '#',
              submenu: [
                {label: "Acordo de Cooperação", href: "/acordos-termos/acordo-de-cooperacao",},
                {label: "Termo de Colaboração",href: "/acordos-termos/termo-de-colaboracao", },
                { label: "Termo de Fomento", href: "/acordos-termos/termo-de-fomento" },
            ] },
         ]
    },
   
    {
      label: 'Leis e decretos',
      icon: MdMenuBook ,
      href: '#',
      submenu: [
        { label: 'Leis e Decretos Municipais', href: 'https://leismunicipais.com.br/prefeitura/sp/mogi-das-cruzes' },
        { label: 'Portarias', href: 'https://ged.mogidascruzes.sp.gov.br/weblink7/Browse.aspx' },
        { label: 'LAI - Lei de Acesso à Informação', href: '#',
          submenu: [  
            {
              label: "LAI - Lei de Acesso à Informação - Início",
              href: "/acesso-a-informacao/",
            },
            {
              label: "Solicitar Acesso à Informação",
              href: "https://mogidascruzes.1doc.com.br/b.php?pg=wp/detalhes&itd=3",
            },
            {
              label: "Relatório de Demandas LAI",
              href: "https://mogidascruzes.1doc.com.br/b.php?pg=o/transparencia",
            },
            {
              label: "Acompanhe os dados genéricos dos pedidos",
              href: "https://mogidascruzes.1doc.com.br/b.php?pg=wp/wp&itd=3&ss=5",
            },
            {
              label: "Painel de Acompanhamento da LAI 2023",
              href: "https://app.powerbi.com/view?r=eyJrIjoiY2ZmODAzZDUtMDE2YS00ZWYzLWJhZGQtMWE4Nzc3OWQyMDgxIiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9",
            },
            {
              label: "Painel de Acompanhamento da LAI2024",
              href: "https://app.powerbi.com/view?r=eyJrIjoiY2RiMWYxZWQtN2NlOS00NTNjLTkyMGEtZmNiOWVhMmYzNTJiIiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9",
            },
          ]
         }
      ]
    },
    {
      label: 'Servidores',
      icon: GoPeople,
      href: '#',
      submenu: [
        { label: 'Folha de Pagamento', href: '/gestao-de-pessoas/folha-pagamento' },
        { label: 'Concurso Público', href: '/gestao-de-pessoas/concurso-publico' },
        { label: 'Cargos e Salários', href: '/gestao-de-pessoas/cargos-e-salarios' },
        { label: 'Carga Horária', href: '/gestao-de-pessoas/carga-horaria' },
        { label: 'Diárias', href: '/gestao-de-pessoas/diarias-viagens' },
       
        
      ]
    },
    {
      label: 'Administração municipal',
      icon: FaBuildingColumns ,
      href: '#',
      submenu: [
        { label: 'Estrutura Organizacional', href: 'http://leismunicipa.is/0ji28' },
        { label: 'Perfil do município', href: '/perfil-do-municipio' },
        { label: 'Feiras, Mercado Municipal e Mercado do ProdutoFeiras, Mercado Municipal e Mercado do Produto', href: '/permissionarios' },
        { label: 'Institutos e autarquias', href: '#' ,
          submenu: [
            { label: 'Transparência SEMAR', href: 'http://www.transparenciasemae.pmmc.com.br/' },
            { label: 'Transparência IPREM', href: 'https://iprem.mogidascruzes.sp.gov.br/?page_id=1542' },]
        },
        { label: 'Patrimonio', href: '/patrimonio' },
        { label: 'Perguntas frequentes', href: '/perguntas-frequentes' },
        { label: 'Equipamentos e unidades', href: 'https://www.mogidascruzes.sp.gov.br/unidades-e-equipamentos/todos-os-assuntos' },
        
      ]
    },
    {
      label: 'Controle social',
      icon: FaSearch,
      href: '#',
      submenu: [
        
        { label: 'Agenda aberta', href: '#',
          submenu: [
            { label: 'Prefeita - Mara Bertaiolli', href: '/agenda-aberta/agenda-prefeita' },
            { label: 'Vice Prefeito - Teo Cusatis', href: '/agenda-aberta/agenda-viceprefeito' },
           
          ] 
         },
         { label: 'Controle de radares', href: '/controle-de-radares' },
        { label: 'Veículos oficiais', href: '/veiculos-oficiais' },
        { label: 'Organizações sociais', href: 'https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude-e-bem-estar/organizacoes-sociais' },
        { label: 'Ouvidoria', href: 'https://www.mogidascruzes.sp.gov.br/pagina/ouvidoria-geral/colab' },
        { label: 'Conselhos municipais', href: '#',
          submenu:[
            { label: "Abastecimento", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-abastecimento-de-alimentos-e-bens-de-consumo/institucional" },
            { label: "Alimentação Escolar", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-alimentacao-escolar/institucional" },
            { label: "Assistência Social", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-assistencia-social/institucional" },
            { label: "Cidade", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-da-cidade/institucional" },
            { label: "Criança e Adolescente", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-dos-direitos-da-crianca-e-do-adolescente/institucional" },
            { label: "Cultura", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-cultura/institucional" },
            { label: "Desenvolvimento Rural", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-desenvolvimento-rural/institucional" },
            { label: "Desporto", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-do-desporto/institucional" },
            { label: "Educação", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-educacao/institucional" },
            { label: "Fundeb", href: "https://www.mogidascruzes.sp.gov.br/pagina/fundo-de-manutencao-e-desenvolvimento-da-educacao-basica/institucional" },
            { label: "Idoso", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-do-idoso/institucional" },
            { label: "Igualdade Racial", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-promocao-da-igualdade-racial/institucional" },
            { label: "Inovação e Tecnologia", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-inovacao-e-tecnologia/institucional" },
            { label: "Meio Ambiente", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-mogiano-de-meio-ambiente/institucional" },
            { label: "Mobilidade Urbana", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-mobilidade-urbana/institucional" },
            { label: "Mulher", href: "/pagina/conselho-da-mulher/institucional" },
            { label: "Parcerias Público-Privadas", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-gestor-de-parcerias-publico-privadas/institucional" },
            { label: "Patrimônio Histórico", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-preservacao-do-patrimonio-historico-cultural-e-artistico/institucional" },
            { label: "Pessoa com Deficiência", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-para-assuntos-da-pessoa-com-deficiencia/institucional" },
            { label: "Políticas Sobre Drogas", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-politicas-sobre-drogas/institucional" },
            { label: "Saúde", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-saude/institucional" },
            { label: "Segurança Alimentar", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-seguranca-alimentar/institucional" },
            { label: "Segurança Pública", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-seguranca-publica/institucional" },
            { label: "Turismo", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-turismo/institucional" },
            { label: "Tutelar", href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-tutelar/institucional" }
          ]
          
         },
       
      ]
    },
    {
      label: 'Planejamento e prestação de contas',
      icon: FaCalculator,
      href: '#',
      submenu: [
        { label: 'Relatório de gestão', href: '/relatorio-gestao' },
        { label: 'Planos municipais', href: '#',
          submenu:[
            { label: "Plano municipal de saúde", href: "/planos-municipais/plano-municipal-saude", },
            { label: "Plano de municipal de educação", href: "/planos-municipais/plano-municipal-educacao", },
            { label: "Planos Municipais Diversos ", href: "/planos-municipais/plano-municipal-diversos", },
          ]
         },
        { label: 'Políticas e programas', href: '/politicas-programas' },
        { label: 'Prestação de contas simplificada', href: '/governo-aberto/prestacao-contas' },
        { label: 'Prestação à CMMC', href: '/ciclo-orcamentario/prestacao-de-contas' },
      ]
    },
    {
      label: 'Iniciativas de governo aberto',
      icon: RiGovernmentFill,
      href: '#',
      submenu: [
        { label: 'LGPD', href: '/leis-decretos-portarias/lgpd' },
        { label: 'Governo aberto', href: '#',
          submenu: [
            { label: 'Governo aberto - Início', href: '/governo-aberto/' },      
            { label: 'Portas de Participação Cidadã', href: '/governo-aberto/participacao-cidada' },
            ]
         },
        { label: 'Governo digital', href: '/governo-digital' },
        { label: 'Diário oficial', href: '#' },
        { label: 'InfoDados', href: '/infodados' },
      ]
    },
    {
      label: 'Aplicativos e portais',
      icon: FaLaptopCode,
      href: '#',
      submenu: [
        
        { label: 'Portal de obras', href: '#',
          submenu: [
            { label: 'Pesquisar obras', href: '/controle-de-obras/pesquisar-obras' },      
            { label: 'Versão antiga', href: '/controle-de-obras/obras-publicas' },
            ]
         },
         { label: 'VISUAS', href: 'https://visuas.mogidascruzes.sp.gov.br/' },
        { label: 'GeoMogi', href: 'https://geomogi.mogidascruzes.sp.gov.br/' },
        { label: 'Ônibus municipais', href: 'https://geomogi.mogidascruzes.sp.gov.br/' },
        { label: 'Ouvidoria - Colab', href: 'https://www.mogidascruzes.sp.gov.br/pagina/ouvidoria-geral/colab' }, 
        { label: 'Agenda da cidade', href: 'https://www.mogidascruzes.sp.gov.br/agenda-da-cidade/atracoes' }, 
        { label: 'Pontos turísticos', href: 'https://www.mogidascruzes.sp.gov.br/pontos-turisticos/todos-os-assuntos' },
      ]
    },
    {
      label: 'Mapa do site',
      icon: FaSitemap,
      href: '/mapa-do-site',
      submenu: null
    }
  ];

  const isExternalLink = (href: string) => href.startsWith('http');
  
  const renderDesktopMenu = () => (
    <Hide below="lg">
      <Flex as="nav" align="center" width="100%"  wrap="wrap">
        {menuItems.map((item, index) => (
          item.submenu ? (
            <Menu key={index} >
              <MenuButton 
                as={Button} 
                rightIcon={<Icon as={FaChevronDown} />}
                variant="ghost"
                color="white"
                _hover={{ bg: 'gray.700' , color: 'white'}}
                _expanded={{ bg: 'gray.700' }}
                mx={1}
                leftIcon={<Icon as={item.icon} />}
              >
                {item.label}
              </MenuButton>
              <MenuList bg="gray.700" borderColor="gray.600">
                {item.submenu.map((subItem, subIndex) => (
                  subItem.submenu ? (
                    <Menu key={subIndex}>
                      <MenuButton 
                        as={Button} 
                        variant="ghost"
                        rightIcon={<Icon as={FaChevronDown} />}
                        _hover={{ bg: 'gray.600', color: 'white' }}
                        _focus={{ bg: 'gray.600' }}
                        w="100%"
                        justifyContent="space-between"
                        color={'lightgray'}
                      >
                        <HStack>
                          <Text>{subItem.label}</Text>
                        </HStack>
                      </MenuButton>
                      <MenuList 
                        bg="gray.700" 
                        borderColor="gray.600" 
                        ml="100%"
                        mt={-6}
                        
                      >
                        {subItem.submenu.map((nestedItem, nestedIndex) => (
                          <MenuItem 
                            key={nestedIndex}
                            as="a" 
                            href={nestedItem.href}
                            target={isExternalLink(nestedItem.href) ? "_blank" : undefined}
                            rel={isExternalLink(nestedItem.href) ? "noopener noreferrer" : undefined}
                            _hover={{ bg: 'gray.600', color: 'white' }}
                            _focus={{ bg: 'gray.600' }}
                          >
                            {nestedItem.label}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Menu>
                  ) : (
                    <MenuItem 
                      key={subIndex}
                       
                      as="a" 
                      href={subItem.href} 
                       bg= 'gray.700'
                       target={isExternalLink(subItem.href) ? "_blank" : undefined}
                       rel={isExternalLink(subItem.href) ? "noopener noreferrer" : undefined}
                       fontWeight='bold'
                       color='lightgray'
                      _hover={{ bg: 'gray.600' }}
                      _focus={{ bg: 'gray.600' }}
                    >
                      {subItem.label}
                    </MenuItem>
                  )
                ))}
              </MenuList>
            </Menu>
          ) : (
            <Button 
              key={index}
              as="a" 
              href={item.href}
            target={isExternalLink(item.href) ? "_blank" : undefined}
             rel={isExternalLink(item.href) ? "noopener noreferrer" : undefined}
              
              variant="ghost" 
              color="white" 
              _hover={{ bg: 'gray.700' }}
              mx={1}
              leftIcon={<Icon as={item.icon} />}
            >
              {item.label}
            </Button>
          )
        ))}
      </Flex>
    </Hide>
  );

  const renderMobileMenu = () => (
    <Show below="lg">
      <IconButton
        aria-label="Abrir menu"
        icon={isOpen ? <FaTimes /> : <FaBars />}
        onClick={isOpen ? onClose : onOpen}
        variant="ghost"
        color="white"
        size="lg"
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="gray.800" color="white">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" borderColor="gray.700">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={4} mt={4}>
              {menuItems.map((item, index) => (
                item.submenu ? (
                  <Box key={index}>
                    <Button
                      w="100%"
                      justifyContent="space-between"
                      rightIcon={<Icon as={FaChevronDown} />}
                      variant="ghost"
                      color="white"
                      _hover={{ bg: 'gray.700' }}
                      onClick={() => setMobileSubmenu(mobileSubmenu === item.label ? null : item.label)}
                      leftIcon={<Icon as={item.icon} />}
                    >
                      {item.label}
                    </Button>
                    {mobileSubmenu === item.label && (
                      <VStack pl={6} mt={2} align="stretch" spacing={2}>
                        {item.submenu.map((subItem, subIndex) => (
                          subItem.submenu ? (
                            <Box key={subIndex}>
                              <Button
                                w="100%"
                                justifyContent="space-between"
                                rightIcon={<Icon as={FaChevronDown} />}
                                variant="ghost"
                                color="white"
                                _hover={{ bg: 'gray.700' }}
                                onClick={() => setMobileSubmenu(mobileSubmenu === subItem.label ? null : subItem.label)}
                              >
                                {subItem.label}
                              </Button>
                              {mobileSubmenu === subItem.label && (
                                <VStack pl={6} mt={2} align="stretch" spacing={2}>
                                  {subItem.submenu.map((nestedItem, nestedIndex) => (
                                    <Button
                                      key={nestedIndex}
                                      as="a"
                                      href={subItem.href}
                                      target={isExternalLink(subItem.href) ? "_blank" : undefined}
                                      rel={isExternalLink(subItem.href) ? "noopener noreferrer" : undefined}
                                      variant="ghost"
                                      color="white"
                                      _hover={{ bg: 'gray.700' }}
                                      justifyContent="flex-start"
                                      onClick={onClose}
                                    >
                                      {nestedItem.label}
                                    </Button>
                                  ))}
                                </VStack>
                              )}
                            </Box>
                          ) : (
                            <Button
                              key={subIndex}
                              as="a"
                              href={subItem.href}
                              variant="ghost"
                              color="white"
                              _hover={{ bg: 'gray.700' }}
                              justifyContent="flex-start"
                              onClick={onClose}
                            >
                              {subItem.label}
                            </Button>
                          )
                        ))}
                      </VStack>
                    )}
                  </Box>
                ) : (
                  <Button
                    key={index}
                    as="a"
                    href={item.href}
                    target={isExternalLink(item.href) ? "_blank" : undefined}
                    rel={isExternalLink(item.href) ? "noopener noreferrer" : undefined}
                    variant="ghost"
                    color="white"
                    _hover={{ bg: 'gray.700' }}
                    justifyContent="flex-start"
                    leftIcon={<Icon as={item.icon} />}
                    onClick={onClose}
                  >
                    {item.label}
                  </Button>
                )
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Show>
  );

  return (
    <Box bg="gray.800" px={4} py={2}>
      <Flex align="center" justify="space-between">
        {renderMobileMenu()}
        {renderDesktopMenu()}
      </Flex>
    </Box>
  );
};

export default MenuHorizontalChakra;