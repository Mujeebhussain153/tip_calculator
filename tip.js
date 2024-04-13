let incrementPeople = document.getElementById('increment')
let decrementPeople = document.getElementById('decrement')


const persons = {
    plus: 1
}

incrementPeople.onclick = () => {
    if (persons.plus >= 15){
        return
    }
    else {
        persons['plus']+=1
        document.getElementById('people').innerText = persons['plus']
    }
}

decrementPeople.onclick = () => {
    if(persons.plus <= 1){
        return
    }
    else{
        persons['plus']-=1
        document.getElementById('people').innerText = persons['plus']
    }
}