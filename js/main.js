import {createItem} from './function.js'

const input = document.querySelector('input')
const ajouter = document.querySelector('.add')
const tds = document.querySelectorAll('td')
const task = document.querySelector('.task')


ajouter.onclick = ()=>{ 
    
    if(input.value === "" ){
        alert('Vous devez écrire qch!')
    }else{
        task.append(createItem(input.value))
    }
    
    input.value = ""
}


tds.forEach(td => {
    td.onclick = (e)=>{
        let tdCourant = e.target
        tdCourant.classList.add('active')
        tds.forEach(td => {
            if(td != tdCourant)
            td.classList.remove('active')
        })
    }
});

