const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');


toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})

let acc = document.getElementsByClassName("contentBx");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].onclick = function () {

                if (!this.classList.contains('active')) {
                    closeAll();
                }

                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            }
        }

        function openAll() {
            for (i = 0; i < acc.length; i++) {
                acc[i].classList.add("active");
                acc[i].nextElementSibling.style.maxHeight = acc[i].nextElementSibling.scrollHeight + "px";
            }
        }

        function closeAll() {
            for (i = 0; i < acc.length; i++) {
                acc[i].classList.remove("active");
                acc[i].nextElementSibling.style.maxHeight = null;
            }
        }

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener('click', function() {
                this.classList.toggle('active')
            })
        }

    // function buttonPress (){
    //     for (i = 0; i < acc.length; i++) {
    //         acc[i].addEventListener('click', function () {
    //             if (this.classList.contains('active')){
    //                 this.classList.remove('active')
    //             } else {
    //                 this.classList.toggle('active')
    //             }
    //         })
    //     }
    // }

        document.getElementById('openAll').addEventListener('click', openAll);
        document.getElementById('closeAll').addEventListener('click', closeAll);
        // document.getElementById('OC').addEventListener('click', buttonPress);

        