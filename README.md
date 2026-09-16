# it-hozyaeva-hermes

Доклад «Агент для всей семьи» для митапа IT-Хозяева (16 сентября 2026). Слайды на [Slidev](https://sli.dev),
тема — вендорная копия `slidev-theme-vzhyx` внутри репозитория (`./slidev-theme-vzhyx`).

Структура повторяет доклад `moscowqa-27`.

## Команды

```bash
pnpm install
pnpm dev       # локальный сервер с автообновлением
pnpm build     # прод-сборка в dist/
pnpm export    # экспорт в PDF/PNG
```

## Деплой

Пуш в `main` собирает колоду и публикует её на GitHub Pages
(`.github/workflows/deploy.yml`) — https://dreamshaded.github.io/it-hozyaeva-hermes/
