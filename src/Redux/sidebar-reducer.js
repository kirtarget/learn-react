const initialState = {
    sbFriends: [
        {
            id: 1,
            name: 'Кислый',
            profilePic: 'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg'

        },
        {
            id: 2,
            name: 'Ржавый',
            profilePic: 'https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg'

        },
        {
            id: 3,
            name: 'Малая',
            profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9bkbF9tE8v1HAWyvOa5sFPW-RbuwZq7J21cfojAsVIwNLskF-ea48-QJAFqNexLdUyE&usqp=CAU'

        }
    ],
    navLinks: [

        {
            name: 'Профиль',
            link: '/profile'
        },
        {
            name: 'Сообщения',
            link: '/dialogs'
        },
        {
            name: 'Новости',
            link: '/news'
        },
        {
            name: 'Музыка',
            link: '/music'
        },
        {
            name: 'Настройки',
            link: '/settings'
        },
    ]
}

const sidebarReducer = (state = initialState, action) => {

    return state
}

export default sidebarReducer