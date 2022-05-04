function triambule(tab){
    for(let i=0; i<tab.length; i++)
    for(let j=0; j<tab.length-1; j++){
        if(tab[j] > tab[j+1]){
            let x = tab[j]
            tab[j] = tab[j+1]
            tab[j+1] = x 
        }
    }
    return tab;
}
console.log(triambule([3,8,5,1,0,12,4,56,7,89,54,31]));