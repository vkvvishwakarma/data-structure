function linearSearch(list, item){
    let index = -1;
    list.forEach((listItem,i)=>{
        if(listItem === item){
            index = i;
        }
    })
    return index;
}

console.log(linearSearch([3,48,49,23,45,40,98],45));
