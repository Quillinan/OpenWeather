import styled from "styled-components";

interface TodayInfosProps {}

const TodayInfos: React.FC<TodayInfosProps> = () => {
  return (
    <StyledTodayInfos>
      <Line>
        <Box>
          <p className="title">Mínima</p>
          <p className="info">31 °C</p>
        </Box>
        <Box>
          <p className="title">Máxima</p>
          <p className="info">48 °C</p>
        </Box>
      </Line>
      <Line>
        <Box>
          <p className="title">Umidade</p>
          <p className="info">64%</p>
        </Box>
        <Box>
          <p className="title">Velocidade do vento</p>
          <p className="info">12m/s</p>
        </Box>
      </Line>
      <p>Não, você não deve levar um casaquinho!</p>
    </StyledTodayInfos>
  );
};

export default TodayInfos;

const StyledTodayInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  p {
    color: #afadad;
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    line-height: 48px;
  }
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 45px;
  justify-content: center;
  align-items: flex-start;
  gap: 13px;

  width: 500px;
  height: 180px;

  border-radius: 32px;
  background: linear-gradient(117deg, #4d4494 22.83%, #4f43ae 90.03%);

  box-shadow: 0px 24px 48px 0px rgba(49, 79, 124, 0.08);

  .title {
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
  }

  .info {
    color: #fff;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
  }
`;
