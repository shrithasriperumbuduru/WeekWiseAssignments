class book
{
    title;
    author; 
    pages;
    isAvailable=true; 
    constructor(title,author,pages,isAvailable=true)
    {
        this.title=title
        this.author=author
        this.pages=pages
        this.isAvailable=isAvailable
    }
    borrow()
    {
            if(this.isAvailable)
            {
            this.isAvailable=false
            return 'Book borrowed'
            }
        return 'No Book Available'
    }
    returnBook()
    {
            if(!this.isAvailable)
            {
            this.isAvailable=true
            return 'Retured Succesfully'
            }
        return 'Book is not borrowed'
    }
    getInfo()
    {
            console.log(`The ${this.title} is the author ${this.author} and borrow status ${this.isAvailable}`)
    }
    isLongBook()
    {
        if(this.pages>300)
        {
            return true
        }
        return false
    }
}
let book1=new book('HarryPotter','the Hobbit',1984,true)
let book2=new book('Dbms','anusha',194,true)
let book3=new book('Alice and worderland','lewis',400,true)
let book4=new book('the pearl','john',100,true)
let book5=new book('dqes','james',198,true)
console.log(book1.borrow())
console.log(book2.borrow())
console.log(book1.getInfo())
console.log(book2.getInfo())
console.log(book1.returnBook())
