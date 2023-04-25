import './styles.scss';
import FormExo1 from './FormExo1';
import { useAppSelector } from '../../hooks/redux';

function Exo1() {
  const inputExo1 = useAppSelector((state) => state.input1.inputExo1);

  return (
    <div className="exercice">
      <h2 className={inputExo1.length > 6 ? 'red' : ''}>
        Exo1 : ton message apparait ici au onChange
        (si + de 6 caractères titre en rouge) :
        {inputExo1}
      </h2>
      <FormExo1 />

    </div>
  );
}

export default Exo1;
