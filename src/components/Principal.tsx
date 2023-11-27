import React from "react";
import styled from "styled-components";

interface PrincipalProps {}

const Principal: React.FC<PrincipalProps> = () => {
  return (
    <StyledPrincipal>
      <div>Hoje</div>
    </StyledPrincipal>
  );
};

const StyledPrincipal = styled.div`
  flex: 2;
  background-color: #efefef;
`;
export default Principal;
