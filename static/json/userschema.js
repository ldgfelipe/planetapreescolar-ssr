const userschema={
    apellido:"",
    codigocorreo:0,
    correo:"",
    descargas: {
        dia: {
            disponibles: 1,
            fecha: "",
            usadas: []
          },
        mes: {
            active: false,
            disponibles:0,
            registro: [],
            tipo: "",
          },
        fechaini:"",
        fechapromofin:""
        },
    estadoMembresia:false,
    foldercode:0,
    grupo:{
        materias: []
    },
    id:"",
    idCliente:"",
    idSuscripcion:null,
    lvluser:0,
    medioRegistro:false,
    tipo:null,
    nombre:"",
    pass:"",
    pruebagratuita:0,
    uid:"",
    urlImagen:"",
    userlogin:false,
    vercorreo: false
}


export {
  userschema
}