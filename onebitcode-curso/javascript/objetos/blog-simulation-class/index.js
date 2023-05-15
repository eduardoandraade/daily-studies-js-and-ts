const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Achei incrivel", "Pagina 10 sensacional...")

post.addComment("Eduardo", "muito bom")
post.addComment("Lucas", "irado, nota 2")

console.log(john)
console.log(post)