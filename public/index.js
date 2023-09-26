const linkCarro = document.querySelector('.carro')
const Cambio = document.querySelector(".cambio")
const obtenerUserId = async()=>{
  try {
    const response = await fetch('/auth//buscarId');
    if (!response.ok) {
      throw new Error('Error al obtener el usuario');
    }
    const usuario = await response.json();
  
    return usuario;
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    return null;
  }
}
  const obtenerCarrito = async () =>{
  try {
    const response = await fetch('/api/carts');
    if (!response.ok) {
      throw new Error('Error al obtener el carrito');
    }

    const carrito = await response.json();
  
    return carrito;
  } catch (error) {
    console.error('Error al obtener el carrito:', error);
    return null;
  }
}

document.addEventListener('DOMContentLoaded', async() => {
  const userId = await obtenerUserId()
  const carro = await obtenerCarrito();
    linkCarro.href = `/api/carts/${carro}`
    Cambio.href = `/auth/premium/${userId}`
});