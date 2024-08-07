const nav = document.querySelector('#navmovilnav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

const datos = [
    {
     id: "1",
     name: "Juan Quiroga",
     puesto: "Gerente Ventas",
     desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, eos sapiente placeat libero autem quaerat hic eaque dignissimos id quidem obcaecati beatae ea distinctio molestiae reprehenderit error explicabo odio rerum.",
     telefono: "52+ 4774346565",
     email: "persona1@gmail.com",
     experiencia: "5 años"
    },
    {
        id: "2",
        name: "Victor Quiroga",
        puesto: "Ventas",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, eos sapiente placeat libero autem quaerat hic eaque dignissimos id quidem obcaecati beatae ea distinctio molestiae reprehenderit error explicabo odio rerum.",
        telefono: "52+ 4775556454",
        email: "persona2@gmail.com",
        experiencia: "10 años"
    },
    {
        id: "3",
        name: "Persona 3",
        puesto: "Puesto 1",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, eos sapiente placeat libero autem quaerat hic eaque dignissimos id quidem obcaecati beatae ea distinctio molestiae reprehenderit error explicabo odio rerum.",
        telefono: "52+ 4779873623",
        email: "persona3@gmail.com",
        experiencia: "11 años"
       },
       {
           id: "4",
           name: "Persona 4",
           puesto: "Puesto 2",
           desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, eos sapiente placeat libero autem quaerat hic eaque dignissimos id quidem obcaecati beatae ea distinctio molestiae reprehenderit error explicabo odio rerum.",
           telefono: "52+ 4779483727",
           email: "persona4@gmail.com",
           experiencia: "12 años"
       }
]

document.addEventListener("DOMContentLoaded",function(){
    const thumbnails = document.querySelectorAll(".thumbnail");
    const imagen = document.getElementById("largeImage");
    let datosDefault = getPersonal(2);
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click",function() {
                imagen.src = this.src;
                let datos = getPersonal(this.id);
               
        });
    });
});

abrir.addEventListener('click',() =>{
    nav.classList.add('visible');
})

cerrar.addEventListener('click',() => {
    nav.classList.remove('visible');
})

const getPersonal = (id) => {
    const equipoDatos = document.getElementById("equipoDatos");
    const personal = datos.find(item => item.id == id);
    equipoDatos.innerHTML = `<h2 class="subtitle bold">${personal.name}</h2>
    <p style="margin-top: 10px;">${personal.puesto}</p>
    <hr>
    <p class="fw-500 mt-3">${personal.desc}</p>
    <div class="datos-personal mt-3">
      <p class="bold">Telefono:</p>
      <p>${personal.telefono}</p>
    </div>
    <div class="datos-personal mt-1">
      <p class="bold">Email:</p>
      <p>${personal.email}</p>
    </div>
    <div class="datos-personal mt-1">
      <p class="bold">Experiencia:</p>
      <p>${personal.experiencia}</p>
    </div>`
    
}

