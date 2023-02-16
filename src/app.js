const ul = document.querySelector('#lista');

const gyumolcsok = [
 'szilva',
 'alma',
 'korte',
 'barack',
 'eper',
 'banán'
];
gyumolcsok.forEach( (gyumolcs) => {
    var li = document.createElement('li');
    li.textContent = gyumolcs;
    ul. append(li);
});
