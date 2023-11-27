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
`;

export default TodayPage;
