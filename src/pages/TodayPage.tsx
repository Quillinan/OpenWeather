import styled from "styled-components";
import Panel from "../components/Panel";
import Principal from "../components/Principal";

const TodayPage: React.FC = () => {
  return (
    <PageContainer>
      <Panel />
      <Principal />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow-x: auto;
  overflow-y: hidden;

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    overflow-y: auto;
  }
`;

export default TodayPage;
