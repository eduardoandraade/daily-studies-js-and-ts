class User {
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password){
        if (this.email === email && this.password === password) {
            console.log("Login realizado com sucesso!")
        } else {
            console.log("Falha ao fazer login! Email ou senha incorretos.")
        }
    }
}

const dudu = new User("Eduardo Andrade", "eduardoandraade@outlook.com", "dudu123456")

dudu.login("eduardoandraade@outlook.com", "dudu123456")
console.log(dudu)