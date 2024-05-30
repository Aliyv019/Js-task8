// var arr=[32,86,84,654,1,654,315,87,3213,8,16,87,359,51,98,35,56]
// var even=[]
// var odd=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         even.push(arr[i])
//     }
//     else{
//         odd.push(arr[i])
//     }
// }
// console.log(`tek ededler:`,odd);
// console.log(`cut ededler:`,even);

var arr=[21,653,54,657,2261,"jashd","sajfh",354,21,"asjdk","ksjaf"]
for(let i=0;i<arr.length;i++){
    if(typeof arr[i]=="string"){
        delete arr[i]
    }
}
console.log(arr);