import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import Field from "../common/Field";
import defaultProfileImage from "../../assets/images/avatars/avatar_1.png";
const RegistrationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (FormData) => {
    try {
      const dataWithDefaults = {
        ...FormData,
        profileImage: FormData.profileImage || defaultProfileImage,
      };
      let response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        dataWithDefaults
      );
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      setError("root.random", {
        type: "random",
        message: `Some went rang @{}`,
      });
    }
  };
  return (
    <>
      <form
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]"
        onSubmit={handleSubmit(submitForm)}
      >
        <Field label="First Name" error={errors.firstName}>
          <input
            {...register("firstName", {
              required: "First Name is Required",
            })}
            className={`auth-input ${
              !!errors.firstName ? "border-red-500" : "border-gray-200"
            }`}
            type="firstName"
            name="firstName"
            id="firstName"
          />
        </Field>
        <Field label="Last Name" error={errors.lastName}>
          <input
            {...register("lastName")}
            className={`auth-input ${
              !!errors.lastName ? "border-red-500" : "border-gray-200"
            }`}
            type="lastName"
            name="lastName"
            id="lastName"
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            {...register("email", { required: "Email ID is Required" })}
            className={`auth-input ${
              !!errors.email ? "border-red-500" : "border-gray-200"
            }`}
            type="email"
            name="email"
            id="email"
          />
        </Field>

        <Field label="Password" error={errors.password}>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Your password must be at least 8 characters",
              },
            })}
            className={`auth-input ${
              !!errors.password ? "border-red-500" : "border-gray-200"
            }`}
            type="password"
            name="password"
            id="password"
          />
        </Field>
        <p>{errors?.root?.random?.message}</p>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;
