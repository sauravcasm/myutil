let fs = require("fs");
let path = require("path");

//inputs started
var i=0;
var options=[];
var filenames=[];
var grt=[];
function inputAll(inputArr)
{
  
//console.log(inputArr[2].charAt(0));
  while(i<inputArr.length)//for options
  {
    if(inputArr[i].charAt(0)=='-')
    {
    options.push(inputArr[i]);
    }
    i++;
  }

  i=0;
  while(i<inputArr.length)//for filenames
  {
    //console.log("inside filenames");
    if(inputArr[i].charAt(0)!='-' && inputArr[i]!="grt" && inputArr[i]!="grtgrt" )// > and >> dono mein hi charAt(0) > hai
    {
      filenames.push(inputArr[i]);
    }
    i++;
  }

  i=0;
  while(i<inputArr.length)
  {
    if(inputArr[i]=="grt" || inputArr[i]=="grtgrt")
    {
      grt.push(inputArr[i]);
    }
    i++;
  }

   //console.log("grt->",grt)
   //console.log("options->",options);
   //console.log("filenames->",filenames);
  // console.log("filenames length->",filenames.length);

  if(filenames.length==1 && options.length==0 && grt.length==0)
  {
    //console.log("cmdone called");
    cmdone(filenames[0]);
  }

  if(filenames.length>1 && options.length==0 && grt.length==0)
  {
    //console.log("cmdtwo called");
    cmdtwo(filenames);
  }

  if(filenames.length==1 && options[0]=='-s')
  {
  //console.log("three is running");
  cmdthree(filenames[0]);
  }

  if(filenames.length==1 && options[0]=='-b')
  {
  //console.log("four is running");
  cmdfour(filenames[0]);
  }

  if(filenames.length==1 && options[0]=='-n')
  {
  //console.log("five is running");
  cmdfive(filenames[0]);
  }

  if(grt[0]=="grt" && options.length==0)
  {
    //console.log("six called");
    cmdsix(filenames[0],filenames[1]);
  }

  if(grt[0]=="grtgrt")
  {
    //console.log("seven called");
    cmdseven(filenames[0],filenames[1]);
  }

  if(grt[0]=="grt" && options[0]=="-s")
  {
    //console.log("eight called");
    cmdeight(filenames[0],filenames[1]);
  }

  }
//inputs over

//commands
//1)wcat filename

function cmdone(filename){
  //console.log(filename);
  let data=fs.readFileSync(filename+".txt",'utf8');
  console.log(data);
}

function cmdtwo(filenames)
{
// console.log("cmdtwo is running");
// console.log(filenames);
for(let k=0;k<filenames.length;k++)
{
 // console.log(filenames[k]);
let data=fs.readFileSync(filenames[k]+".txt",'utf8');
 console.log(data);
}
//console.log(data);
}

function cmdthree(filename)
{
 
  //console.log("cmdthree is running");
  var lines = fs.readFileSync(filename+".txt").toString().split("\n");

  //console.log(lines);
  for(let k=0;k<lines.length;k++)
  {
    if(lines[k]!="\r"){
  console.log(lines[k]);
    
  }
  }
}

function cmdfour(filename)
{
  //console.log("four is running");
  let lineno=1;
  var lines = fs.readFileSync(filename+".txt").toString().split("\n");
  //console.log(lines);
  for(let k=0;k<lines.length;k++)
  {
    //if(lines[k]!="\r"){
  console.log(lineno+"."+lines[k]);
    lineno++;
  
  }
}

function cmdfive(filename)
{
  //console.log("cmdfive is running");
  let lineno=1;
  var lines = fs.readFileSync(filename+".txt").toString().split("\n");
  //console.log(lines);
  for(let k=0;k<lines.length;k++)
  {
    if(lines[k]!="\r"){
  console.log(lineno+"."+lines[k]);
    lineno++;
    }
  }
}

function cmdsix(filename1,filename2)
{
  fs.copyFileSync(filename1+".txt", filename2+".txt");
}

function cmdseven(filename1,filename2)
{
//console.log("Seven is running");
  let data= fs.readFileSync(filename1+".txt",'utf8');
  //let data2= fs.readFileSync(filename2,'utf8');
  // console.log(data1);
  // console.log("datatwo",data2);
  fs.appendFileSync(filename2+".txt", "\n"+data);// \n se jahan pointer h next letter k liye uski next line mein jaega
}

function cmdeight(filename1,filename2)
{
  //console.log("eight is running");

  var lines = fs.readFileSync(filename1+".txt").toString().split("\n");
  //console.log(lines);
for(let i=0;i<lines.length;i++) {
    if(lines[i]!="\r")
    {
     let data="";
     data+=lines[i];
     //console.log(i);
   // console.log(data);
    fs.appendFileSync(filename2+".txt",data);
    }
}



  // var lines=fs.readFileSync('./'+filename1,'utf8').split('\n').filter(Boolean);
  // console.log(lines.length);
  // for(let k=0;k<lines.length;k++)
  // {
  //   if(lines[k]!="\r"){
  // console.log(lines[k]);
  //   var data="";
  //   data+="\n"+lines[k];//doubt string overriding old one
  //   console.log("data in data:"+k,data);
  // }
  // }
  // //console.log(data);
  // fs.appendFileSync(filename2,data);
}




function wcatFn(input)
{
//console.log(input);
inputAll(input);
}


module.exports = {
  fn:wcatFn
}