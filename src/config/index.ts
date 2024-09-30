export type Event = {
  readonly id: number;
  year: number;
  text: string;
};

export type TimePeriod = {
  readonly id: number;
  name: string;
  startDate: number;
  endDate: number;
  events: Event[];
};

export const literatureEventsMock: Event[] = [
  {
    id: 1,
    year: 2000,
    text: "13 сентября — литературное событие года.",
  },
  {
    id: 2,
    year: 2001,
    text: "Литературная премия присуждена известному писателю.",
  },
  {
    id: 3,
    year: 2002,
    text: "Публикация нашумевшего романа.",
  },
  {
    id: 4,
    year: 2003,
    text: "Вручение престижной литературной премии.",
  },
  {
    id: 5,
    year: 2004,
    text: "Издание сборника стихов, получившего признание критиков.",
  },
  {
    id: 6,
    year: 2005,
    text: "Появление нового жанра в литературе.",
  },
  {
    id: 7,
    year: 2006,
    text: "Международный литературный фестиваль.",
  },
];

export const cinemaEventsMock: Event[] = [
  {
    id: 1,
    year: 2007,
    text: "Премьера революционного фильма.",
  },
  {
    id: 2,
    year: 2008,
    text: "Фильм побил все кассовые рекорды.",
  },
  {
    id: 3,
    year: 2009,
    text: "Режиссер получил международное признание.",
  },
  {
    id: 4,
    year: 2010,
    text: "Выход долгожданного сиквела.",
  },
  {
    id: 5,
    year: 2011,
    text: "Фильм получил премию Оскар.",
  },
  {
    id: 6,
    year: 2012,
    text: "Новый формат кино покоряет зрителей.",
  },
  {
    id: 7,
    year: 2013,
    text: "Релиз фильма, изменившего индустрию.",
  },
];

export const scienceEventsMock: Event[] = [
  {
    id: 1,
    year: 2014,
    text: "Открытие новой частицы.",
  },
  {
    id: 2,
    year: 2015,
    text: "Запуск передового телескопа.",
  },
  {
    id: 3,
    year: 2016,
    text: "Прорыв в исследовании генома.",
  },
  {
    id: 4,
    year: 2017,
    text: "Нобелевская премия за инновационные исследования.",
  },
  {
    id: 5,
    year: 2018,
    text: "Успешная миссия на Марс.",
  },
  {
    id: 6,
    year: 2019,
    text: "Разработка квантового компьютера.",
  },
  {
    id: 7,
    year: 2020,
    text: "Создание эффективной вакцины.",
  },
];

export const technologyEventsMock: Event[] = [
  {
    id: 1,
    year: 2000,
    text: "Выпуск первой коммерческой гибридной машины.",
  },
  {
    id: 2,
    year: 2001,
    text: "Запуск первой космической туристической миссии.",
  },
  {
    id: 3,
    year: 2002,
    text: "Введение Wi-Fi в общественных местах.",
  },
  {
    id: 4,
    year: 2003,
    text: "Появление смартфонов нового поколения.",
  },
  {
    id: 5,
    year: 5,
    text: "Разработка революционной технологии хранения данных.",
  },
  {
    id: 6,
    year: 2005,
    text: "Выпуск первой игровой консоли с поддержкой HD.",
  },
  {
    id: 7,
    year: 2006,
    text: "Прорыв в области искусственного интеллекта.",
  },
];

export const artEventsMock: Event[] = [
  {
    id: 1,
    year: 2007,
    text: "Открытие крупнейшей выставки современного искусства.",
  },
  {
    id: 2,
    year: 2008,
    text: "Продажа самого дорогого произведения искусства на аукционе.",
  },
  {
    id: 3,
    year: 2009,
    text: "Возрождение интереса к классической живописи.",
  },
  {
    id: 4,
    year: 2010,
    text: "Инсталляция, вызвавшая общественный резонанс.",
  },
  {
    id: 5,
    year: 2011,
    text: "Новая волна в уличном искусстве.",
  },
  {
    id: 6,
    year: 2012,
    text: "Цифровое искусство выходит на новый уровень.",
  },
  {
    id: 7,
    year: 2013,
    text: "Международная биеннале современного искусства.",
  },
];

export const historyEventsMock: Event[] = [
  {
    id: 1,
    year: 2014,
    text: "Подписание исторического мирного соглашения.",
  },
  {
    id: 2,
    year: 2015,
    text: "Международная конференция по климату.",
  },
  {
    id: 3,
    year: 2016,
    text: "Открытие нового государства.",
  },
  {
    id: 4,
    year: 2017,
    text: "Реформа глобальной экономической системы.",
  },
  {
    id: 5,
    year: 2018,
    text: "Юбилей важного исторического события.",
  },
  {
    id: 6,
    year: 2019,
    text: "Принятие новой конституции.",
  },
  {
    id: 7,
    year: 2020,
    text: "Важное политическое событие мирового масштаба.",
  },
];

export const timePeriodsMock: TimePeriod[] = [
  {
    id: 1,
    name: "Литература",
    startDate: 2000,
    endDate: 2006,
    events: literatureEventsMock,
  },
  {
    id: 2,
    name: "Кино",
    startDate: 2007,
    endDate: 2013,
    events: cinemaEventsMock,
  },
  {
    id: 3,
    name: "Наука",
    startDate: 2014,
    endDate: 2020,
    events: scienceEventsMock,
  },
  {
    id: 4,
    name: "Технологии",
    startDate: 2000,
    endDate: 2006,
    events: technologyEventsMock,
  },
  {
    id: 5,
    name: "Искусство",
    startDate: 2007,
    endDate: 2013,
    events: artEventsMock,
  },
  {
    id: 6,
    name: "История",
    startDate: 2014,
    endDate: 2020,
    events: historyEventsMock,
  },
];
