const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const accordion = document.getElementsByClassName('contentBx');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})

for( i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}
