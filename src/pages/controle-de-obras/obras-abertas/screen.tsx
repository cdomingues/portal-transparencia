import { useState } from "react";
import LayoutConstructions from "../../../components/LayoutConstructions";
import * as Text from "../../../styles/text";
import * as Style from "./styles";
import { Input } from "@chakra-ui/react";

export const contentOpenedConstructions = {
  titlePage:"Portal de Obras Abertas",
  description:"O código do Portal de Obras de Mogi das Cruzes está aberto para que cidades interessadas em tornar a gestão da obra pública transparente, por meio da abertura de dados e acesso à informação, possam criar seus próprios portais de obras abertas.",
}

const OpenedConstructionsScreen = () => {
  const [password, setPassword] = useState("");
  if (!password || password != " ") {
    return (
      <div
        style={{
          width: "500px",
          height: "200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: 20,
          borderRadius: 30,
        }}
      >
        <span>Digite a senha para acessar:</span>
        <Input
          placeholder="Senha"
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          style={{ marginTop: 5 }}
        />
      </div>
    );
  }
  return (
    <LayoutConstructions
      title="Abertas"
      bannerSrc="https://wallpaperaccess.com/full/895.jpg"
      bannerTitle={contentOpenedConstructions?.titlePage}
      bannerDescription={contentOpenedConstructions?.description}
    >
      <Style.Description>
      <Text.Heading5Regular marginTop={12}>
          No site, você pode conhecer as obras destacadas do plano de obras 
          públicas da cidade nas áreas de transformação urbana, espaços públicos
           e áreas verdes, educação, transporte público, integração de bairros, 
           segurança, saúde e cultura. Além disso, em breve será possível observar
           obras que foram realizadas e as que estão planejadas em cada um dos 
           bairros de Mogi das Cruzes, incluindo informações sobre datas de 
           início, término e custos, assim como acompanhar os avanços de cada 
           uma delas por meio de fotos e vídeos.
        </Text.Heading5Regular>

        <Text.Heading5Regular marginTop={12}>
          Mogi das Cruzes tem ampliado e valorizado o espaço público e as áreas
           verdes, buscando torná-los mais seguros e acessíveis, para que todos 
           os moradores possam desfrutar. No portal, você poderá conhecer todas 
           as obras que tornaram isso possível, bem como as oportunidades de 
           lazer e as ofertas comerciais, educacionais e culturais renovadas.
        </Text.Heading5Regular>

        <Text.Heading4Regular marginTop={12}>
          Considerando que algumas obras têm impacto em áreas além de um único
          bairro, devido ao uso por moradores de bairros vizinhos, em alguns 
          casos, o portal apresenta informações sobre o impacto das obras em 
          mais de um bairro. As informações são atualizadas aproximadamente 
          a cada 15 dias.
        </Text.Heading4Regular>
      </Style.Description>
    </LayoutConstructions>
  );
};

export default OpenedConstructionsScreen;
