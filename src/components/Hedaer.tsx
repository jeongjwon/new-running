import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        {/* <span className="header__deco__close-btn"></span>
        <span className="header__deco__close-btn"></span>
        <span className="header__deco__close-btn"></span> */}
      </HeaderWrapper>
      <HeaderTitle>My Running</HeaderTitle>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  background-color: aliceblue;
  border: 0.3rem solid #2e2e2e;
  border-radius: 2rem 2rem 0 0;
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;

  > .header__deco__close-btn {
    display: block;
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    border: 0.2rem solid #2e2e2e;
    border-radius: 50%;
    :nth-child(1) {
      background-color: #fb5f5f;
    }
    :nth-child(2) {
      background-color: #fbcf5f;
    }
    :nth-child(3) {
      background-color: #34c900;
    }
  }
`;
const HeaderTitle = styled.h1`
  color: #2e2e2e;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
`;

export default Header;
