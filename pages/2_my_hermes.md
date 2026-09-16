---
transition: slide-left
layout: center
---

## Мой Hermes

<!--

-->

---
transition: slide-left
layout: simple-slide
---

## Такие агенты полезны только при наличии нужных интеграций

<div class="diagram">

```mermaid
flowchart TB
  H[Hermes] --> P[Почта]
  H --> C[Календарь]
  H --> T[Задачи]
  H --> O[Obsidian]
  H --> Z[Здоровье]
```

</div>

<!--

-->

---
transition: slide-left
layout: simple-slide
---

## Почта

<v-clicks>

- камон, нахуй надо)

</v-clicks>

<!--

[click]

-->

---
transition: slide-left
layout: simple-slide
---

## Календарь

<div class="split-layout">
<div>
<v-clicks>

- Google через Singularity
- Yandex через Singularity
- Singularity XD

</v-clicks>
</div>
<div class="split-media">
<img src="/images/slides/dorofeev.webp" alt="Максим Дорофеев" />
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

## Задачи

<div class="split-layout">
<div>
<v-clicks>

- Singularity
- Пробовал Vikunja

</v-clicks>
</div>
<div class="split-media">
<img src="/images/slides/singularity.svg" alt="Singularity App" class="logo-dark" />
<img src="/images/slides/vikunja.png" alt="Vikunja" style="max-height: 9rem" />
</div>
</div>

<!--

[click]

[click]

-->

---
transition: slide-left
layout: simple-slide
---

## Obsidian

<div class="split-layout">
<div>
<v-clicks>

- Только поиск и чтение
- Не делал RAG, но можно
- Здоровье, учёба, планы, задачи, канбан

</v-clicks>
</div>
<div class="split-media">
<img src="/images/slides/obsidian.svg" alt="Obsidian" style="max-height: 14rem" />
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

## Здоровье

<v-clicks>

- Парсер по форматкам Медси + Invitro
- История с 2010
- Анализ скиллами состояния и рекомендации

</v-clicks>

<div class="diagram">

```mermaid
flowchart LR
  M[Медси] --> P[Парсер]
  I[Invitro] --> P
  P --> H[(История с 2010)]
  H --> S[Скиллы]
  S --> R[Рекомендации]
```

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

## Вы можете пойти иначе:

<v-clicks>

- сделать RAG по заметкам, книгам, выпискам здоровья
- сделать WatchDog на обновление
- MCP с тулами на поиск, добавление, etc

</v-clicks>

<p class="after-em" v-click>получится второй мозг.</p>

<!--

[click]

[click]

[click]

[click]

-->
