import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setInputExo2, setSubmit2 } from '../../store/reducers/input2';
import './styles.scss';

function Form2() {
  const dispatch = useAppDispatch();
  const inputExo2 = useAppSelector((state) => state.input2.inputExo2);
  const submitInput2 = useAppSelector((state) => state.input2.inputExo2);

  const handleChangeinput2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue2 = e.target.value;
    console.log('newValue2', newValue2);
    dispatch(setInputExo2(newValue2));
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSubmit2(inputExo2));
  };

  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <label htmlFor="input-promo2">
        <input
          type="text"
          name="input-promo2"
          id="input-promo2"
          placeholder="Saississez votre message..."
          value={inputExo2}
          onChange={(e) => handleChangeinput2(e)}
        />
        <button className="button" type="submit">Envoyer</button>
      </label>
    </form>

  );
}

export default Form2;
