

const person = {
    first: 'Robert',
    last: 'Herjavec',
    fullname(){
        return `${this.first} ${this.last}`
    }
}

person.fullname(); //"Robert Herjavec"