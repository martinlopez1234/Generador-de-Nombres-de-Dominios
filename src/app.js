var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var dominios = [".com", "net", ".us", ".io"];
for (let i = 0; i <= 8; i++) {
  console.log(
    pronoun[Math.floor(Math.random() * pronoun.length)] +
      adj[Math.floor(Math.random() * adj.length)] +
      noun[Math.floor(Math.random() * noun.length)] +
      dominios[Math.floor(Math.random() * dominios.length)]
  );
}
