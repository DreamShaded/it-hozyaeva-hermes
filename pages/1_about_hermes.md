---
transition: slide-left
layout: center
---

## Коротко о Hermes

<!--

-->

---
transition: slide-left
layout: simple-slide
---

## Что такое Hermes

<div class="split-layout">
<div>
<v-clicks>

- Агент как опенкло ток с памятью
- Чуть другой интерфейс
- Удобная работа с профилями
- Управление голосом из коробки
- Миграция с опенкло из коробки

</v-clicks>
</div>
<div class="split-media">
<img src="/images/slides/hermes-banner.webp" alt="Hermes Agent" />
<img src="/images/slides/openclaw-banner.webp" alt="OpenClaw" />
</div>
</div>

<!--

[click]

[click]

[click]

[click]

[click]

-->

---
transition: slide-left
layout: simple-slide
---

## Память

<div class="split-layout">
<div>
<v-clicks>

- USER и MEMORY
- Сессии в SQLite
- Бюджет памяти с отказом при переполнении

</v-clicks>
</div>
<div class="split-media">

```mermaid
flowchart TB
  H[Hermes] --> U[USER]
  H --> M[MEMORY]
  H --> S[(SQLite)]
  M --> B{бюджет}
  B --> W[запись]
  B --> R[отказ при переполнении]
```

</div>
</div>

<!--

[click]

[click]

[click]

-->

---
transition: slide-left
layout: simple-slide
---

## Критика

<v-clicks>

- Память на 1300 токенов
- Может переписать свой скилл, если не бить по рукам
- Попрожорливее (по инфе на май)

</v-clicks>

<!--

[click]

[click]

[click]

-->
