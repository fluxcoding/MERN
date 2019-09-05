// console.log("Hello node js");


// console.log(process.env, process.argv);

// process.newProperty = 1;

//console.log(process.newProperty); 

const fs = require('fs');

//Read file

fs.readFile("package.json", (err,data) => {
    if(err)
    return false;

    console.log(data.toString());
});


fs.appendFile("testfile1.txt", "This is some test content", (err) => {
    if(err)
    return false;

    console.log("saved");
});

// fs.open("testfile2.txt","w", (err,file) => {
//     if(err)
//     return false;

//     console.log('saved',file);
// });

// fs.writeFile('testfile3.txt', "This is new test file3",(err)=>{
//     if(err)
//     return false;

//     console.log('created');
// })

// fs.unlink("testfile3.txt",(err)=>{
//     if(err)
//     {
//     console.log(err);
//     return false;
//     }
//     console.log("deleted");
// });


fs.rename("testfile1.txt","newtestfile1.txt", (err)=>
{
    if(err){
        console.log(err); return false;
    }
    console.log('renamed');
});