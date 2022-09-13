import React from 'react';
import yamaha from './yamaha.jpg';
import fenderstr from './fenderstr.jpg';
import fendertel from './fendertel.jpg';
import zombie from './zombie.jpg';



import Guitar from './Guitar.js';

function App() {

  const foto1 = yamaha;
  const name1 = 'YAMAHA PACIFICA 012 BL';
  const cena1 = '27000';

  const foto2 = fenderstr;
  const name2 = 'FENDER SQUIER STRATOCASTER';
  const cena2 = '32000';

  const foto3 = fendertel;
  const name3 = 'FENDER PLAYER TELECASTER';
  const cena3 = '98500';

  const foto4 = zombie;
  const name4 = 'Zombie EDG-46';
  const cena4 = '55000';

  return <div className='Guitar'>

    <Guitar foto={foto1} name={name1} cena={cena1} />
    <Guitar foto={foto2} name={name2} cena={cena2} />
    <Guitar foto={foto3} name={name3} cena={cena3} />
    <Guitar foto={foto4} name={name4} cena={cena4} />

  </div>;
}

export default App;