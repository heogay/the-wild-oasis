import { HiOutlineBars3 } from "react-icons/hi2";
import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import ButtonIcon from "./ButtonIcon";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem 1.2rem 1.2rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
`;

const StyleSubHeader = styled.div`
  display: flex;
  gap: 2.4rem;
  justify-content: flex-end;
  align-items: center;
`;

const StyledToggleSideBarBtn = styled.div`
  display: flex;
  justify-items: flex-start;
  align-items: center;
`;

export default function Header({ onClick }) {
  return (
    <>
      <StyledHeader>
        <StyledToggleSideBarBtn>
          <ButtonIcon onClick={onClick}>
            <HiOutlineBars3 />
          </ButtonIcon>
        </StyledToggleSideBarBtn>
        <StyleSubHeader>
          <UserAvatar />
          <HeaderMenu />
        </StyleSubHeader>
      </StyledHeader>
    </>
  );
}
