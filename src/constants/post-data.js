// import * as fs from 'fs'

// function getJSXPosts(folderPath){
//   const files = fs.readdirSync(folderPath);
//   const jsxFiles = files.filter(file => file.endsWith('.jsx'));

//   const jsxPosts = [];

//   for (const jsxFile of jsxFiles){
//     const jsxPostContent = fs.readFileSync(jsxFile, 'utf-8')
//     jsxPosts.push(jsxPostContent)

//     return jsxPosts

//   }
// }

// const path = '../posts'


// const PostList = getJSXPosts(path)

const PostList = [
  { id: 0, date: "29-09-23", title: "SIMONS NOTES", day: "29", month: "September", year: "2023", tag: "technical", },
  { id: 1, date: "10-10-23", title: "DESIGN SYSTEMS", day: "10", month: "October", year: "2023", tag: "personal" },
  { id: 2, date: "29-10-23", title: "SHADER STUDY", day: "29", month: "October", year: "2023", tag: "technical" },
  { id: 3, date: "10-11-23", title: "BOOGIE2988", day: "10", month: "November", year: "2023", tag: "personal" },
];


export default PostList