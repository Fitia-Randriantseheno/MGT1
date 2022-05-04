//** tri par séléction */
function triage(tab){
    let p;
    for(let i=0; i<tab.length-1; i++)
        for(let j=i+1; j<tab.length; j++){
            if(tab[i]>tab[j]){
                p = tab[j];
                tab[j] = tab[i];
                tab[i] = p;
            }
        }
        return tab;
    }
    console.log(triage([1,6,3,5,4,2]));
//** triambule function triage(tab){
    for(let i=0; i<=tab.length; i++)
    for(let j=i; j<=tab.length; i++){
        if(tab[i]>tab[j]){
            p = tab[j];
            tab[j] = tab[i];
            tab[i] = p;
    return tab;
console.log(triage([1,6,3,5,4,2])) */


//**return talbeau trier dans l'ordre croissant */
    //** p = variable dans le tableau[3] */

//**return talbeau trier dans l'ordre croissant */