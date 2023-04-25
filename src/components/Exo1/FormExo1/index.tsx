import './styles.scss';
import { setInputExo1 } from '../../../store/reducers/input1';
import { useAppDispatch } from '../../../hooks/redux';

interface FormExo1Props {
  inputExo1: string
}

function FormExo1({ inputExo1 }:FormExo1Props) {
  const dispatch = useAppDispatch();
  // Si je n'avais pas fait d'interface + passer la valeur dans index à Form:
  // possible de répéter la ligne ci-dessous pour utiliser le state
  // utilisation du store de redux
  /*   const inputExo1 = useAppSelector((state) => state.input1.inputExo1); */

  const handleChangeinput1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    /*     console.log('coucou'); */
    const newValue1 = e.target.value;
    console.log('newValue1', newValue1);

    dispatch(setInputExo1(newValue1));
  };
  return (
    <form className="form">
      <label htmlFor="input-promo">
        <input
          type="text"
          name="input-promo"
          id="input-promo"
          placeholder="Saississez votre message..."
          // input controlé en réaffectant le state
          value={inputExo1}
          onChange={handleChangeinput1}
          // event implicite mais attention pas toujours le cas: si problème boucle
          // pour vérifier boucle  consolel log sur 1ere ligne fonction
          // utiliser version ci-dessous
          // OU
          /* onChange={(e) => handleChangeinput1(e)} */
          // dessous possible mais MAJ directement l'input
          // faire une fonction permet de faire des verifications
/*           onChange={(e) => setInputExo1(e.target.value)} */
        />
      </label>
    </form>

  );
}

export default FormExo1;
