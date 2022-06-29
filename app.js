console.log("Hello World")

let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

for (let i=0; i<pronoun.length; i++){
    for(let j=0; j<adj.length; j++){
        for(let k=0; k<noun.length;k++){

            console.log(pronoun[i]+adj[j]+noun[k]+".com")
        }
    }
}


/* 
0 0 0 
0 0 1
0 1 0
0 1 1
1 0 0
1 0 1
1 1 0
1 1 1       
combinaciones:2 x2 x2
*/
