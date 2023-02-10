import styled from "styled-components";

export default function Menu({ config }) {
  return (
    <MenuBlock>
      {/* в config нам приходить список кнопок
        за допомогою .map() ми для кожної кнопки
        виводимо HTML верстку
      */}
      {config.map((menu) => (
        <ButtonSendBlock onClick={menu.onClick}>
          <ButtonSendIcon>
            {/* тут ми підгружаємо зображення, задаємо ширину та висоту */}
            <img src={menu.img} width="30px" height="30px" />
          </ButtonSendIcon>
          <ButtonSendText>{menu.name}</ButtonSendText>
        </ButtonSendBlock>
      ))}
    </MenuBlock>
  );
}

const ButtonSendBlock = styled.button`
  /* відступи між картинкою та текстом кнопках */
  gap: 12px;

  /* додаємо можливість робити 
  плавну анімацію на 0.7 секунд */
  transition: opacity 0.7s;

  /* при наведенні на блок, курсор буде виглядати
    як у клікабельних елементах
   */
  cursor: pointer;

  /* при наведенні на блок 
    він стає прозорим на 30% (1 - 0.7)
   */
  &:hover {
    opacity: 0.7;
  }

  /* === */

  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuBlock = styled.div`
  display: flex;
  padding: 0 40px;
  gap: 18px;
  justify-content: space-around;
  width: 100%;
`;

const ButtonSendIcon = styled.div`
  /* висота кнопки  */
  height: 70px;

  /* ширина кнопки */
  width: 70px;

  /* фон кнопки */
  background: #000000;

  /* закруглення країв кнопки */
  border-radius: 35px;

  /* ==== */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonSendText = styled.div`
  /* жирність тексту (400, 500, 600, 700) */
  font-weight: 400;

  /* розмір тексту */
  font-size: 17px;

  /* колір тексту */
  color: #ffffff;

  /* висота рядка тексту */
  line-height: 22px;

  /* ==== */

  text-align: center;
  width: 100%;
`;
