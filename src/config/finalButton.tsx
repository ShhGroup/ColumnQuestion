// Зберігаємо час початку сесії
const sessionStartTime = Date.now();

function finalButton(type: string) {
  // Розраховуємо час проведений на сайті в секундах
  const timeSpentOnSite = Math.floor((Date.now() - sessionStartTime) / 1000);
  
  // Отримуємо розмір екрану користувача
  const screenSize = `${window.screen.width}x${window.screen.height}`;
  
  // Отримуємо поточний URL
  const currentUrl = window.location.origin + window.location.pathname;
  
  // Формуємо параметри запиту
  const params = new URLSearchParams({
    '_lp': '1',
    'sub_id_20': type,
    'sub_id_21': timeSpentOnSite.toString(),
    'sub_id_22': screenSize
  });
  
  // Формуємо фінальний URL
  const finalUrl = `${currentUrl}?${params.toString()}`;
  
  // Переходимо на новий URL
  window.location.href = finalUrl;
}

export default finalButton