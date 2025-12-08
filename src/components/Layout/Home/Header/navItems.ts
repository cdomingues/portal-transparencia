export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export default [
  {
    label: "PREFEITURA",
    children: [
      {
        label: "Gabinete",
        subLabel: "",
        href: "",
        children: [
          {
            label: "Gabinete",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/gabinete/institucional",
          },
          {
            label: "Prefeita",
            subLabel: "Gabinete",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/prefeita/institucional",
          },
          {
            label: "Vice-prefeito",
            subLabel: "Gabinete",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/vice-prefeito/institucional",
          },
        ],
      },
      {
        label: "Secretaria",
        subLabel: "",
        href: "",
        children: [
          {
            label: "Agricultura e Segurança Alimentar",
            subLabel: "",
            href:"https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-agricultura-e-seguranca-alimentar/institucional",
          },
          {
            label: "Assistência Social",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-assistencia-social/institucional",
          },
          
          {
            label: "Assuntos Juridicos e Relações Institucionais",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-assuntos-juridicos-e-relacoes-institucionais/institucional",
          },
         
          {
            label: "Cultura",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-cultura/institucional",
          },
          {
            label: "Desenvolvimento Econômico e Trabalho",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-desenvolvimento-economico-e-trabalho/institucional",
          },
          {
            label: "Educação",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-educacao/institucional",
          },
          {
            label: "Esporte e Lazer",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-esportes-e-lazer/institucional",
          },
          {
            label: "Finanças",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-financas/institucional",
          },
          {
            label: "Gestão e Contratações Públicas",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-gestao-e-contratacoes-publicas/institucional",
          },
          {
            label: "Governo e Transparência",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-governo-e-transparencia/institucional",
          },
          {
            label: "Habitação Social",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-habitacao-social-e-regularizacao-fundiaria/institucional",
          },
          {
            label: "Longevidade",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-da-longevidade/institucional",
          },
          {
            label: "Mulher",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-da-mulher/institucional",
          },
          {
            label: "Meio Ambiente e Proteção Animal",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-meio-ambiente-e-protecao-animal/institucional",
          },
          {
            label: "Mobilidade e Trânsito",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-mobilidade-e-transito/institucional",
          },
          {
            label: "Obras e Infraestrutura",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-obras-e-infraestrutura/institucional",
          },
        
          {
            label: "Planejamento e Urbanismo",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-planejamento-e-urbanismo/institucional",
          },
         
          {
            label: "Saúde e Bem-Estar", 
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude-e-bem-estar/institucional",
          },
          {
            label: "Segurança",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-seguranca/institucional",
          },
          {
            label: "Serviços Urbanos e Zeladoria",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-servicos-urbanos-e-zeladoria/institucional",
          },
          
        ],
      },
      
      {
        label: "Autarquia",
        subLabel: "",
        href: "",
        children: [
          {
            label: "Cresamu",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/cresamu/institucional",
          },
          {
            label: "Iprem",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/instituto-de-previdencia-municipal/institucional",
          },
          {
            label: "Semae",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/servico-municipal-de-aguas-e-esgotos/institucional",
          },
        ],
      },
      {
        label: "Conselho",
        subLabel: "",
        href: "",
        children: [
          {
  label: "Abastecimento",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-abastecimento-de-alimentos-e-bens-de-consumo/institucional",
},
{
  label: "Alimentação Escolar",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-alimentacao-escolar/institucional",
},
{
  label: "Assistência Social",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-assistencia-social/institucional",
},
{
  label: "Cidade",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-da-cidade/institucional",
},
{
  label: "Criança e Adolescente",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-dos-direitos-da-crianca-e-do-adolescente/institucional",
},
{
  label: "Cultura",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-cultura/institucional",
},
{
  label: "Desenvolvimento Rural",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-desenvolvimento-rural/institucional",
},
{
  label: "Desporto",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-do-desporto/institucional",
},
{
  label: "Educação",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-educacao/institucional",
},
{
  label: "Fundeb",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/fundo-de-manutencao-e-desenvolvimento-da-educacao-basica/institucional",
},
{
  label: "Habitação Social",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-habitacao-social-e-regularizacao-fundiaria/institucional",
},
{
  label: "Idoso",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-do-idoso/institucional",
},
{
  label: "Igualdade Racial",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-promocao-da-igualdade-racial/institucional",
},
{
  label: "Inovação e Tecnologia",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-inovacao-e-tecnologia/institucional",
},
{
  label: "Meio Ambiente",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-meio-ambiente/institucional",
},
{
  label: "Mobilidade Urbana",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-mobilidade-urbana/institucional",
},
{
  label: "Mulher",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-da-mulher/institucional",
},
{
  label: "Parcerias Público-Privadas",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-gestor-de-parcerias-publico-privadas/institucional",
},
{
  label: "Patrimônio Histórico",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-preservacao-do-patrimonio-historico-cultural-e-artistico/institucional",
},
{
  label: "Pessoa com Deficiência",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-para-assuntos-da-pessoa-com-deficiencia/institucional",
},
{
  label: "Políticas Sobre Drogas",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-politicas-sobre-drogas/institucional",
},
{
  label: "Saúde",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-saude/institucional",
},
{
  label: "Segurança Alimentar",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-seguranca-alimentar/institucional",
},
{
  label: "Segurança Pública",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-seguranca-publica/institucional",
},
{
  label: "Turismo",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-turismo/institucional",
},
{
  label: "Tutelar",
  subLabel: "",
  href: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-tutelar/institucional",
},

        ],
      },
      {
        label: "Comite",
        subLabel: "",
        href: "",
        children: [
          {
            label: "Ciam",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/comite-integrado-de-apoio-ao-mogiano/institucional",
          },
          {
            label: "Comcriança",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/comite-gestor-dos-programas-prefeito-amigo-da-crianca-e-crianca-feliz/institucional",
          },
          {
            label: "POP RUA",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/comite-da-politica-para-a-populacao-em-situacao-de-rua/institucional",
          },
        ],
      },
      {
        label: "Orgão",
        subLabel: "",
        href: "",
        children: [
          {
            label: "Controladoria",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/controladoria-geral-do-municipio/institucional",
          },
          {
            label: "Fundo Social",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/fundo-social/institucional",
          },
          {
            label: "Ouvidoria",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/ouvidoria-geral/institucional",
          },
          {
            label: "Procon",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/procon/institucional",
          },
          {
            label: "Serviço Militar",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/servico-militar/institucional",
          },
        ],
      },
    ],
  },
  {
    label: "CARTA DE SERVIÇOS",
    children: [
      {
        label: "Agricultura e Meio Ambiente",
        subLabel: "",
        href: "https://www.mogidascruzes.sp.gov.br/servicos/agricultura-e-meio-ambiente",
      },
      {
        label: "Alvarás, Certidões e Licenças",
        subLabel: "",
        href: "https://www.mogidascruzes.sp.gov.br/servicos/alvara-certidoes-e-licencas",
      },
      {
        label: "Animais",
        subLabel: "",
        href: "https://www.mogidascruzes.sp.gov.br/servicos/animais",
      },
      {
        label: "Assistência Social e Habitação",
        subLabel: "",
        href: "https://www.mogidascruzes.sp.gov.br/servicos/assistencia-social-e-habitacao",
      },
      {
        label: "Cultura e Turismo",
        subLabel: "",
        href: "https://www.mogidascruzes.sp.gov.br/servicos/cultura-e-turismo",
      },
      {
        label: "Educação",
        subLabel: "",
        href: "https://www.mogidascruzes.sp.gov.br/servicos/educacao",
      },
      {
        label: "Emprego e Profissionalização",
        subLabel: "",
        href: "https://www.mogidascruzes.sp.gov.br/servicos/emprego-e-profissionalizacao",
      },
      {
        label: "Esporte e Lazer",
        subLabel: "",
        href: "https://www.mogidascruzes.sp.gov.br/servicos/esporte-e-lazer",
      },
      {
        label: "Impostos e Taxas",
        subLabel: "",
        href: "https://www.mogidascruzes.sp.gov.br/servicos/impostos-e-taxas",
      },
      {
        label: "Obras e Serviços Urbanos",
        subLabel: "",
        href: "https://www.mogidascruzes.sp.gov.br/servicos/obras-e-servicos-urbanos",
      },
      {
        label: "Procon, SAC e Ouvidoria",
        subLabel: "",
        href: "https://www.mogidascruzes.sp.gov.br/servicos/procon-sac-e-ouvidoria",
      },
      {
        label: "Saneamento",
        subLabel: "",
        href: "https://www.mogidascruzes.sp.gov.br/servicos/saneamento",
      },
      {
        label: "Saúde",
        subLabel: "",
        href: "https://www.mogidascruzes.sp.gov.br/servicos/saude",
      },
      {
        label: "Segurança e Fiscalização",
        subLabel: "",
        href: "https://www.mogidascruzes.sp.gov.br/servicos/seguranca-e-fiscalizacao",
      },
      {
        label: "Transporte e Trânsito",
        subLabel: "",
        href: "https://www.mogidascruzes.sp.gov.br/servicos/transporte-e-transito",
      },
    ],
  },
  {
    label: "CIDADE",
    children: [
      {
        label: "Sala de Notícias",
        subLabel: "",
        href: "",
        children: [
          {
            label: "Notícias",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/noticias",
          },
          {
            label: "Prefeitura Esclarece",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/prefeitura-esclarece",
          },
          {
            label: "Banco de Imagens",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-transparencia-e-comunicacao/banco-de-imagens",
          },
        ],
      },
      {
        label: "Guia Turístico",
        subLabel: "",
        href: "",
        children: [
          {
            label: "Mogi das Cruzes",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/mogi-das-cruzes/descobrindo-mogi-das-cruzes",
          },
          {
            label: "Pontos Turísticos",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/pontos-turisticos/todos-os-assuntos",
          },
          {
            label: "Agenda da Cidade",
            subLabel: "",
            href: "https://www.mogidascruzes.sp.gov.br/agenda-da-cidade/atracoes",
          },
        ],
      },
    ],
  },
  {
    label: "FALE CONOSCO",
    href: "https://www.mogidascruzes.sp.gov.br/fale-conosco",
  },
] as Array<NavItem>;
