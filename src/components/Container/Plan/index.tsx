import { Stack, Link, Text, useColorModeValue, Icon } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { isMobile } from "react-device-detect";
import { AiOutlineDownload, AiOutlineInfoCircle } from "react-icons/ai";
import { Testimonial, TestimonialContent } from "../../Testimonial";

type PropsInput = {
  laws: Array<{ name: string; link: string }>;
  children?: ReactNode;
};

const PlanContainer = ({ laws, children }: PropsInput) => {
  return (
    <Stack direction={isMobile ? "column" : "row"} flex={1}>
      <Stack direction="column" flex={3}>
        {children}
        {laws?.map((law, index) => (
          <div style={{ marginBottom: "20px" }} key={index}>
            <Link key={index} target="_blank" href={law.link}>
              <Stack direction="row">
                <Icon
                  color="table.primary"
                  fontSize={20}
                  as={AiOutlineDownload}
                />
                <Text fontSize="sm">{law.name}</Text>
              </Stack>
            </Link>
          </div>
        ))}
      </Stack>
      <Stack direction="column" flex={1}>
        <div style={{ height: "30%", width: "100%" }}>
          <Testimonial>
            <TestimonialContent>
              <Icon
                color="table.primary"
                w={"15%"}
                h={"15%"}
                as={AiOutlineInfoCircle}
              />
              <Text mb={2} fontWeight="550" fontSize="md">
                ACESSO A INFORMAÇÃO
              </Text>
              <Link
                textAlign="center"
                color={useColorModeValue("gray.600", "gray.400")}
                fontSize="sm"
                href="/acesso-a-informacao"
                target="_blank"
              >
                A Lei nº 12.527/2011 regulamenta o direito constitucional de
                acesso às informações públicas.
              </Link>
            </TestimonialContent>
          </Testimonial>
        </div>
      </Stack>
    </Stack>
  );
};

export default PlanContainer;
