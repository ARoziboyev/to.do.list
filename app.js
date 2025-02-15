const inputs = document.getElementById('inputs')
const inp1 = document.getElementById('inp1')
const btn1 = document.getElementById('btn1')
const wrapper = document.getElementById('wrapper')

btn1&&btn1.addEventListener('click', function(){
    window.location.reload()
})

function validate(inp1) {
    if (inp1.value.trim() == '') {
        alert('Iltimos, matnni kiriting');
    }
    return true; 
}

function creetCard(user) {
    return` <div id="wrapper">
            <div class="card">
                <p>${user.inp1}</p>
              <button data-id = ${user.id}  id="delete"> <img src="imegs/ptichka.svg" width="30" height="30" alt=""></button>
                <button data-id = ${user.id}  id="delete"><img src="imegs/delet.svg" width="30" height="30" alt=""></button>
                </div>
                </div>`
            }
            
            inputs && inputs.addEventListener('submit',function(event){
                event.preventDefault()
                const isValid = validate(inp1)
                if (!isValid) {
                    return;
                }
                const user = {
                    inp1: inp1.value,
                    id:Date.now()
                }
                
                const card = creetCard(user)
                wrapper.innerHTML += card;
                
                let date = [];
                if (localStorage.getItem('users')) {
                    date = JSON.parse(localStorage.getItem('users'))
                }
                date.push(user)
                localStorage.setItem('users',JSON.stringify(date))

                inputs.reset();
})


document.addEventListener('DOMContentLoaded',function(){
    let date = [];
    if (localStorage.getItem('users')) {
        date = JSON.parse(localStorage.getItem('users'))
    }

date.length > 0 && date.forEach(value =>{
    let card = creetCard(value)
    wrapper.innerHTML += card
    
    const remuButtons = document.querySelectorAll('.card #delete')
    
remuButtons.length > 0 && remuButtons.forEach(btn =>{
    btn && btn.addEventListener('click',function(){
        
        
        let users =[]
        if (localStorage.getItem('users')) {
           users = JSON.parse(localStorage.getItem('users'))
        }
        
        let id = this.getAttribute('data-id')

        if (id) {
            users = users.filter(user =>{
                return user.id != id;
            })
        }

        localStorage.setItem('users', JSON.stringify(users))
        alert("bajarildi")
        alert("Rosdan ham o'chirasizmi")
        this.parentNode.parentNode.remove()

    })
})

})

})