import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

export function Testimonial({ children }: { children: ReactNode }) {
  return <Box>{children}</Box>;
}

export function TestimonialContent({ children }: { children: ReactNode }) {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="lg"
      p={8}
      rounded="xl"
      align="center"
      pos="relative"
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
}

export function TestimonialHeading({ children }: { children: ReactNode }) {
  return (
    <Heading as="h3" fontSize="xl">
      {children}
    </Heading>
  );
}

export function TestimonialText({ children }: { children: ReactNode }) {
  return (
    <Text
      textAlign="center"
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize="sm"
    >
      {children}
    </Text>
  );
}

export function TestimonialAvatar({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) {
  return (
    <Flex align="center" mt={8} direction="column">
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align="center">
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
}

export default function TestimonialComponent() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW="7xl" py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align="center">
          <Heading>Comentários para você</Heading>
          <Text>Prefeitura de Mogi das Cruzes</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              name="Brandon P"
              title="Chief Marketing Officer"
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Intuitive Design</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src="https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              name="Krysta B."
              title="Entrepreneur"
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
              name="Jane Cooper"
              title="CEO at ABC Corporation"
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
