 // IMPRIMIENDO VEHICULOS DE FORMA DINAMICA
 const getVehiculos = async () => {
    const response = await fetch('/',{
      headers:{
        // Authorization: localStorage.getItem('jwt')
      }
    })
    const vehiculos = await response.json()
    const template = vehiculo => `
      <li>
        ${vehiculo.name} ${viculo.km.type} <button data-id="${vehiculo._id}">Eliminar</button>
      </li>
      <li>
          <div class="featured-car-card">

            <figure class="card-banner">
              <img src="VEHICULOS.IMAGEN" alt="BYD TANG 2022" loading="lazy" width="440" height="300"
                class="w-100">
            </figure>

            <div class="card-content">

              <div class="card-title-wrapper">
                <h3 class="h3 card-title">
                  <a href="#">VEHICULOS.NOMBRE</a>
                </h3>

                <data class="year" value="2022">VEHICULOS.YEAR</data>
              </div>

              <ul class="card-list">

                <li class="card-list-item">
                  <ion-icon name="people-outline"></ion-icon>

                  <span class="card-item-text">VEHICULOS.PASAJEROS pasajeros</span>
                </li>

                <li class="card-list-item">
                  <ion-icon name="flash-outline"></ion-icon>

                  <span class="card-item-text">VEHICULOS.TIPO</span>
                </li>

                <li class="card-list-item">
                  <ion-icon name="speedometer-outline"></ion-icon>

                  <span class="card-item-text">VEHICULOS.KM km / carga completa</span>
                </li>

                <li class="card-list-item">
                  <ion-icon name="hardware-chip-outline"></ion-icon>

                  <span class="card-item-text">VEHICULOS.COMBUSTIBLE</span>
                </li>

              </ul>

              <div class="card-price-wrapper">

                <p class="card-price">
                  <strong>VHICULOS.PRECIO</strong> / mes
                </p>

                <button class="btn fav-btn" aria-label="Add to favourite list">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="btn">Rentar</button>

              </div>

            </div>

          </div>
       </li>
    `
    

    const vehiculoList = document.getElementById('listVehivulos')
    vehiculoList.innerHTML = vehiculos.map(vehiculo => template(vehiculo)).join('')
    vehiculos.forEach(vehiculo => {
      vehiculoNode = document.querySelector(`[data-id="${vehiculo._id}"]`)
      vehiculoNode.onclick = async e => {
        await fetch(`/${vehiculo._id}`, {
          method: 'DELETE',
          header:{
            // Authorization: localStorage.getItem('jwt')
          }
        })
        vehiculoNode.parentNode.remove()
        alert('Eliminado con éxito')
      }
    })
  }

  // window.onload = () => {
  //   alert('prueba')
  //   getVehiculos()
  // }
