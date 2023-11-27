import React from "react";
import styled from "styled-components";

interface GraphicInfoProps {
  imageUrl: string;
}

const GraphicInfo: React.FC<GraphicInfoProps> = ({ imageUrl }) => {
  return (
    <GraphicContainer>
      <GraphicImage src={imageUrl} alt="gráfico" />
    </GraphicContainer>
  );
};

const GraphicContainer = styled.div`
  margin-top: 10px;
`;

const GraphicImage = styled.img`
  object-fit: cover;
`;

export default GraphicInfo;
