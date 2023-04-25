import { useState } from 'react';
import './styles.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setIsNight } from '../../store/reducers/input3';

function Exo3() {
/*   const [isNight, setIsNight] = useState(false); */
  const dispatch = useAppDispatch();
  const isNight = useAppSelector((state) => state.input3.isNight);
  console.log('isNight', isNight);

  return (
    <div className={isNight ? 'exercice nuit' : 'exercice'}>
      <h2>Exo3 : Lors du click sur le btn nuit, bg de l&apos;exo3 en black et text en white : </h2>
      {/*       <h2>Exo3 : Lors du click btn nuit, bg exo3 en black et text en white : </h2> */}
      <button type="button" className="btn" onClick={() => dispatch(setIsNight(false))}>Jour</button>
      <button type="button" className="btn" onClick={() => dispatch(setIsNight(true))}>Nuit</button>
    </div>
  );
}

export default Exo3;
