import { Flex, Text } from "@radix-ui/themes";
import styled from "styled-components";

const StyledFooter = styled(Flex)`
  padding: var(--space-4);
  border-top: 1px solid var(--gray-5);
`;
export const Footer = () => {
  return (
    <StyledFooter justify="center" align="center" p="4">
      <Text size="2">Some Company 2024</Text>
    </StyledFooter>
  );
};
