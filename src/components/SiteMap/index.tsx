import React from 'react';
import {
  Box,
  Grid,
  Heading,
  Text,
  Link,
  VStack,
  StackDivider,
  useColorModeValue,
  Icon
} from '@chakra-ui/react';
import {
  FaHome,
  FaMoneyBillWave,
  FaFileContract,
  FaBook,
  FaUsers,
  FaBuilding,
  FaSearch,
  FaCalculator,
  FaLandmark,
  FaLaptopCode,
  FaSitemap
} from 'react-icons/fa';
import { MdMenuBook } from 'react-icons/md';
import { GoPeople } from 'react-icons/go';
import { RiGovernmentFill } from 'react-icons/ri';

const Sitemap = () => {
  const mainBg = useColorModeValue('blue.500', 'blue.700');
  const submenuBg = useColorModeValue('white', 'gray.800');
  const submenuBorder = useColorModeValue('gray.200', 'gray.700');
  const nestedBorder = useColorModeValue('blue.300', 'blue.500');

  const MenuCategory: React.FC<{ icon: React.ElementType; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <Box
      bg={mainBg}
      color="white"
      p={4}
      borderRadius="md"
      boxShadow="md"
      mb={5}
    >
      <Heading as="h2" size="md" display="flex" alignItems="center">
        <Icon as={icon} mr={2} />
        {title}
      </Heading>
      <Box
        bg={submenuBg}
        borderRadius="md"
        p={4}
        mt={2}
        boxShadow="sm"
      >
        {children}
      </Box>
    </Box>
  );

  const SubmenuItem: React.FC<{ title?: string; href?: string; isExternal?: boolean; children?: React.ReactNode }> = ({ title, href, isExternal, children }) => (
    <Box mb={3} pb={3} borderBottom="1px solid" borderColor={submenuBorder}>
      {title ? (
        <>
          <Heading as="h3" size="sm" color={useColorModeValue('gray.800', 'white')} mb={2}>
            {title}
          </Heading>
          {children && (
            <Box pl={4} mt={2} borderLeft="2px solid" borderColor={nestedBorder}>
              {children}
            </Box>
          )}
        </>
      ) : (
        <Link
          href={href}
          isExternal={isExternal}
          color={useColorModeValue('blue.500', 'blue.300')}
          _hover={{ color: 'blue.600', textDecoration: 'underline' }}
        >
          {children}
          {isExternal && ' ↗'}
        </Link>
      )}
    </Box>
  );

  const NestedItem: React.FC<{ href?: string; isExternal?: boolean; children: React.ReactNode }> = ({ href, isExternal, children }) => (
    <Box mb={2}>
      <Link
        href={href}
        isExternal={isExternal}
        color={useColorModeValue('gray.600', 'gray.400')}
        fontSize="sm"
        _hover={{ color: 'blue.500', textDecoration: 'underline' }}
      >
        {children}
        {isExternal && ' ↗'}
      </Link>
    </Box>
  );

  return (
    <Box p={5} maxW="1200px" mx="auto">
      <Heading as="h1" size="xl" textAlign="center" mb={8} pb={4} borderBottom="2px solid" borderColor="blue.500">
        Mapa do Site - Portal de Transparência
      </Heading>

      <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
        {/* Início */}
        <MenuCategory icon={FaHome} title="Início">
          <SubmenuItem href="/">Página Inicial</SubmenuItem>
        </MenuCategory>

        {/* Orçamento */}
        <MenuCategory icon={FaMoneyBillWave} title="Orçamento">
          <VStack divider={<StackDivider borderColor={submenuBorder} />} align="stretch">
            <SubmenuItem title="Ciclo orçamentário">
              <NestedItem href="/ciclo-orcamentario/plurianual">Plano Plurianual</NestedItem>
              <NestedItem href="/ciclo-orcamentario/diretrizes-orcamentarias">Diretrizes Orçamentárias</NestedItem>
              <NestedItem href="/ciclo-orcamentario/lei-orcamentaria-anual">Lei Orcamentária Anual</NestedItem>
              <NestedItem href="/ciclo-orcamentario/relatorio-gestao-fiscal">Relatório de Gestão Fiscal</NestedItem>
              <NestedItem href="/ciclo-orcamentario/relatorio-resumido">Relatório Resumido</NestedItem>
              <NestedItem href="/ciclo-orcamentario/balancos-anuais">Balanços Anuais</NestedItem>
              <NestedItem href="/ciclo-orcamentario/pareceres-do-tribunal">Pareceres do Tribunal</NestedItem>
              <NestedItem href="http://www.cmmc.com.br/paginas/contas_do_executivo_municipal/" isExternal>
                Aprovação de Contas pelo Legislativo
              </NestedItem>
            </SubmenuItem>

            <SubmenuItem title="Execução Orçamentária">
              <NestedItem href="/gestao-orcamentaria/receitas">Receitas Gerais</NestedItem>
              <NestedItem href="/gestao-orcamentaria/receitas/receitas-emendas">Emendas Parlamentares</NestedItem>
              <NestedItem href="/gestao-orcamentaria/despesas/despesas-gerais">Despesas Gerais</NestedItem>
              <NestedItem href="/gestao-orcamentaria/despesas/despesas-emendas">Emendas Parlamentares</NestedItem>
              <NestedItem href="/gestao-orcamentaria/despesas/propaganda">Propaganda e Publicidade</NestedItem>
              <NestedItem href="/gestao-orcamentaria/despesas/subvencoes">Subvenções e Terceiro Setor</NestedItem>
              <NestedItem href="/gestao-orcamentaria/despesas/adiantamentos">Adiantamentos</NestedItem>
              <NestedItem href="/gestao-orcamentaria/despesas/despesas-restos">Restos a Pagar</NestedItem>
              <NestedItem href="/gestao-orcamentaria/despesas/pagamentos">Ordem Cronológica de Pagamentos</NestedItem>
              <NestedItem href="/gestao-orcamentaria/divida-ativa">Divida ativa</NestedItem>
              <NestedItem href="/gestao-orcamentaria/incentivos-fiscais">Incentivos Fiscais</NestedItem>
            </SubmenuItem>

            <SubmenuItem title="Execução Extra Orçamentária">
              <NestedItem href="/gestao-extra-orcamentaria/receitas">Receitas Extra Orçamentárias</NestedItem>
              <NestedItem href="/gestao-extra-orcamentaria/despesas">Despesas Extra Orçamentárias</NestedItem>
            </SubmenuItem>

            <SubmenuItem title="Execução Orçamentária Covid 19">
              <NestedItem href="/covid/receitas">Receitas</NestedItem>
              <NestedItem href="/covid/despesas">Despesas</NestedItem>
              <NestedItem href="http://covid19.pmmc.com.br/" isExternal>Compras COVID-19</NestedItem>
            </SubmenuItem>

            <SubmenuItem title="Convênios e Transferências">
              <NestedItem href="/convenios-transferencias/convenios">Convênios</NestedItem>
              <NestedItem href="/convenios-transferencias/recebidos">Recebidos</NestedItem>
            </SubmenuItem>

            <SubmenuItem href="http://consultacompras.pmmc.com.br/pagamento-fornecedor" isExternal>
              Consulta de Fornecedores a Pagamentos
            </SubmenuItem>

            <SubmenuItem href="/promae">
              PROMAE - Programa Mogiano de Atração de Investimentos e Geração de Empregos
            </SubmenuItem>
          </VStack>
        </MenuCategory>

        {/* Contratos e licitações */}
        <MenuCategory icon={FaFileContract} title="Contratos e licitações">
          <VStack divider={<StackDivider borderColor={submenuBorder} />} align="stretch">
            <SubmenuItem title="Contratos e ATAS">
              <NestedItem href="/contratos-atas/contratos">Contratos</NestedItem>
              <NestedItem href="/contratos-atas/contratos-gestao">Contratos de gestão</NestedItem>
              <NestedItem href="/contratos-atas/atas">ATAS</NestedItem>
              <NestedItem href="/contratos-atas/relacao-fiscais-encerrados">Relação dos Gestores de contratos encerrados</NestedItem>
              <NestedItem href="/contratos-atas/relacao-fiscais-vigentes">Relação dos Gestores de contratos vigentes</NestedItem>
            </SubmenuItem>

            <SubmenuItem title="Licitações">
              <NestedItem href="/compras-publicas/licitacoes">Licitações</NestedItem>
              <NestedItem href="https://www.mogidascruzes.sp.gov.br/servico/alvara-certidoes-e-licencas/pregao-eletronico" isExternal>
                Pregão Eletrônico
              </NestedItem>
              <NestedItem href="https://www.mogidascruzes.sp.gov.br/servico/alvara-certidoes-e-licencas/cadastro-de-fornecedor" isExternal>
                Cadastro de Fornecedor
              </NestedItem>
              <NestedItem href="https://pncp.gov.br/app/editais?q=&status=recebendo_proposta&pagina=1" isExternal>
                Portal Nacional de Contratações Públicas
              </NestedItem>
            </SubmenuItem>

            <SubmenuItem title="Acordos e termos">
              <NestedItem href="/acordos-termos/acordo-de-cooperacao">Acordo de Cooperação</NestedItem>
              <NestedItem href="/acordos-termos/termo-de-colaboracao">Termo de Colaboração</NestedItem>
              <NestedItem href="/acordos-termos/termo-de-fomento">Termo de Fomento</NestedItem>
            </SubmenuItem>
          </VStack>
        </MenuCategory>

        {/* Leis e decretos */}
        <MenuCategory icon={MdMenuBook} title="Leis e decretos">
          <VStack divider={<StackDivider borderColor={submenuBorder} />} align="stretch">
            <SubmenuItem href="/leis-decretos-portarias/protocolo-geral">Leis e Decretos Municipais</SubmenuItem>
            
            <SubmenuItem href="https://ged.mogidascruzes.sp.gov.br/weblink7/Browse.aspx" isExternal>
              Portarias
            </SubmenuItem>

            <SubmenuItem title="LAI - Lei de Acesso à Informação">
              <NestedItem href="/acesso-a-informacao/">LAI - Lei de Acesso à Informação - Início</NestedItem>
              <NestedItem href="https://mogidascruzes.1doc.com.br/b.php?pg=wp/detalhes&itd=3" isExternal>
                Solicitar Acesso à Informação
              </NestedItem>
              <NestedItem href="https://mogidascruzes.1doc.com.br/b.php?pg=o/transparencia" isExternal>
                Relatório de Demandas LAI
              </NestedItem>
              <NestedItem href="https://mogidascruzes.1doc.com.br/b.php?pg=wp/wp&itd=3&ss=5" isExternal>
                Acompanhe os dados genéricos dos pedidos
              </NestedItem>
              <NestedItem href="https://app.powerbi.com/view?r=eyJrIjoiY2ZmODAzZDUtMDE2YS00ZWYzLWJhZGQtMWE4Nzc3OWQyMDgxIiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9" isExternal>
                Painel de Acompanhamento da LAI 2023
              </NestedItem>
              <NestedItem href="https://app.powerbi.com/view?r=eyJrIjoiY2RiMWYxZWQtN2NlOS00NTNjLTkyMGEtZmNiOWVhMmYzNTJiIiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9" isExternal>
                Painel de Acompanhamento da LAI2024
              </NestedItem>
            </SubmenuItem>
          </VStack>
        </MenuCategory>

        {/* Servidores */}
        <MenuCategory icon={GoPeople} title="Servidores">
          <VStack divider={<StackDivider borderColor={submenuBorder} />} align="stretch">
            <SubmenuItem href="/gestao-de-pessoas/folha-pagamento">Folha de Pagamento</SubmenuItem>
            <SubmenuItem href="/gestao-de-pessoas/cargos-e-salarios">Cargos e Salários</SubmenuItem>
            <SubmenuItem href="/gestao-de-pessoas/carga-horaria">Carga Horária</SubmenuItem>
            <SubmenuItem href="/gestao-de-pessoas/diarias-viagens">Diárias</SubmenuItem>
            <SubmenuItem href="/gestao-de-pessoas/concurso-publico">Concurso Público</SubmenuItem>
          </VStack>
        </MenuCategory>

        {/* Administração municipal */}
        <MenuCategory icon={FaBuilding} title="Administração municipal">
          <VStack divider={<StackDivider borderColor={submenuBorder} />} align="stretch">
            <SubmenuItem href="http://leismunicipa.is/0ji28" isExternal>Estrutura Organizacional</SubmenuItem>
            <SubmenuItem href="/perfil-do-municipio">Perfil do município</SubmenuItem>
            <SubmenuItem href="/permissionarios">Feiras, Mercado Municipal e Mercado do Produto</SubmenuItem>
            
            <SubmenuItem title="Institutos e autarquias">
              <NestedItem href="http://www.transparenciasemae.pmmc.com.br/" isExternal>Transparência SEMAR</NestedItem>
              <NestedItem href="https://iprem.mogidascruzes.sp.gov.br/?page_id=1542" isExternal>Transparência IPREM</NestedItem>
            </SubmenuItem>

            <SubmenuItem href="/patrimonio">Patrimonio</SubmenuItem>
            <SubmenuItem href="/perguntas-frequentes">Perguntas frequentes</SubmenuItem>
            <SubmenuItem href="https://www.mogidascruzes.sp.gov.br/unidades-e-equipamentos/todos-os-assuntos" isExternal>
              Equipamentos e unidades
            </SubmenuItem>
          </VStack>
        </MenuCategory>

        {/* Controle social */}
        <MenuCategory icon={FaSearch} title="Controle social">
          <VStack divider={<StackDivider borderColor={submenuBorder} />} align="stretch">
            <SubmenuItem href="/controle-de-radares">Controle de radares</SubmenuItem>
            
            <SubmenuItem title="Agenda aberta">
              <NestedItem href="/agenda-aberta/agenda-prefeita">Prefeita - Mara Bertaiolli</NestedItem>
              <NestedItem href="/agenda-aberta/agenda-viceprefeito">Vice Prefeito - Teo Cusatis</NestedItem>
            </SubmenuItem>

            <SubmenuItem href="/veiculos-oficiais">Veículos oficiais</SubmenuItem>
            <SubmenuItem href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude-e-bem-estar/organizacoes-sociais" isExternal>
              Organizações sociais
            </SubmenuItem>
            <SubmenuItem href="https://www.mogidascruzes.sp.gov.br/servico/ouvidoria" isExternal>Ouvidoria</SubmenuItem>
            
            <SubmenuItem title="Conselhos municipais">
              <NestedItem href="https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-abastecimento-de-alimentos-e-bens-de-consumo/institucional" isExternal>
                Abastecimento
              </NestedItem>
              <NestedItem href="https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-alimentacao-escolar/institucional" isExternal>
                Alimentação Escolar
              </NestedItem>
              {/* Adicione os outros conselhos seguindo o mesmo padrão */}
              <NestedItem href="https://www.mogidascruzes.sp.gov.br/pagina/conselho-tutelar/institucional" isExternal>
                Tutelar
              </NestedItem>
            </SubmenuItem>
          </VStack>
        </MenuCategory>

        {/* Planejamento e prestação de contas */}
        <MenuCategory icon={FaCalculator} title="Planejamento e prestação de contas">
          <VStack divider={<StackDivider borderColor={submenuBorder} />} align="stretch">
            <SubmenuItem href="/relatorio-gestao">Relatório de gestão</SubmenuItem>
            
            <SubmenuItem title="Planos municipais">
              <NestedItem href="/planos-municipais/plano-municipal-saude">Plano municipal de saúde</NestedItem>
              <NestedItem href="/planos-municipais/plano-municipal-educacao">Plano de municipal de educação</NestedItem>
              <NestedItem href="/planos-municipais/plano-municipal-diversos">Planos Municipais Diversos</NestedItem>
            </SubmenuItem>

            <SubmenuItem href="/politicas-programas">Políticas e programas</SubmenuItem>
            <SubmenuItem href="/indicadores">Prestação de contas simplificada</SubmenuItem>
            <SubmenuItem href="http://localhost:3000/ciclo-orcamentario/prestacao-de-contas">
              Prestação à CMMC
            </SubmenuItem>
          </VStack>
        </MenuCategory>

        {/* Iniciativas de governo aberto */}
        <MenuCategory icon={RiGovernmentFill} title="Iniciativas de governo aberto">
          <VStack divider={<StackDivider borderColor={submenuBorder} />} align="stretch">
            <SubmenuItem href="/leis-decretos-portarias/lgpd">LGPD</SubmenuItem>
            
            <SubmenuItem title="Governo aberto">
              <NestedItem href="/governo-aberto/">Governo aberto - Início</NestedItem>
              <NestedItem href="/governo-aberto/participacao-cidada">Portas de Participação Cidadã</NestedItem>
            </SubmenuItem>

            <SubmenuItem href="/governo-digital">Governo digital</SubmenuItem>
            <SubmenuItem href="#">Diário oficial</SubmenuItem>
          </VStack>
        </MenuCategory>

        {/* Aplicativos e portais */}
        <MenuCategory icon={FaLaptopCode} title="Aplicativos e portais">
          <VStack divider={<StackDivider borderColor={submenuBorder} />} align="stretch">
            <SubmenuItem title="Portal de obras">
              <NestedItem href="/controle-de-obras/pesquisar-obras">Pesquisar obras</NestedItem>
              <NestedItem href="/controle-de-obras/obras-publicas">Versão antiga</NestedItem>
            </SubmenuItem>

            <SubmenuItem href="https://visuas.mogidascruzes.sp.gov.br/" isExternal>VISUAS</SubmenuItem>
            <SubmenuItem href="https://geomogi.mogidascruzes.sp.gov.br/" isExternal>GeoMogi</SubmenuItem>
            <SubmenuItem href="https://geomogi.mogidascruzes.sp.gov.br/" isExternal>Ônibus municipais</SubmenuItem>
            <SubmenuItem href="https://www.mogidascruzes.sp.gov.br/pagina/ouvidoria-geral/colab" isExternal>
              Ouvidoria - Colab
            </SubmenuItem>
            <SubmenuItem href="https://www.mogidascruzes.sp.gov.br/agenda-da-cidade/atracoes" isExternal>
              Agenda da cidade
            </SubmenuItem>
            <SubmenuItem href="https://www.mogidascruzes.sp.gov.br/pontos-turisticos/todos-os-assuntos" isExternal>
              Pontos turísticos
            </SubmenuItem>
          </VStack>
        </MenuCategory>

      
      </Grid>
    </Box>
  );
};

export default Sitemap;