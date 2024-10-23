import { css } from "styled-components";

export const flex = ({
  direction = "row",
  justify = "start",
  align = "stretch",
  gap = "0",
  wrap = "nowrap",
}) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  gap: ${gap};
  flex-wrap: ${wrap};
`;

export const font = ({ size, weight = 400 }) => css`
  font-size: ${size};
  font-weight: ${weight};
`;
