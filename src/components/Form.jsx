const Form = () => {
  return (
    <form className="formulaire" id="form" action="">
      <h2>
        Créée ton compte <br />
        et rejoins la bataille !
      </h2>
      <input
        className="input-form"
        type="text"
        name="email"
        id="name"
        placeholder="E-mail"
      />
      <input
        className="input-form"
        type="text"
        name="username"
        id="email"
        placeholder="Username"
      />
      <input
        className="input-form"
        type="text"
        name="password"
        id="phone"
        placeholder="Password"
      />
      <button>S'inscrire</button>
    </form>
  );
};

export default Form;
