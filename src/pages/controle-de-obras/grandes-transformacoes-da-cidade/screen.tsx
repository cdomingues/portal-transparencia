import LayoutConstructions from "../../../components/LayoutConstructions";
import * as Text from "../../../styles/text";
import * as Style from "./styles";

const BigTransformationsScreen = () => {
  return (
    <LayoutConstructions
      title="Grandes Mudanças"
      bannerSrc="https://cdn.buenosaires.gob.ar/BAObrasrenovado/FOTOSBAOBRAS2022/Mesa_de_trabajo_1.png"
      bannerTitle="Grandes Mudanças na cidade"
      bannerDescription="Conocé más sobre el sitio que pone a disposición de los vecinos y
  las vecinas toda la información sobre las obras públicas que están
  transformando los 48 barrios de la Ciudad."
    >
      <Style.Description>
        <Text.Heading5Regular>
          BA Obras pone a disposición de los vecinos y las vecinas toda la
          información sobre las obras públicas que están transformando la
          Ciudad.
        </Text.Heading5Regular>

        <Text.Heading5Regular marginTop={12}>
          El portal, que forma parte del Ecosistema de Gobierno Abierto de la
          Ciudad de Buenos Aires, es el resultado del Compromiso de Ciudad de
          publicar un sistema online de obras públicas abiertas, asumido en el
          marco del Tercer Plan de Acción Nacional de Gobierno Abierto. Desde
          2015, La Ciudad forma parte del Programa de Entidades Subnacionales de
          la Alianza para el Gobierno Abierto, iniciativa global con más de 69
          países miembros que promueve la transparencia, la innovación
          gubernamental y la participación de la ciudadanía, a través del uso de
          nuevas tecnologías y del diálogo permanente con la sociedad civil.
        </Text.Heading5Regular>

        <Text.Heading5Regular marginTop={12}>
          En el sitio, podés conocer las obras destacadas del plan de obra
          pública de la Ciudad en materia de transformación urbana, espacio
          público y verde, transformación educativa, transporte público,
          integración de barrios populares, seguridad y convivencia, salud y
          calidad de vida, y cultura. Además, podés ver las obras que se
          realizaron y las que están planificadas en cada uno de los 48 barrios,
          conocer cuándo empiezan, cuándo terminan y cuánto cuestan, así como
          los avances de cada una en fotos y videos.
        </Text.Heading5Regular>

        <Text.Heading5Regular marginTop={12}>
          La Ciudad ha ampliado y puesto en valor el espacio público y verde,
          para que sea más seguro y cercano y que todos los vecinos y vecinas
          puedan disfrutarlo. En el sitio web podés conocer todas las obras que
          hicieron esto posible, así como las oportunidades de esparcimiento y
          las ofertas comerciales, educativas y culturales renovadas.
        </Text.Heading5Regular>

        <Text.Heading4Regular marginTop={12}>
          *Dado que algunas obras poseen un alcance territorial amplio, debido a
          que residentes de barrios vecinos hacen uso de estas, en algunos casos
          se consideró el impacto de las obras en más de un solo barrio. La
          información se actualiza aproximadamente cada 15 días.
        </Text.Heading4Regular>
      </Style.Description>
    </LayoutConstructions>
  );
};

export default BigTransformationsScreen;
