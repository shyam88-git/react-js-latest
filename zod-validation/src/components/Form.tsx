import { useForm } from "react-hook-form";
import { FormData, UserSchema } from "../zod/Types";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "./FormField";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        type="email"
        placeholder="Enter your email"
        name="email"
        register={register}
        error={errors?.email}
      />
      <FormField
        type="text"
        placeholder="Enter Github Url"
        name="githubUrl"
        register={register}
        error={errors?.githubUrl}
      />
      {/* <FormField
        type="number"
        placeholder="Enter years of experience"
        name="yearsOfExperience"
        register={register}
        error={errors?.yearsOfExperience}
      /> */}
      <FormField
        type="password"
        placeholder="Enter password"
        name="password"
        register={register}
        error={errors?.password}
      />
      <FormField
        type="password"
        placeholder="Enter conform password"
        name="confirmPassword"
        register={register}
        error={errors?.confirmPassword}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
