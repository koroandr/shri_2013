/**
 * Created with IntelliJ IDEA.
 * User: koroandr
 * Date: 19.08.13
 * Time: 20:21
 * To change this template use File | Settings | File Templates.
 */


define(function(){

    var menu = {menu_items: []};
    for (var i = 1; i <= 15; i++) {
        menu.menu_items.push({
            number: i,
            text: i.toString()
        });
    }
    var questions = [
        {
            question_body: {
                number: 1,
                caption: "Вопрос 1",
                text: 'Год рождения.'
            },
            button_type: "next",
            button_caption: "Далее"
        },
        {
            question_body: {
                number: 2,
                caption: "Вопрос 2",
                text: 'Город, в котором вы живёте.'
            },
            button_type: "next",
            button_caption: "Далее"
        },
        {
            question_body: {
                number: 3,
                caption: "Вопрос 3",
                text: 'Вуз, факультет, специальность, кафедра.'
            },
            button_type: "next",
            button_caption: "Далее"
        },
        {
            question_body: {
                number: 4,
                caption: "Вопрос 4",
                text: 'Год окончания вуза.'
            },
            button_type: "next",
            button_caption: "Далее"
        },
        {
            question_body: {
                number: 5,
                caption: "Вопрос 5",
                text: 'Уровень владения английским языком'
            },
            button_type: "next",
            button_caption: "Далее"
        },
        {
            question_body: {
                number: 6,
                caption: "Вопрос 6",
                text: 'Чего вы ожидаете от участия в Школе?'
            },
            button_type: "next",
            button_caption: "Далее"
        },
        {
            question_body: {
                number: 7,
                caption: "Вопрос 7",
                text: 'Откуда вы о нас узнали?'
            },
            button_type: "next",
            button_caption: "Далее"
        },
        {
            question_body: {
                number: 8,
                caption: "Вопрос 8",
                text: 'Сколько времени вы были бы готовы уделять стажировке или работе в Яндексе?'
            },
            button_type: "next",
            button_caption: "Далее"
        },
        {
            question_body: {
                number: 9,
                caption: "Вопрос 9",
                text: 'Расскажите о вашем опыте разработки. Нам будет интересно всё — как серьезный интерфейс, так и просто домашняя страничка'
            },
            button_type: "next",
            button_caption: "Далее"
        },
        {
            question_body: {
                number: 10,
                caption: "Вопрос 10",
                text: 'Если вы где-нибудь работали, расскажите, какие у вас были должностные обязанности и был ли опыт работы в команде.'
            },
            button_type: "next",
            button_caption: "Далее"
        },
        {
            question_body: {
                number: 11,
                caption: "Вопрос 11",
                text: 'Перечислите, какими программными продуктами вы пользуетесь в своей работе — от редактора до специализированных утилит (Intellij Idea, Node.js, Uglify.js, GNU Make). Для каждого инструмента укажите, какие задачи вы с помощью него решаете и почему выбрали именно его.'
            },
            button_type: "next",
            button_caption: "Далее"
        },
        {
            question_body: {
                number: 12,
                caption: "Вопрос 12",
                text: 'Пользуетесь ли вы командной строкой? Какими командами вы пользуетесь и какие задачи вы решаете с их помощью? С какими программами вы преимущественно или полностью взаимодействуете через интерфейс командной строки?'
            },
            button_type: "next",
            button_caption: "Далее"
        },
        {
            question_body: {
                number: 13,
                caption: "Вопрос 13",
                text: 'Напишите на JavaScript функцию, которая выводит список всех чисел, которые равны сумме факториалов своих цифр. Пример такого числа:' +
                '<p>4! + 0! + 5! + 8! + 5! = 40585</p>' +
                'В качестве ответа на вопрос пришлите ссылку на <a href="http://jsfiddle.net/">http://jsfiddle.net/</a>' +
                    ' с вашим кодом или на ваш репозиторий на <a href="https://github.com/">https://github.com/</a>.'
            },
            button_type: "next",
            button_caption: "Далее"
        },
        {
            question_body: {
                number: 14,
                caption: "Вопрос 14",
                text: 'Вы — пилот грузового межгалактического корабля. ' +
                    'Ваша работа — перевозка грузов с одной планету на другую. ' +
                    'Грузоподъемность вашего корабля ограничена, поэтому за один рейс вы ' +
                    'можете перевезти не более N кг полезного груза. Ваш корабль умеет сообщать свое ' +
                    'состояние (местоположение и степень загруженности), а также летать в любую точку ' +
                    'пространства. Каждая планета может содержать на себе груз, который можно взять. ' +
                    'Также на каждой планете груз можно оставить. <br/>' +
                    'Задание' +
                    'Даны незавершенные интерфейсы корабля и планеты. Напишите недостающий код.' +
                    'Полное условие задачи доступно на <br/>' +
                    '<a href="https://github.com/yandex-shri/introtask-space.">https://github.com/yandex-shri/introtask-space.</a>' +
                    'В качестве ответа на вопрос пришлите ссылку на <a href="http://jsfiddle.net/">http://jsfiddle.net/</a>' +
                    ' с вашим кодом или на ваш репозиторий на <a href="https://github.com/">https://github.com/</a>.'
            },
            button_type: "next",
            button_caption: "Далее"
        },
        {
            question_body: {
                number: 15,
                caption: "Вопрос 15",
                text: ''
            },
            button_type: "submit",
            button_caption: "Отправить"
        }
    ];
    return {
        menu: menu,
        questions: questions
    };
});