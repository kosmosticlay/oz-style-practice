import styled from "styled-components";
import { flex } from "../styles/mixin";
import { font } from "../styles/mixin";

const StyledHeader = styled.header`
  ${flex({ justify: "space-between", align: "center" })}
  padding: 20px 20px;
  background-color: black;
  ul {
    ${flex({ justify: "center", align: "center", gap: "20px" })}
    li {
      ${font({ size: "16px" })}
      list-style: none;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>OZ코딩스쿨</h1>
      <ul className="menu-container">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </StyledHeader>
  );
}
