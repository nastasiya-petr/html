var button = document.querySelector('button');
button.addEventListener('click',function(){
    alert('+375298302353')
});

const avatar = document.getElementById('avatar');
const avatarAnchor = document.getElementById('avatarAnchor');
document.addEventListener('scroll', (e) => {
    const clientRect = document.body.getClientRects()
    const y = clientRect[0].y;
    avatarAnchor.style.transform = `translateX(${-y}px)`;
    avatar.style.transform = `rotate(${y}deg)`;
});
