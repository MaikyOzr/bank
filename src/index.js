//==
//==
// ЦЕ ТЕХНІЧНИЙ ФАЙЛ В ЯКОМУ ВСЕ ПІДКЛЮЧАЄТЬСЯ ТА ГЕНЕРУЄТСЬЯ

// імпортуємо потрібні технології
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// імпортуємо наш додаток
import App from "./App";

// імпортуємо потрібні css стилі
import "../public/style.css";
import "../public/main.css";

// генеруємо наше ядро додатку
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// рендеримо (вставляємо) наш додаток в ядро
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
