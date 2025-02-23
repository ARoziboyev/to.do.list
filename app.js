const inputs = document.getElementById('inputs')
const inp1 = document.getElementById('inp1')
const btn1 = document.getElementById('btn1')
const wrapper = document.getElementById('wrapper')
const chek = document.getElementById('chek')
const pp = document.getElementById("pp")
btn1&&btn1.addEventListener('click', function(){
    window.location.reload()
})

function validate(inp1) {
    if (inp1.value.trim() == '') {
        alert('Iltimos, matnni kiriting');
        return
    }
    return true; 
}

function creetCard(user) {
    return` <div id="wrapper">
            <div class="card">
            <input type="checkbox" name="" id="chek">
                <p id = "pp">${user.inp1}</p>
              <div class="btns">
              <button data-id = ${user.id}  id="delete"> <img src="imegs/edit.svg" width="25" height="25" alt=""></button>
                <button data-id = ${user.id}  id="delete"><img src="imegs/delet.svg" width="25" height="25" alt=""></button>
              </div>
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
        alert("Rosdan ham o'chirasizmi")
        this.parentNode.parentNode.remove()

        const checkbox = document.getElementById("check");
        const pp = document.getElementById("pp");
      
        checkbox.addEventListener("change", function () {
          pp.style.textDecoration = this.checked ? "line-through" : "none";
        });

    })
})

})

})