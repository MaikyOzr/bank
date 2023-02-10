// ІМПОРТУЄМО БІБЛІОТЕКИ БЕЗ ЯКИХ НЕ МОЖЕМО ПИСАТИ КОД
import React from "react";
import styled from "styled-components";

// ІМПОРТУЄМО ПОТРІБНІ КОМПОНЕНТИ
import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";

// КОНФІГУРАЦІЯ ========================================

const START_BALANCE = 0;
const LIMIT_BALANCE = 100000;
const GET_MONEY = 100;
const SALARY_AMOUNT = 1000;
const COURSE_PRISE = 850;
const PesPatron = 500;

export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================

  // Ось тут тримаємо актуальне значення балансу

  const [balance, setBalance] = React.useState(START_BALANCE);

  // Функція для прямого поповнення балансу
  const getMoney = () => setBalance(balance + GET_MONEY);

  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert(`Ваш ліміт балансу: ${LIMIT_BALANCE}`);
      setBalance(START_BALANCE);
    }

    // Перевірка на мінусовий баланс
    if (balance < 0) {
      alert(`Ви використали усі свої гроші. Поповніть картку`);
      // setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);

  // функціонал транзакцій ==========================================

  const [payment, setPayment] = React.useState([]);

  const getmoney = () => {
    setBalance(balance + GET_MONEY);
    setPayment([
      ...payment,
      {
        name: "Поповнення рахунку",
        amount: GET_MONEY,
        type: "+"
      }
    ]);
  };

  const getSalary = () => {
    setBalance(balance + SALARY_AMOUNT);
    setPayment([
      ...payment,
      {
        name: "Зарплата",
        amount: SALARY_AMOUNT,
        type: "+"
      }
    ]);
  };

  const BuyCourse = () => {
    setBalance(balance - COURSE_PRISE);
    setPayment([
      ...payment,
      {
        name: "Оплата курсу",
        amount: COURSE_PRISE,
        type: "-"
      }
    ]);
  };

  const Send_ZSU = () => {
    setBalance(balance - PesPatron);
    setPayment([
      ...payment,
      {
        name: "Відправити на ЗСУ",
        amount: PesPatron,
        type: "-"
      }
    ]);
  };

  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================

  // ця функція відкриває вікно в браузері з текстом

  const LOGIN = "Roma";
  const PASSWORD = "1234";

  const [isLogged, setLogged] = React.useState(false);

  const doLogin = () => {
    const login = prompt("Ваш логін");
    const password = prompt("Ваш пароль");

    if (login === LOGIN && password == PASSWORD) {
      alert("Ви увійшли");
      setLogged(true);
    } else {
      if (login !== LOGIN && password !== PASSWORD) {
        return alert("помилка в логіні та паролі");
      }
      if (login !== LOGIN) {
        return alert("помилка в логіні");
      }
      if (password !== PASSWORD) {
        return alert("помилка в паролі");
      }
    }
  };

  return (
    <Page>
      {/* компонент шапки з нашою назвою
          також при кліку мишкою на шапку
          в нас визивається функція HelloWorld
      */}

      <Header name="ROMA-BANK" onClick={doLogin} />

      {/* Компонент баланса в який передається
          Актуальне значення балансу  */}
      {isLogged && <Balance balance={balance} />}

      {/* Компонент меню з кнопками */}
      {isLogged && (
        <Menu
          // ось сюди ми передаємо конфігурацію кнопок
          config={[
            {
              name: "Поповнити баланс",
              onClick: getmoney,
              img: "/icon/get.svg"
            },
            {
              name: "Купити Курс",
              onClick: BuyCourse,
              img: "/icon/send.svg"
            },
            {
              name: "Отримати ЗП",
              onClick: getSalary,
              img: "/icon/apple.svg"
            },
            {
              name: "ЗСУ (ПЕС ПАТРОН)",
              onClick: Send_ZSU,
              img: "/icon/dog.svg"
            }
          ]}
        />
      )}
      {/* компонент списка наших транзакцій
          цей функціонал ми будемо робити на 3 уроці
      */}
      {isLogged && <Payment payment={payment} />}
      {isLogged === false && (
        <NotLogged>Вам потрібно увійти в акаунт </NotLogged>
      )}
    </Page>
  );
}

const NotLogged = styled.div`
  padding: 100px 30px;
  background: #000;
  color: #fff;
  text-align: center;
  margin-top: 100px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
