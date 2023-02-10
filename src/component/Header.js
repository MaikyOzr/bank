import styled from "styled-components";

export default function Header({ name, onClick }) {
  return (
    <HeaderTag>
      <Nametag>{name}</Nametag>
      <LoginButtunTag onClick={onClick}>Вхід</LoginButtunTag>
    </HeaderTag>
  );
}

const LoginButtunTag = styled.div`
  color: #fff;
  padding: 8px 32px;

  border: 2px solid#000;

  border-radius: 4px;

  cursor: pointer;
`;

const Nametag = styled.div`
  color: #fff;
`;

const HeaderTag = styled.div`
  /* робимо темний колір фону блока */
  background: #1e1e1e;

  /* робимо щоб знизу блок мав закруглення */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  /* режим верстки flex, робимо текст по центру */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* ставимо колір тексту білим */
  color: #fff;

  /* робимо відступи вертикальні та горизонтальні,
    щоб текст не притискався до країв блоку
   */
  padding: 15px;
`;
