import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [valid, setValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    setValid(false);
    if (name && surname && email && password === repeatPassword) {
      setValid(true);
      console.log("account created");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="w-2/6  rounded-xl p-4 shadow-lg">
        <h2 className="text-3xl font-bold mb-3">Welcome to Crypto App</h2>
        <p className="">Create a free account by filling data below.</p>
        <form onSubmit={submitHandler}>
          <div>
            <div className="mt-3">
              <label className="block" htmlFor="name">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                type="text"
                className="block w-full p-2 border rounded-lg"
              />
            </div>
            <div className="mt-3">
              <label className="block" htmlFor="surname">
                Surname
              </label>
              <input
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                id="surname"
                type="text"
                className="block w-full p-2 border rounded-lg"
              />
            </div>
            <div className="mt-3">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                className="block w-full p-2 border rounded-lg"
              />
            </div>
            <div className="mt-3">
              <label className="block" htmlFor="password">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="text"
                className="block w-full p-2 border rounded-lg"
              />
            </div>
            <div className="mt-3">
              <label className="block" htmlFor="repeatpassword">
                Repeat Password
              </label>
              <input
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                id="repeatpassword"
                type="text"
                className="block w-full p-2 border rounded-lg"
              />
            </div>

            <button
              className={`${
                !valid ? "border-red-600 border bg-red-600" : " bg-primary"
              }  font-medium w-full p-2 mb-3 mt-10 rounded-lg text-center  cursor-pointer text-white`}
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
