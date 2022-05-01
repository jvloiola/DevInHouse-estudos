const cidades = [
    { nome: 'Patos de Minas', populacao: 153585 },
    { nome: 'Lages', populacao: 157349 },
    { nome: 'Ibiúna', populacao: 79479 },
    { nome: 'Maringá', populacao: 403063 },
    { nome: 'Curitiba', populacao: 1963726 },
    { nome: 'Florianópolis', populacao: 508826 },
    { nome: 'Pato Branco', populacao: 84779 },
  ];

cidades.forEach((Florianópolis,index)=>{
    (cidades[index].nome === 'Florianópolis')?console.log(true):false
});

/* REFAZER COM O UPPERCASE.

const array = ['Ssaaa', 'bbb'];

const maior = array.find((str) => {
  return str.toUpperCase() === 'SSAAA';
});

console.log(maior); */