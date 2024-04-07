import { useForm } from "react-hook-form";

type FormInputs = {
  FirstName: string;
  LastName: string;
  Email: string;
  Mobile: string;
  Title: string;
  Developer: string;
};
const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text "
        placeholder="First Name"
        {...register("FirstName", { required: true, maxLength: 20 })}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Last Name"
        {...register("LastName", { required: true, maxLength: 30 })}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <br />
      <br />
      <input
        type="tel"
        placeholder="mobile number"
        {...register("Mobile", {
          required: true,
          maxLength: 12,
          minLength: 10,
        })}
      />
      <br />
      <br />
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">DR</option>
      </select>
      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
