import { useEffect, useState } from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Breadcrumb() {
  const router = useRouter();

  const [isClientSide, setIsClientSide] = useState(false);
  const steps = router.pathname.split("/").filter((step) => step !== "");

  useEffect(() => {
    setIsClientSide(true);
  }, []);

  if (!isClientSide || !steps.length) return null;

  return (
    <Flex alignItems="center" gap="0.2rem" flexWrap="wrap" width="100%" mb={3}>
      <Link href={"/"} target={"_self"} fontSize="14">
        Início
      </Link>

      {steps.map((step, index) => {
        const targetUrl = steps.slice(0, index + 1).join("/");
        const shouldRenderStep = steps.length > 1 && index !== 0;
        const stepName = step.split("-").join(" ");

        return (
          <>
            <span
              style={{ marginBottom: '2px' }}
            >
              <MdOutlineKeyboardArrowRight />
            </span>
            {shouldRenderStep ? (
              <Link
                href={`/${targetUrl}`}
                target={"_self"}
                textTransform="capitalize"
                fontSize="14"
              >
                {stepName}
              </Link>
            ) : (
              <Box as="span" textTransform="capitalize" fontSize="14">
                {stepName}
              </Box>
            )}
          </>
        );
      })}
    </Flex>
    
  );
}

export default Breadcrumb;
