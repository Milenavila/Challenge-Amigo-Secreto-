//crear un array de amigos 

let amigos = [];
let nombre;

// Implementa una función para agregar amigos

function agregarAmigo(){
nombre = document.getElementById('amigo').value;

//crear alertas si el usuario no ha ingresado nombres o tiene nombres repetidos 

if (nombre === ""){
  alert("por favor ingresa un nombre")
  return
}
if (amigos.includes(nombre)){
  alert(`El nombre ${nombre}, está repetido, por favor ingresa un nuevo nombre`);
  document.getElementById('amigo').value = "";
  return
}

// añadirlo los nombres al array amigos 

amigos.push(nombre);
console.log(amigos)

document.getElementById('amigo').value = "";

actualizarListaAmigos();

}

// Implementa una función para actualizar la lista de amigos

function actualizarListaAmigos(){

  // Obtener el elemento de la lista: Utilizar document.getElementById()

  let listaAmigos = document.getElementById('listaAmigos');
  // Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
  listaAmigos.innerHTML = ""; 

  //se usa bucle for para iterar el array e ir incorporando los nombres a la lista de amigos
  //crear elementos de lista (<li>) para cada título.

  for (i = 0; i < amigos.length; i++){
    let li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }

}
// Implementa una función para sortear los amigos

function sortearAmigo(){

  //Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
if (amigos.length === 0){
  alert("La lista está vacio, inserta nuevos nombres");
  return
}
// Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
  indiceAleatorio = Math.floor(Math.random() * amigos.length);

  //Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
  let amigoElegido = amigos[indiceAleatorio];

  //Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = (`El amigo elegido es: ${amigoElegido} `);


}