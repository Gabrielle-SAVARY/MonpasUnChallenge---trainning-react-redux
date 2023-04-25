import './styles.scss';
import { useState } from 'react';
import Form2 from './Form2';
import { useAppSelector } from '../../hooks/redux';

function Exo2() {
  const submit2 = useAppSelector((state) => state.input2.submit2);

  return (
    <div className="exercice">
      <h2>
        Exo2 : ton message apparait ici au onSubmit :
        {' '}
        {submit2}
        {' '}
      </h2>
      <Form2 /* setSubmit={setSubmit} */ />
    </div>
  );
}

export default Exo2;
