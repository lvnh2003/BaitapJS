const users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Van Dinh'
    }
]

const comments = [
    {
        id: 1,
        user_id: 1,
        content: 'sao chưa ra video anh ơi'
    },
    {
        id: 2,
        user_id: 2,
        content: 'vừa ra xong em ơi'
    },
    {
        id: 3,
        user_id: 1,
        content: 'cam ơn anh'
    },
    {
        id: 4,
        user_id: 3,
        content: 'chém gió cho vui'
    }
];
function getUser()
{
    return users.filter((user)=> 
    {
        return idAllUsers.includes(user.id);
    })
}
var idAllUsers= comments.map((comment)=> 
{
    return comment.user_id;
})


const commentContent = document.getElementById('comment');
var content = '';
comments.forEach(function (comment) {
    //  user tham gia comment này
    const user = users.find(function (user) {
        return user.id === comment.user_id;
    })
    content += `<li>${user.name}: ${comment.content}</li>`;
});
commentContent.innerHTML = content;