const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?i=tt3896198&apikey=4e492926&s=frozen#
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)