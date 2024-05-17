import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    email: yup.string().required("Whoops, make sure it's an email"),
  })
  .required();

export default function Blue() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <main className="max-w-[1440px] bg-blue-700 flex flex-col justify-center items-center text-white py-10 ">
      <h4 className="text-2xl pt-10 ">35,000+ already joined</h4>
      <p className="text-5xl pt-10 text-center font-bold">
        Stay up-to-date with what we’re doing
      </p>

      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex gap-3 mt-3 "
      >
        <div className="flex flex-col">
          <input
            {...register("email")}
            className="max-sm:w-[200px] lg:w-[300px] h-[50px] outline-0 grey px-3"
            placeholder="Enter email"
          />
          {errors.email && (
            <div className="w-full bg-orange-900 py-2 text-white">
            {errors.email.message}  
            </div>
          )}
        </div>
        <button type="submit" className="w-[130px] h-[50px] rounded-sm">
          Contact
        </button>
      </form>
    </main>
  ); 
}
