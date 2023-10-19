import { IconSquareRoundedXFilled } from "@tabler/icons-react";
import { BIRTHDAY_VALIDATION, EMAIL_VALIDATION, FIRST_NAME_VALIDATION, IMG_VALIDATION, LAST_NAME_VALIDATION, PASSWORD_VALIDATION } from "../utils/formValidations";



const Modal = ({
  isShowUser,
  handleClosedModal,
  handleSubmit,
  register,
  submit,
  idUserToEdit,
  errors
}) => {

  return (
    <section
      className={`fixed z-10 top-0 bottom-0 left-0 right-0 bg-black/70 dark:bg-black/80
      flex justify-center items-center px-3 transition-all
      duration-200 ${
      isShowUser ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="drop-shadow-2xl dark:text-gray-200 bg-gray-50/80 dark:bg-gray-600/80 p-4 rounded-md grid gap-3 
        w-[300px] sm:w-[350px]
        relative"
      >
        <h2 className="text-center text-lg font-semibold">
          {idUserToEdit ? "Modify User" : "Create User"}
        </h2>

        <button
          onClick={handleClosedModal}
          type="button"
          className="text-red-500 hover:text-red-700 dark:text-red-600 dark:hover:text-red-800 transition-colors 
        absolute top-2 right-2"
        >
          <IconSquareRoundedXFilled />
        </button>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="email">
            Email
          </label>
          <input
            className="outline-none dark:bg-gray-900 dark:border-none border px-2 py-1 rounded-md"
            id="email"
            type="email"
            autoComplete="off"
            {...register("email", EMAIL_VALIDATION)}
          />
          {
            errors.email && (<span className="text-xs text-red-500"> {errors.email.message } </span>)
          }
        </div>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="password">
            Password
          </label>
          <input
            className="outline-none dark:bg-gray-900 dark:border-none border px-2 py-1 rounded-md"
            id="password"
            type="password"
            autoComplete="off"
            {...register("password", PASSWORD_VALIDATION)}
          />
          {
            errors.password && (<span className="text-xs text-red-500"> {errors.password.message } </span>)
          }
        </div>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="first_name">
            First Name
          </label>
          <input
            className="outline-none dark:bg-gray-900 dark:border-none border px-2 py-1 rounded-md"
            id="first_name"
            type="text"
            autoComplete="off"
            {...register("first_name", FIRST_NAME_VALIDATION)}
          />
          {
            errors.first_name && (<span className="text-xs text-red-500"> {errors.first_name.message } </span>)
          }
        </div>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="last_name">
            Last Name
          </label>
          <input
            className="outline-none dark:bg-gray-900 dark:border-none border px-2 py-1 rounded-md"
            id="last_name"
            type="text"
            autoComplete="off"
            {...register("last_name", LAST_NAME_VALIDATION)}
          />
          {
            errors.last_name && (<span className="text-xs text-red-500"> {errors.last_name.message } </span>)
          }
        </div>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="birthday">
            Birthday
          </label>
          <input
            className="outline-none dark:bg-gray-900 dark:border-none border px-2 py-1 rounded-md"
            id="birthday"
            type="date"
            {...register("birthday", BIRTHDAY_VALIDATION)}
          />
          {
            errors.birthday && (<span className="text-xs text-red-500"> {errors.birthday.message } </span>)
          }
        </div>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="image_url">
            Image
          </label>
          <input
            className="outline-none dark:bg-gray-900 dark:border-none border px-2 py-1 rounded-md"
            id="image_url"
            type="text"
            {...register("image_url", IMG_VALIDATION)}
            
          />
          {
            errors.image_url && (<span className="text-xs text-red-500"> {errors.image_url.message } </span>)
          }
        </div>
        <div className="p-2 pt-4 flex justify-center items-center">
          <button
            className="w-[150px] transition-colors hover:bg-blue-600 bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 text-white p-2 px-4 uppercase font-semibold
            rounded-md"
            type="submit"
          >
            {idUserToEdit ? "Save Changes" : "Create"}
          </button>

        </div>
      </form>
    </section>
  );
};
export default Modal;
