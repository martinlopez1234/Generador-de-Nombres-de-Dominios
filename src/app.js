var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var dominios = [".com", ".net", ".us", ".io"];

for(let p=0;p<pronoun.length;p++){
    for(let a = 0;a<adj.length;a++){
        for(let n = 0;n<noun.length;n++){
            for(let d=0;d<dominios.length;d++)
            console.log(pronoun[p]+adj[a]+noun[n] + dominios[d]);
        }
    }
}

