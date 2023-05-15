/** 
  const book = {
    title: 'Eragon',
    pages: 468,
    published: true,
    inStock: 20,
    tags: ["fantasy", "adventure", "medieval"],
    author: {
        name: "Christopher Paolini"
    },
    addOnStock(quantity) {
        this.inStock += quantity
    },
    save: function (){
        
    }
}
**/

function Book(title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function (quantity) {
        this.inStock += quantity
    }
    this.save = function () {
        // salva no banco de dados
    }
}

const author = { name: "Christopher Paolini"}
let tags = ["fantasy", "adventure"]

const pequenoPrincipe = new Book("Pequeno Principe", 113, tags, author)

console.log(pequenoPrincipe)

const rulesLife = new Book("Regras da Vida", 247, tags, author)

console.log(rulesLife)