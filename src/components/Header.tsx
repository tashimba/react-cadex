import styled from "styled-components";
import { Flex, Heading } from "@radix-ui/themes";
import { ButtonWithLink } from "../ui";

const StyledHeader = styled(Flex)`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  border-bottom: 1px solid var(--gray-5);
  padding: var(--space-3);
`;

export const Header = () => {
  return (
    <StyledHeader justify="between" align="center">
      <Heading as="h1" size="5">
        Some Company
      </Heading>
      <ButtonWithLink size="3" to="/contact">
        Contact
      </ButtonWithLink>
    </StyledHeader>
  );
};
