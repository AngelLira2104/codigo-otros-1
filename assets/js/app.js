const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name');//se ponen asteriscos por que son id
const $b = document.querySelector('#blog');//se ponen asteriscos por que son id
const $l = document.querySelector('#location');//se ponen asteriscos por que son id

function displayUser(username) {
  $n.textContent = 'cargando...';
  
  const response = await.fetch(`${usersEndpoint}/${username}`);//Falto poner un punto para localizar error de datos.
  if(!response.ok){
    throw new error (`Error: ${response.status} `)//arrojamos el error 
  }
  console.log(data);//imprimimos en la consola
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);