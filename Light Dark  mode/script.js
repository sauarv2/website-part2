document.getElementById('toggle').addEventListener(
    'click', ()=>{
        document.getElementsByTagName('body')[0].classList.toggle('dark_them')
    }
)
// ******************** instade you can use it
/*
const check = document.getElementById('checkbox');

check.addEventListener('click',()=>{
    document.body.classList.toggle('darkThem');
})
*/