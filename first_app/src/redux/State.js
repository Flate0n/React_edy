import ava0 from './img/ava_0.jpg'
import ava1 from './img/ava_1.jpg'
import ava2 from './img/ava_2.jpg'
import ava3 from './img/ava_3.jpg'
import likes_img from './img/like_img.png';
import avatar_img from './profile/img/profile__ava.jpg';
import heade_img from './profile/img/profile__heder.jpg';

const state = {
    profilePage: {
        info:{
            name:'Egor',
            id : '2312',
            ava : avatar_img,
            wrapperHead : heade_img
        },
        likesImg: likes_img,
        posts: [
            { id: 0, post: 'NYAAA :3', ava: ava0, likesCount: 340 },
            { id: 1, post: 'Where is Kobayashi-san???', ava: ava1, likesCount: 281 },
            { id: 2, post: 'Да, я слышала о NEKO', ava: ava3, likesCount: 185 },
            {
                id: 3, post: `
                  Рецепт оладушек :
                  Муку, сахар и щепотку соли смешайте.
                  Яйцо взбейте с молоком, добавьте гашеную уксусом соду.
                  Добавьте муку. Замесите до однородной массы.
                  Тесто должно получиться густым. По необходимости добавьте еще муки.
                  Порциями примерно со столовую ложку вылейте тесто на раскаленную сковороду.
                  Обжарьте оладушки с обеих сторон на среднем огне.`
                , ava: ava2, likesCount: 10
            },
        ]
    },
    dialogPage: {
        dialogs: [
            { id: 0, name: 'Mom' },
            { id: 1, name: 'Dad' },
            { id: 2, name: 'Seka' },
            { id: 3, name: 'Timas' },
            { id: 4, name: 'Me' }
        ],
        masseges: [
            { idperson: 4, id: 0, massege: 'Hi )' },
            { idperson: 4, id: 1, massege: 'What are you doing?' },
            { idperson: 4, id: 1, massege: 'Haha' },
            { idperson: 4, id: 2, massege: 'Start working' }
        ]
    },
    pages:{
        navBar : [
            { link: '/profile', text: 'Profile' },
            { link: '/dialogs', text: 'Masseges' },
            { link: '/news', text: 'News' },
            { link: '/music', text: 'Music' },
            { link: '/settings', text: 'Settings' }
          ]
    }
}
export default state