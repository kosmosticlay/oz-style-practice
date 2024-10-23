import styled from "styled-components";
import { flex, font } from "../styles/mixin";
import { theme } from "../styles/theme";

const StyledContent = styled.div`
  ${flex({ direction: "column", align: "flex-start", gap: "5px" })}
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    ${font({ size: "12px" })}
    color: ${theme.colors.tagColor};
    border: 1px solid ${theme.colors.tagColor};
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    ${font({ size: "18px", weight: "600" })};
  }
  p {
    color: ${theme.colors.gray};
  }
`;

export default function Content({ content }) {
  return (
    <StyledContent>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </StyledContent>
  );
}
