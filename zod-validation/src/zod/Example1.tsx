import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
type formData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
};
const Example1 = () => {
  const schema: ZodType<formData> = z
    .object({
      firstName: z.string().min(2),
      lastName: z.string().min(2),
      email: z.string().email(),
      age: z.number().min(9),
      password: z.string().min(2).max(8),
      confirmPassword: z.string().min(2).max(8),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "password donot match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: formData) => {
    console.log("data", data);
  };

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <input
        type="text"
        placeholder="Enter first Name"
        {...register("firstName")}
        style={{ display: "block", marginTop: "10px" }}
      />
      {errors.firstName && (
        <span style={{ color: "red" }}>{errors.firstName.message}</span>
      )}
      <input
        type="text"
        placeholder="Enter Last Name"
        style={{ display: "block", marginTop: "10px" }}
        {...register("lastName")}
      />
      {errors.lastName && (
        <span style={{ color: "red" }}>{errors.lastName.message}</span>
      )}
      <input
        type="text"
        placeholder="Enter Email "
        style={{ display: "block", marginTop: "10px" }}
        {...register("email")}
      />
      {errors.email && (
        <span style={{ color: "red" }}>{errors.email.message}</span>
      )}

      <input
        type="number"
        placeholder="Enter Age "
        style={{ display: "block", marginTop: "10px" }}
        {...register("age", { valueAsNumber: true })}
      />
      {errors.age && <span style={{ color: "red" }}>{errors.age.message}</span>}

      <input
        type="text"
        placeholder="Enter Password "
        style={{ display: "block", marginTop: "10px" }}
        {...register("password")}
      />
      {errors.password && (
        <span style={{ color: "red", marginTop: "10px" }}>
          {errors.password.message}
        </span>
      )}
      <input
        type="text"
        placeholder="Enter Confirm Password"
        style={{ display: "block", marginTop: "10px" }}
        {...register("confirmPassword")}
      />
      {errors.confirmPassword && (
        <span style={{ color: "red", marginTop: "10px" }}>
          {errors.confirmPassword.message}
        </span>
      )}
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Example1;
