import FormInput from "./FormInput";



const signInForm = () => {

    return (
      <div className="flex flex-col justify-center ">
        <div className="flex justify-center text-4xl ">
          <h1>Sign In</h1>
        </div>

        <div className="flex justify-center p-10" >
          <form
          // onSubmit={handleSubmit}
          className="flex flex-col justify-center">
            <FormInput
              label="Email"
              type="email"
              required
              // onChange={handleChange}
              name="email"
              // value={email}
              placeholder="Email"
              className="input input-bordered mb-5"
            />
            <FormInput
              label="Password"
              type="password"
              required
              // onChange={handleChange}
              name="password"
              // value={password}
              placeholder="Password"
              className="input input-bordered mb-5"
            />




            <div className="flex gap-4">
              <button type="submit" className="btn btn-primary w-full  text-white">
                Sign In
              </button>

            </div>
          </form>
        </div>
      </div>
    );
  };

export default signInForm
