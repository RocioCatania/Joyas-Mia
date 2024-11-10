const productos = [
    {
        id:'A01',
        name: 'Amelie',
        tipo: 'Aros',
        descripcion: 'Plata 925 colgante',
        stock: 15,
        precio: 25000,
        img: "https://i.pinimg.com/564x/68/01/de/6801de9c19055474c3f6d5c45dbc44fc.jpg"
    },
    {
        id:'A02',
        name: 'Isabella',
        tipo: 'Aros',

        descripcion: 'Plata 925 colgante triple',
        stock: 21,
        precio: 29000,
        img: "https://i.pinimg.com/564x/c8/58/d5/c858d54eed16370fe8fc5974edb45b9f.jpg"
    },
    {
        id:'A03',
        name: 'Alma',
        tipo: 'Aros',

        descripcion: 'Plata 925 colgante cubano',
        stock: 35,
        precio: 45000,
        img: "https://i.pinimg.com/564x/e5/41/cb/e541cbb81fa5e8272c95c412fdd3be23.jpg"
    },
    {
        id:'A04',
        name: 'Mia',
        tipo: 'Aros',
        descripcion: 'Plata 925 colgante con stras cubic',
        stock: 10,
        precio: 27000,
        img:"https://i.pinimg.com/564x/76/2b/ea/762bead329ec30bae53fb8289bd5273e.jpg"
    },
    {
        id:'A05',
        name: 'Abril',
        tipo: 'Aros',
        descripcion: 'Plata 925 colgante con stras cubic en Mariposa',
        stock: 19,
        precio: 35000,
        img: "https://i.pinimg.com/564x/c8/90/c9/c890c9909053f0f216bbbbe85393e9cf.jpg"
    },
    {
        id:'C01',
        name: 'Diamante',
        tipo: 'Collares',
        descripcion: 'Plata 925 Diamante',
        stock: 10,
        precio: 225000,
        img: "https://i.pinimg.com/564x/d6/93/34/d693344bcefff3ed3702dcc98fd7b14a.jpg",
    },
    {
        id:'C02',
        name: 'Perla',
        tipo: 'Collares',
        descripcion: 'Perlas Importadas',
        stock: 9,
        precio: 329000,
        img: "https://i.pinimg.com/564x/6f/30/82/6f3082fefffa61d632a8cc9791263e4a.jpg"
    },
    {
        id:'C03',
        name: 'Corazon',
        tipo: 'Collares',
        descripcion: 'Plata 925 colganntes Corazon doble',
        stock: 8,
        precio: 145000,
        img: "https://i.pinimg.com/564x/72/3e/2b/723e2b2f1d8705a816d701ba0fec477c.jpg"
    },
    {
        id:'C04',
        name: 'Rombo',
        tipo: 'Collares',
        descripcion: 'Plata 925 colgante con stras cubic gota doble',
        stock: 12,
        precio: 227000,
        img:"https://i.pinimg.com/564x/7f/f8/6f/7ff86f04782f1e774fbff08be5b74330.jpg"
    },
    {
        id:'C05',
        name: 'Destello',
        tipo: 'Collares',
        descripcion: 'Plata 925 colgante con piedra cubic rojo',
        stock: 25,
        precio: 235000,
        img: "https://i.pinimg.com/236x/e1/20/44/e12044f4239d2314679594077b2e8f5e.jpg"
    },
    {
        id:'AN01',
        name: 'Mar',
        tipo: 'Anillos',
        descripcion: 'Plata 925 Diamante',
        stock: 25,
        precio: 150000,
        img: "https://i.pinimg.com/564x/40/fd/4b/40fd4bb0181d5eb8d389b4f3da701c1c.jpg",
    },
    {
        id:'AN02',
        name: 'Oceano',
        tipo: 'Anillos',
        descripcion: 'Perlas Importadas',
        stock: 26,
        precio: 190000,
        img: "https://i.pinimg.com/564x/23/51/73/235173c347ac488b26225e4963f3650a.jpg"
    },
    {
        id:'AN03',
        name: 'Rio',
        tipo: 'Anillos',
        descripcion: 'Plata 925 colganntes Corazon doble',
        stock: 28,
        precio: 145000,
        img: "https://i.pinimg.com/564x/a9/c1/54/a9c15449ceb44fc359046ffefc1a6f07.jpg"
    },
    {
        id:'AN04',
        name: 'Cascada',
        tipo: 'Anillos',
        descripcion: 'Plata 925 colgante con stras cubic rombo doble',
        stock: 14,
        precio: 170000,
        img:"https://i.pinimg.com/564x/a9/55/da/a955daca99f42c3b216f6d2a82c702da.jpg"
    },
    {
        id:'AN05',
        name: 'Olas',
        tipo: 'Anillos',
        descripcion: 'Plata 925 colgante con piedra cubic',
        stock: 31,
        precio: 125000,
        img: "https://i.pinimg.com/564x/ac/ee/25/acee259a00bb001480d124d3593602f6.jpg"
    },
];

export const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(productos);
    }, 3000);
});

const detalle=[
    {
        id:'A01',
        name: 'Amelie',
        tipo: 'aros',
        descripcion: 'Plata 925 colgante',
        stock: 15,
        precio: 25000,
        img: "https://i.pinimg.com/564x/68/01/de/6801de9c19055474c3f6d5c45dbc44fc.jpg"
    }
];

export const promesaDetalle = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(detalle);
    }, 2000);
})



export const getProduct = (id) => {
    return productos.find((prod) => prod.id == id);
};
