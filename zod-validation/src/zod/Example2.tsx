import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
};
const App = () => {
  const schema: ZodType<FormData> = z
    .object({
      firstName: z.string().min(2).max(30),
      lastName: z.string().min(2).max(30),
      email: z.string().email(),
      age: z.number().min(10),
      password: z.string().min(2).max(30),
      confirmPassword: z.string().min(2).max(30),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    console.log("data is ", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitData)} style={{ marginLeft: "200px" }}>
        <label style={{ display: "block", marginTop: "10px" }}>
          First Name:
        </label>
        <input
          type="text"
          {...register("firstName")}
          placeholder="first name"
        />
        {errors.firstName && (
          <span style={{ color: "red" }}>{errors.firstName.message}</span>
        )}
        <label style={{ display: "block", marginTop: "10px" }}>
          Last Name:
        </label>
        <input type="text" {...register("lastName")} placeholder="last name" />
        {errors.lastName && (
          <span style={{ color: "red" }}>{errors.lastName.message}</span>
        )}
        <label style={{ display: "block", marginTop: "10px" }}>Email:</label>
        <input type="text" {...register("email")} placeholder="Email" />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
        <label style={{ display: "block", marginTop: "10px" }}>Age:</label>
        <input
          type="number"
          placeholder="Age"
          {...register("age", { valueAsNumber: true })}
        />
        {errors.age && (
          <span style={{ color: "red" }}>{errors.age.message}</span>
        )}
        <label style={{ display: "block", marginTop: "10px" }}>Password:</label>
        <input type="password" {...register("password")} />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password.message}</span>
        )}
        <label style={{ display: "block", marginTop: "10px" }}>
          Confirm Password
        </label>
        <input type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <span style={{ color: "red" }}>{errors.confirmPassword.message}</span>
        )}
        <button style={{ display: "block", marginTop: "10px" }}>Submit</button>
      </form>
    </>
  );
};

export default App;
