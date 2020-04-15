export const author = {
    name: 'Dima',
    age: 28,
    sex: 'male'
};

export const botMessages = [
    'Отвечаю на Ваше сообщение',
    'Мне не интересно, что Вы пишите',
    'Получите ответ'
];

export const chatsData = {
    1: {
        name: 'Advantages',
        messages: [
            {
                author: author.name,
                text: 'I need to think about it'
            },
            {
                author: author.name,
                text: 'Почини ответ Бота, когда компонент was mounted'
            }
        ],
    },
    2: {
        name: 'About',
        messages: [
            {
                author: author.name,
                text: 'A big company'
            }, 
            {
                author: author.name,
                text: 'Надо отменить ответ Бота, когда компонент построился'
            }
        ]
    }
};