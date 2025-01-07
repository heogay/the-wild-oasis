import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useRef, useState } from "react";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  transition: all 0.3s;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export default function AppLayout() {
  const [isSidebarClose, setIsSideBarClose] = useState(false);
  const ref = useRef();

  function handleToggleSidebar() {
    if (isSidebarClose === false) {
      ref.current.style.gridTemplateColumns = "0 1fr";
      setIsSideBarClose(true);
    } else {
      ref.current.style.gridTemplateColumns = "26rem 1fr";
      setIsSideBarClose(false);
    }
  }

  return (
    <StyledAppLayout ref={ref}>
      <Header onClick={handleToggleSidebar} />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}
