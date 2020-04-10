function Pessoa(){
    this.idade = 0 

    setInterval(() => { // Com arrow o this não muda 
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa

