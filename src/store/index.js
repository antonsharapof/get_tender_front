import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      allTenders: [{
        "tender_number": "№ 0319200000521000045",
        "type_tender": "44-ФЗ\nЭлектронный аукцион",
        "tender_status": "Подача заявок",
        "start_price": "167 219,13 ₽",
        "Объект закупки": "Рубка погибших и поврежденных лесных насаждений от воздействия различных негативных факторов (Сплошная санитарная рубка: \"Епишинское участковое лесничество\" квартал 196 выдел 13,14)",
        "Заказчик": "КРАЕВОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ \"ЕНИСЕЙСКОЕ ЛЕСНИЧЕСТВО\"",
        "Размещено": "23.02.2021",
        "Обновлено": "23.02.2021",
        "Окончание подачи заявок": "03.03.2021",
        "Способ определения постав": "Электронный аукцион",
        "Наименование электронной ": "РТС-тендер",
        "Адрес электронной площадк": "http://www.rts-tender.ru",
        "Размещение осуществляет": "Заказчик\nКРАЕВОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ \"ЕНИСЕЙСКОЕ ЛЕСНИЧЕСТВО\"",
        "Наименование объекта заку": "Рубка погибших и поврежденных лесных насаждений от воздействия различных негативных факторов (Сплошная санитарная рубка: \"Епишинское участковое лесничество\" квартал 196 выдел 13,14)",
        "Этап закупки": "Подача заявок",
        "Сведения о связи с позици": "202103192000005002000049",
        "Номер типового контракта,": "Связь с типовым контрактом, типовыми условиями контракта не установлена",
        "Организация, осуществляющ": "КРАЕВОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ \"ЕНИСЕЙСКОЕ ЛЕСНИЧЕСТВО\"",
        "Почтовый адрес": "Российская Федерация, 663180, Красноярский край, Енисейск г, УЛ ДОРЫ КВАШ, Д. 6А",
        "Место нахождения": "Российская Федерация, 663180, Красноярский край, Енисейск г, УЛИЦА ДОРЫ КВАШ, Д. 6А",
        "Ответственное должностное": "Ямщиков П. М.",
        "Адрес электронной почты": "lesenis@yandex.ru",
        "Номер контактного телефон": "7-39195-22471",
        "Дополнительная информация": "Информация отсутствует",
        "Дата и время начала срока": "23.02.2021 14:41",
        "Дата и время окончания ср": "03.03.2021 21:00",
        "Место подачи заявок": "РТС-тендер",
        "Порядок подачи заявок": "Согласно документации (раздел 1 Информационная карта)",
        "Дата окончания срока расс": "04.03.2021",
        "Дата проведения аукциона ": "05.03.2021",
        "Время проведения аукциона": "11:25",
        "Начальная (максимальная) ": "167 219,13",
        "Валюта": "Российский рубль",
        "Идентификационный код зак": "212241200139924470100100490490240244",
        "Источник финансирования": "Средства бюджетных учреждений для выполнения Государственного задания",
        "Преимущества": "Не установлены",
        "Требования к участникам": "1  Единые требования к участникам закупок в соответствии с ч. 1 ст. 31 Закона № 44-ФЗ\nдополнительная информация к требованию отсутствует\n2  Требования к участникам закупок в соответствии с частью 1.1 статьи 31 Федерального закона № 44-ФЗ\nдополнительная информация к требованию отсутствует",
        "Ограничения и запреты": "1 Закупка у субъектов малого предпринимательства и социально ориентированных некоммерческих организаций\nдополнительная информация к ограничению отсутствует",
        "Предусмотрена возможность": "Да",
        "Место доставки товара, вы": "Российская Федерация, Красноярский край, Енисейский р-н, В соответствии с техническим заданием (раздел 3 документации)",
        "Срок исполнения контракта": "С момента заключения контракта по 31.12.2021 г.",
        "Требуется обеспечение исп": "Да",
        "Размер обеспечения исполн": " Российский рубль",
        "Порядок предоставления об": "Согласно документации (раздел 1 Информационная карта)",
        "Платежные реквизиты для о": "p/c 00000000000000000000,  л/c См. прилагаемые документы,  БИК 000000000"
    }],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getTenders(state) {
      return state.allTenders
    }
  }
})
