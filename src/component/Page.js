import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(62.93deg, purple 19.68%, blue 89.55%);

  /* робимо фон на всю ширину */
  width: 100%;
`;
