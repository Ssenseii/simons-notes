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
  { id: 0, date: "29-09-23", title: "SIMONS NOTES",  tag: "t", },
  { id: 1, date: "10-10-23", title: "DESIGN SYSTEMS", tag: "t" },
  { id: 2, date: "29-10-23", title: "SHADER STUDY", tag: "t" },
  { id: 3, date: "10-11-23", title: "BOOGIE2988", tag: "p" },
  { id: 4, date: "30-11-23", title: "My Portfolio", tag: "d" },
  { id: 5, date: "01-12-23", title: "CPlusPlus", tag: "t" },
  { id: 6, date: "06-01-24", title: "Laravel Job", tag: "p" },
  { id: 7, date: "05-06-24", title: "Middle Year", tag: "p" },
];


export default PostList