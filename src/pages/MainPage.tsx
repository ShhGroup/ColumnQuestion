import { useEffect, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Comments from "../components/Comments";
import Questions from "../components/Questions";

// Зберігаємо час початку сесії
const sessionStartTime = Date.now();

// Функція finalButton (винесіть її в окремий файл utils/finalButton.ts)
function finalButton(type: string) {
  // Розраховуємо час проведений на сайті в секундах
  const timeSpentOnSite = Math.floor((Date.now() - sessionStartTime) / 1000);

  // Отримуємо розмір екрану користувача
  const screenSize = `${window.screen.width}x${window.screen.height}`;

  // Отримуємо поточний URL
  const currentUrl = window.location.origin + window.location.pathname;

  // Формуємо параметри запиту
  const params = new URLSearchParams({
    _lp: "1",
    sub_id_20: type,
    sub_id_21: timeSpentOnSite.toString(),
    sub_id_22: screenSize,
  });

  // Формуємо фінальний URL
  const finalUrl = `${currentUrl}?${params.toString()}`;

  // Переходимо на новий URL
  window.location.href = finalUrl;
}

function MainPage() {
  const [showQuestions, setShowQuestions] = useState(false);
  const handleStartClick = () => {
  setShowQuestions(true);
}
  useEffect(() => {
    // Backfix логіка
    const setupBackfix = () => {
      // Додаємо стани в історію для створення "пастки"
      for (let i = 0; i < 2; i++) {
        window.history.pushState(
          { backfix: true },
          "",
          window.location.href + "#back" + i + Date.now()
        );
      }

      console.log("Backfix trap initialized");
    };

    // Перевіряємо чи відкрито в Facebook браузері
    const detectFBApp = () => {
      const ua =
        navigator.userAgent || navigator.vendor || (window as any).opera;
      return /FBAN|FBAV|FB_IAB|FB4A|FBIOS|FBAV/i.test(ua);
    };

    // Обробник для кнопки "Назад"
    const handleBackButton = (e: PopStateEvent) => {
      if (detectFBApp()) {
        setTimeout(() => {
          finalButton("backfix");
        }, 150);
      } else {
        if (e.state && e.state.backfix) {
          finalButton("backfix");
        }
      }
    };

    // Обробник для зміни hash (для деяких браузерів)
    const handleHashChange = () => {
      if (window.location.hash && /#back\d+/.test(window.location.hash)) {
        finalButton("backfix");
      }
    };

    // Додатковий обробник для Facebook
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden" && detectFBApp()) {
        setTimeout(() => {
          finalButton("backfix");
        }, 300);
      }
    };

    // Ініціалізуємо backfix
    setupBackfix();

    // Додаємо обробники подій
    window.addEventListener("popstate", handleBackButton);
    window.addEventListener("hashchange", handleHashChange);

    if (detectFBApp()) {
      window.addEventListener("visibilitychange", handleVisibilityChange);
    }

    // Очищуємо обробники при демонтуванні компонента
    return () => {
      window.removeEventListener("popstate", handleBackButton);
      window.removeEventListener("hashchange", handleHashChange);
      if (detectFBApp()) {
        window.removeEventListener("visibilitychange", handleVisibilityChange);
      }
    };
  }, []);

  return (
    <div className="max-w-[430px] w-full m-auto flex flex-col relative items-center">
      <Header />
      {!showQuestions ? (
        <>
          <Main onStartClick={handleStartClick} />
          <Comments />
        </>
      ) : (
        <>
          <Questions />
          <Comments />
        </>
      )}
    </div>
  );
}

export default MainPage;
