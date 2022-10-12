import { HeaderContent, HeaderWrapper, NewTransactionButton } from "./styles";

import LogoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <img src={LogoImg} alt="logo" />
          <NewTransactionButton>Nova Transação</NewTransactionButton>
        </HeaderContent>
      </HeaderWrapper>
    </>
  );
}
