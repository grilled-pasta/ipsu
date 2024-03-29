const values = new Map();

values.set(1, {
  id: 1,
  name: "Социални Услуги от Резидентен Тип",
  type: "menu",
});

values.set(11, {
  id: 11,
  name: "Кризисно Настаняване",
  type: "answer",
});

values.set(111, {
  id: 111,
  name: "Център за кризисно настаняване на бездомни хора",
  type: "center",
  contacts: {
    address: "гр. София, ж.к. Захарна фабрика, бл. 51А",
    phoneNumber: ["0889048060"],
  },
});

values.set(112, {
  id: 112,
  name: "Център за кризисно настаняване на бездомни хора",
  type: "center",
  contacts: {
    address: "гр. София, ж.к. Захарна фабрика, бл. 48А",
    phoneNumber: ["0885511345"],
  },
});

values.set(12, {
  id: 12,
  name: "Временно Настаняване",
  type: "answer",
});

values.set(121, {
  id: 121,
  name: 'Център за временно настаняване "Св. Димитър"',
  type: "center",
  contacts: {
    address: "гр. София, ж.к. Люлин, бл. 464, вх. А",
    phoneNumber: ["029250727", "028274330", "028274153"],
  },
});

values.set(122, {
  id: 122,
  name: 'Център за временно настаняване "Св. Георги"',
  type: "center",
  notes:
    "Предоставяните социални услуги са краткосрочни – максимално до З месеца в рамките на една календарна година. Възрастните домуващи и инвалидите, които имат подготвени документи за настаняване в заведение за социални услуги, подходящо за здравословното им състояние, ползват услугите на ЦВНБХ до настаняването им в съответното заведение.",
  contacts: {
    address: "гр. София, ж.к. Красна поляна, ул. Ришки проход № 2",
    phoneNumber: ["029200416", "029201807", "0885511345"],
  },
});

values.set(123, {
  id: 123,
  name: 'Център за временно настаняване "Св. София"',
  type: "center",
  contacts: {
    address: "гр. София, ж.к. Захарна фабрика, бл. 51, вх. А",
    phoneNumber: ["028220888", "029208090"],
  },
});

values.set(13, {
  id: 13,
  name: "Защитени Жилища",
  type: "answer",
});

values.set(131, {
  id: 131,
  name: 'Защитено жилище за лица с умствена изостаналост "Бъдеще за нас"',
  type: "center",
  director: "Юлия Ангелова",
  contacts: {
    address: 'гр. София, ж.к. "Хаджи Димитър", ул. "Баба Вида" № 1',
    phoneNumber: ["029447005", "0882404984"],
  },
});

values.set(132, {
  id: 132,
  name: 'Защитено жилище за хора с психични увреждания, район "Слатина"',
  type: "center",
  director: "Елена Иванова",
  notes:
    'Услугата се управлява от Фондация "Глобална инициатива в психиатрията."',
  contacts: {
    address: 'гр. София, ул. "Роглец" №17',
    phoneNumber: ["024214051"],
  },
});

values.set(133, {
  id: 133,
  name: 'Защитено жилище "Васил Априлов"',
  type: "center",
  director: "Радостина Вълчева",
  contacts: {
    address: 'гр. София, ж.к. "Дружба 1", кв. "Канала" № 80',
    phoneNumber: ["0878308159"],
  },
});

values.set(134, {
  id: 134,
  name: "Защитено жилище за лица с умствени затруднения",
  type: "center",
  director: "Aна Кръстанова",
  contacts: {
    address: 'гр. София, ул. "Царибродска" № 33',
    phoneNumber: ["0878939017", "0878109039"],
  },
});

values.set(135, {
  id: 135,
  name: 'Наблюдавано жилище за лица, напускащи социални институции "Шарената къща"',
  type: "center",
  director: "Петя Георгиева",
  notes:
    'Услугата се администрира от сдружение "Български червен кръст".\n\nДейността на наблюдаваното жилище е насочена към предоставяне на подслон и подкрепа на млади хора на възраст от 18 до 29 години, физически и психически здрави, които са отгледани в специализирани институции за деца.',
  contacts: {
    address: "с. Лозен, ул. “Полувраг“ № 31",
    phoneNumber: ["029925008"],
  },
});

values.set(14, {
  id: 14,
  name: "Център за настаняване от семеен тип",
  type: "answer",
});

values.set(141, {
  id: 141,
  name: 'Център за настаняване от семеен тип за деца и/или младежи с увреждания "Райна Княгиня"',
  type: "center",
  director: "Маргарита Николова",
  contacts: {
    address: 'гр. София, кв. "Факултета", ул. "Тумба" № 7А',
    phoneNumber: ["0885511346"],
  },
});

values.set(142, {
  id: 142,
  name: 'Център за настаняване от семеен тип за деца и/или младежи с увреждания "Христо Ботев"',
  type: "center",
  director: "Светлана Славева",
  contacts: {
    address: 'гр. София, ул. "Царева ливада" № 5',
    phoneNumber: ["0877303397"],
    email: "cnstdmu_botev@abv.bg",
  },
});

values.set(143, {
  id: 143,
  name: "Център за настаняване от семеен тип в гр. Долна баня",
  type: "center",
  contacts: {
    address: 'гр.Долна Баня месност “Меше"',
    phoneNumber: ["0878090973", "0878090945"],
  },
});

values.set(144, {
  id: 144,
  name: "Център за настаняване от семеен тип за пълнолетни лица с физически увреждания",
  type: "center",
  director: "Зоя Маркова",
  notes: "Капацитет: 8 лица",
  contacts: {
    address: 'гр.Долна Баня месност “Меше"',
    phoneNumber: ["029714435"],
  },
});

values.set(145, {
  id: 145,
  name: "Център за настаняване от семеен тип",
  type: "center",
  contacts: {
    address: 'гр. София, ул. "Погледец“ 21',
  },
});

values.set(15, {
  id: "15",
  name: "Назад",
  type: "back",
  span: 2,
});

values.set(2, {
  id: 2,
  name: "Социални Услуги за Дневна Грижа",
  type: "menu",
});

values.set(21, {
  id: 21,
  name: "Аутистичен Спектър",
  type: "answer",
});

values.set(211, {
  id: 211,
  name: "Център за социална рехабилитация и интеграция на лица с проблеми от аутистичния спектър",
  type: "center",
  notes:
    "РЕГИСТРАЦИОННО ИНТЕРВЮ:\n_(само след предварително записване по телефона)_\nВторник от 13:00 ч. до 13:30 ч./за потребители над 16г. \nВторник от 15:00 ч. до 15:30 ч./за потребители до 16 г.",
  contacts: {
    address: 'гр. София, бул. "Ал. Стамболийски" 168',
    email: "csri.autism@gmail.com",
    phoneNumber: ["029202493"],
  },
});

values.set(22, {
  id: 22,
  name: "Зрителни Увреждания",
  type: "answer",
});

values.set(221, {
  id: 221,
  name: "Център за социална рехабилитация и интеграция на хора със зрителни увреждания",
  type: "center",
  notes: 'Услугата се администрира от Сдружение "Съюз на слепите в България".',
  director: "Недялко Димов",
  contacts: {
    address: 'гр. София, ул. "Цар Симеон" № 110',
    phoneNumber: ["028033550"],
  },
});

values.set(222, {
  id: 222,
  name: "Център за социална рехабилитация и интеграция за възрастни хора със зрителни увреждания с помощта на кучета водачи",
  type: "center",
  notes: 'Услугата се администрира от фондация "Очи на четири лапи"',
  director: "Албена Алексиева",
  contacts: {
    address: 'гр. София, бул. "Европа" № 138',
    phoneNumber: ["028243845"],
  },
});

values.set(23, {
  id: 23,
  name: "Слухови Увреждания",
  type: "answer",
});

values.set(231, {
  id: 231,
  name: "Център за социална рехабилитация и интеграция (с приоритетни ползватели лица с увреден слух)",
  type: "center",
  director: "Мария Атанасова",
  notes:
    'Капацитет: 50 места. Услугата се администрира от Сдружение  "Тишина".',
  contacts: {
    address: 'гр. София, ж.к. "Стрелбище“, ул. "Йордан Йовков" № 13',
    email: "tishina2007@abv.bg",
    phoneNumber: ["0878377165", "0884800008"],
  },
});

values.set(24, {
  id: 24,
  name: "Зависимости",
  type: "answer",
});

values.set(241, {
  id: 241,
  name: 'Център "Посланици на надеждата“ и рехабилитационна програма (зависимост към наркотиците, алкохола и хазарт)',
  type: "center",
  contacts: {
    address: 'гр. София, ул. "Екзарх Йосиф“ 1',
    email: "info@solidarnost-bg.org",
    phoneNumber: ["029719920", "0884389930"],
  },
});

values.set(242, {
  id: 242,
  name: "Терапевтичен център ЖИВА, лечение на зависимости",
  type: "center",
  notes:
    "Условия за прием: навършени 18 години; приемат се мъже и жени; успешна детоксификация;",
  contacts: {
    address: "гр. София 1124, кв. Яворов, ул. Мизия 7",
    email: "info@centrejiva.com",
    phoneNumber: ["0877677834", "0889119221"],
  },
});

values.set(25, {
  id: 25,
  name: "Бежанци",
  type: "answer",
});

values.set(251, {
  id: 251,
  name: "Център за интеграция на бежанци и мигранти “Св. Анна“",
  type: "center",
  director: "Светослав Лозанов",
  contacts: {
    address: 'гр. София, ул. "Струма“ 1',
    phoneNumber: ["028696335"],
    email: "st.anna@caritas-sofia.org",
  },
});

values.set(26, {
  id: "26",
  name: "Назад",
  type: "back",
});

values.set(3, {
  id: 3,
  name: "Дневен Център",
  type: "menu",
});

values.set(31, {
  id: 31,
  name: "За хора с увреждания",
  type: "answer",
});

values.set(311, {
  id: 311,
  name: "Дневен център за деца и младежи с увреждания",
  type: "center",
  director: "Искра Влахова",
  notes:
    "Капацитет: 35 потребители.\nВъзрасттова група: деца от 3 до 18 години и възрастни от 18 до 35 години с различни по вид и степен на тежест увреждания",
  contacts: {
    address: 'гр. София, бул. "Цар Борис III“ №  128',
    phoneNumber: ["024783635", "0895662289"],
    email: "dcdu_mss@abv.bg",
  },
});

values.set(312, {
  id: 312,
  name: 'Дневен център за младежи с увреждания "Ханна"',
  type: "center",
  director: "Мила Маринова",
  contacts: {
    address: 'гр. София, ж.к. "Лозенец", ул. "Кричим" № 47, ет. 1',
    phoneNumber: ["0882885376", "029803176", "029503176"],
    email: "hannah_f@mail.bg",
  },
});

values.set(313, {
  id: 313,
  name: 'Дневен център за пълнолетни лица с увреждания "Св Марина" (с приоритет ментални увреждания)',
  type: "center",
  director: "Йотка Тодорова",
  notes:
    "Капацитет: 60 места.\nЦелеви групи: Лица с ментални увреждания над 18 години.",
  contacts: {
    address:
      'гр. София, ж.к. "Сердика", ул. "Гюешево" (на ъгъла с ул. "Хайдут Велко")',
    phoneNumber: ["029200207", "029201991", "0887772258"],
  },
});

values.set(32, {
  id: 32,
  name: "За социална рехабилитация и интеграция",
  type: "answer",
});

values.set(321, {
  id: 321,
  name: 'Център за социална рехабилитация и интеграция "Подкрепа"',
  type: "center",
  director: "Светослав Лозанов",
  contacts: {
    address: 'гр. София, ж.к. "Слатина", ул. "Слатинска" № 26 – 28',
    phoneNumber: ["029714434", "029714435", "0898219345"],
  },
});

values.set(322, {
  id: 322,
  name: 'Център за социална рехабилитация и интеграция "Благовещение"',
  type: "center",
  director: "Вяра Границка",
  notes: 'Услугата се администрира от Сдружение "Каритас България".',
  contacts: {
    address: 'гр. София, ж.к. "Гоце Делчев", ул. "Киро Тулешков" № 16',
    phoneNumber: ["029441858", "029581482"],
  },
});

values.set(323, {
  id: 323,
  name: 'Център за социална рехабилитация и интеграция "Хиляда истории и една мечта"',
  type: "center",
  director: "Димитър Вакавлиев",
  notes: "Капацитет: 25 места",
  contacts: {
    address: 'гр. София, ж.к. "Дружба 1", ул. "5049" – до бл. 74',
    phoneNumber: ["0898470754"],
  },
});

values.set(324, {
  id: 324,
  name: "Център за психиатрично консултиране и психотерапия",
  type: "center",
  contacts: {
    address: "гр. София, ул. Цар Симеон 13",
    phoneNumber: ["029836023"],
    email: "adaptacia@abv.bg",
  },
});

values.set(325, {
  id: 325,
  name: "Център за социална рехабилитация и интеграция (с приоритет възрастни и деца с нисък ръст)",
  type: "center",
  director: "инж. Светослав Чернев",
  contacts: {
    address: 'гр. София, ул. "Св. Св. Кирил и Методи" № 78',
    phoneNumber: ["029884241", "0897064646"],
    website: "www.lpbulgaria.org",
  },
});

values.set(33, {
  id: 33,
  name: "За обществена подкрепа",
  type: "answer",
});

values.set(331, {
  id: 331,
  name: 'Център за обществена подкрепа (район "Витоша“)',
  type: "center",
  director: "Миглена Маркова – Господинова",
  notes: "Спешен прием с до 4 места",
  contacts: {
    address: 'гр. София, район "Витоша", ул. "305" (Неделник) № 1, ет.2',
    phoneNumber: ["0887003519"],
    email: "dragalevci_cop_dc@abv.bg",
  },
});

values.set(332, {
  id: 332,
  name: "Център за обществена подкрепа (район Надежда)",
  type: "center",
  director: "Мария Терзиева",
  notes: "Спешен прием с до 4 места",
  contacts: {
    address: 'гр. София, район "Надежда", ул. "Сава Филаретов" № 23, ет.3',
    phoneNumber: ["0878984078"],
  },
});

values.set(333, {
  id: 333,
  name: "Център за обществена подкрепа (район Подуяне)",
  type: "center",
  director: "Калудка Коен",
  notes: "Спешен прием с до 4 места",
  contacts: {
    address: 'гр. София, , район "Подуяне", ул. "Баба Вида" № 1, ет. 4',
    phoneNumber: ["0888773057"],
    email: "cop_poduene@abv.bg",
  },
});

values.set(334, {
  id: 334,
  name: 'Център за обществена подкрепа "Шанс"',
  type: "center",
  notes:
    "Основна задача да осъществява превенция на риска от изоставяне на деца и да подкрепя семействата, за да продължат и подобрят грижите за своите деца. Основна характеристика на Центъра е работата в екип и прилагане на индивидуален подход към потребностите на децата и техните семейства с цел постигане на възможно най-високата за тях степен на благополучие.",
  contacts: {
    address:
      "гр. София, ул. Спътник № 4, офис 2 ж.к. Христо Смирненски (Слатина)",
    phoneNumber: ["029815158", "0899873753", "0878120827"],
    email: "dilyana.todorova@sosbg.org",
  },
});

values.set(335, {
  id: 335,
  name: 'Център за самотни майки "Рождество Христово"',
  type: "center",
  contacts: {
    address: 'гр. София, ж.к. "Люлин", ул. "Търново" № 30',
    phoneNumber: ["0884458293"],
    email: "aalexkisiova@gmail.com",
  },
});

values.set(34, {
  id: "34",
  name: "Назад",
  type: "back",
});

values.set(4, {
  id: 4,
  name: "Пострадали от Насилие",
  type: "answer",
});

values.set(41, {
  id: 41,
  name: 'Кризисен център "Св. Петка"',
  type: "center",
  director: "Ани Тодорова",
  notes:
    'Услугата се администрира от Фондация "Асоциация Анимус".\n\nКризисният център е с денонощен достъп. Клиентите, които имат нужда от спешно настаняване, се обаждат първоначално на денонощната **Гореща телефонна линия, (за хора пострадали от насилие 029817686)** от където биват насочвани към адреса на Кризисния център. Друг начин на достъп е чрез Полицията.',
  contacts: {
    phoneNumber: ["029835205", "029835305", "029835405"],
  },
});

values.set(42, {
  id: 42,
  name: 'Кризисен център "Св. София" (с приоритет жени и деца, пострадали от домашно насилие)',
  type: "center",
  director: "Мария Боева",
  notes:
    'Услугата се администрира от Фондация "Асоциация Анимус".\n\nКризисният център разполага с добре обучен екип, който предоставя услуги като "Застъпничество и посредничество", "Информиране и консултиране", "Терапия и рехабилитация". **Гореща телефонна линия, за хора пострадали от насилие 029817686.**',
  contacts: {
    phoneNumber: ["0876131176", "0876545204"],
  },
});

values.set(5, {
  id: 5,
  name: "Горещи Линии",
  type: "menu",
  span: 2,
});

values.set(51, {
  id: 51,
  name: "Защита от Насилие",
  type: "answer",
});

values.set(511, {
  id: 511,
  name: "Линия за онлайн безопастност",
  type: "center",
  notes:
    "Може да се потърси помощ, в случай на притеснителни публикации, видео, снимки или друго съдържание или поведение (като заплахи и обиди, тормоз, изнудване, кражба на профил или лични данни, измами или подвеждане), насочени към дете.",
  contacts: {
    phoneNumber: ["124123"],
  },
});

values.set(512, {
  id: 512,
  name: "Националната телефонна линия за подкрепа и насочване на хора, пострадали от насилие",
  type: "center",
  notes:
    "Денонощна услуга за жени, мъже и деца, и техните близки, които са станали жертва на насилие и експлоатация. **За обаждания от чужбина всеки ден от 9:00 до 21:00 е открита линията 0035929817686**",
  contacts: {
    phoneNumber: ["080018676"],
  },
});

values.set(513, {
  id: 513,
  name: "Психологична денонощна линия за обслужване при кризи",
  type: "center",
  notes: 'Приемна за жертви на домашно насилие в УМБАЛСМ "Пирогов", София',
  contacts: {
    phoneNumber: ["070040150"],
  },
});

values.set(514, {
  id: 514,
  name: "Националната телефонна линия за подкрепа и насочване в случай на домашно насилие",
  type: "center",
  notes:
    'Управлява се от "Алианс за защита от насилие, основано на пола". Денонощна консултация.',
  contacts: {
    phoneNumber: ["080011977"],
  },
});

values.set(515, {
  id: 515,
  name: "Помощ на пострадали, психологическо и юридическо консултиране, кризисна интервенция",
  type: "center",
  notes: "Фондация П.У.Л.С, Перник",
  contacts: {
    phoneNumber: ["076601010", "076603360"],
    email: "pulse.women@gmail.com",
  },
});

values.set(52, {
  id: 52,
  name: "Правна Помощ",
  type: "answer",
});

values.set(521, {
  id: 521,
  name: "Националната телефонна линия за правна помощ",
  type: "center",
  notes:
    "Работи всеки делничен ден от 9:00 до 17:00.\nНа линията може да бъде получен правен съвет и консултация.",
  contacts: {
    phoneNumber: ["070018250"],
  },
});

values.set(522, {
  id: 522,
  name: "Линия за сигнали, жалби и консултации относно здравни права",
  type: "center",
  notes:
    "Управлява се от Национална пациентска организация.\nРаботното време на линията е от 11:00 – 15:00 часа.",
  contacts: {
    phoneNumber: ["070010515"],
  },
});

values.set(53, {
  id: 53,
  name: "Други",
  type: "answer",
});

values.set(531, {
  id: 531,
  name: "Националната информационна линия за наркотиците, алкохола и хазарта",
  type: "center",
  notes: 'Управлявана от сдружение "Фракарита България"',
  contacts: {
    phoneNumber: ["0888991866"],
  },
});

values.set(532, {
  id: 532,
  name: "Национална телефонна линия за борба с трафика на хора",
  type: "center",
  contacts: {
    phoneNumber: ["080020100"],
  },
});

values.set(54, {
  id: "54",
  name: "Назад",
  type: "back",
});

module.exports = values;
