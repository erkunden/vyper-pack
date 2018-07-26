var f = null
function echos(cl,fu) {
  cl.push({
    name: "echos",
    handler: hechos
  });
  f = fu
}

function hechos() {
  f("Hello from echos")
}
