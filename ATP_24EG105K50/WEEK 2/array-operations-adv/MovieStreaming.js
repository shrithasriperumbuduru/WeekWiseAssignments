const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
const filter_Scifi=movies.filter(element=>element.genre=='Sci-Fi')
  const map_title=movies.map(element=>{
        return {Title:element.title,Rating:element.rating}
  })
  const total=movies.reduce((acc,element)=>(acc+element.rating),0)
  const average=total/movies.length
  const find_Joker=movies.find(element=>element.title=='Joker')
  const find_Index=movies.findIndex(element=>element.title=='Avengers')
  console.log(`filter() only "Sci-Fi" movies: `)
  console.log(filter_Scifi)
  console.log(`map() to return:`)
  console.log(map_title)
  console.log(`reduce() to find average movie rating:  ${average}`)
  console.log(`find() movie "Joker": `)
  console.log(find_Joker)
  console.log(`findIndex() of "Avengers": ${find_Index}`)
