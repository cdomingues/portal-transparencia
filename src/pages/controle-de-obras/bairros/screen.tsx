import { useRouter } from "next/router";
import LayoutConstructions from "../../../components/LayoutConstructions";
import colors from "../../../styles/colors";
import * as Text from "../../../styles/text";
import * as Style from "../../../styles/components/bairros/styles";

const NeighborhoodsScreen = () => {
  const router = useRouter();

  const arrayNeighborhoods = [
    {
      title: "Retiro",
      description: "Conheça como estamos transformando seu bairro.",
      image: "https://images7.alphacoders.com/372/372247.jpg",
    },
  ];

  return (
    <LayoutConstructions
      title="Bairros"
      bannerSrc="https://cdn.buenosaires.gob.ar/BAObrasrenovado/BALVANERA-MANZANA-66.jpg"
      bannerTitle="Transformação dos nosso bairros"
      bannerDescription="Explore os bairros da cidade para descobrir o que estamos fazendo em cada um."
    >
      <Style.Description>
        {arrayNeighborhoods?.map((item, index) => (
          <Style.Card
            key={index}
            // onClick={() =>
            //   router.push(
            //     `/bairros/${item.title.toLowerCase().replaceAll(" ", "-")}`
            //   )
            // }
          >
            <div
              className="top"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="bottom">
              <Text.Heading5Bold color={colors.white}>
                {item.title}
              </Text.Heading5Bold>
              <Text.Heading5Regular color={colors.white}>
                {item.description}
              </Text.Heading5Regular>
            </div>
          </Style.Card>
        ))}
      </Style.Description>
    </LayoutConstructions>
  );
};

export default NeighborhoodsScreen;
