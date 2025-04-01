import { Button, ButtonProps } from "@radix-ui/themes";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 12rem;
  border-radius: 5px;
`;
type Props = ButtonProps & {
  to: string;
  children: React.ReactNode;
};
export function ButtonWithLink({ children, to, ...ButtonProps }: Props) {
  return (
    <div>
      <Button asChild {...ButtonProps}>
        <StyledLink to={to}>{children}</StyledLink>
      </Button>
    </div>
  );
}
