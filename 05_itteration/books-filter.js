const books = [
    {title: 'Book One', genre: 'Fiction', publish: '1981', edition: '2004'},
    {title: 'Book Two', genre: 'Non-Fiction', publish: '1992', edition: '2008'},
    {title: 'Book Three', genre: 'History', publish: '1999', edition: '2007'},
    {title: 'Book Four', genre: 'Non-Fiction', publish: '1989', edition: '2010'},
    {title: 'Book Five', genre: 'Science', publish: '2009', edition: '2014'},
    {title: 'Book Six', genre: 'Fiction', publish: '1987', edition: '2010'},
    {title: 'Book Seven', genre: 'History', publish: '1986', edition: '1996'},
    {title: 'Book Eight', genre: 'Science', publish: '1990', edition: '2014'},
    {title: 'Book Nine', genre: 'Fiction', publish: '1976', edition: '2018'},
    {title: 'Book Ten', genre: 'Geography', publish: '2009', edition: '2021'},
]

let newBooks = books.filter( (key) => {
    return key.genre === 'Fiction' && key.publish > '1970'
    
})

console.log(newBooks);