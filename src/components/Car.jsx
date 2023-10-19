
import { IconTrashX } from "@tabler/icons-react";
import { IconUserEdit } from "@tabler/icons-react";

const Car = ({ carInfo, deleteUser, handleClickUpdate }) => {
  
  return (
    <article
      className="drop-shadow-2xl bg-gray-50/75 w-[300px] sm:w-[350px] p-4 
    rounded-lg grid gap-2 dark:bg-gray-600/75 duration-500 animate-fade-in"
    >
      <div>
        <img
          className={`absolute border-2 top-[-80px] right-[70px] dark:brightness-75 sm:right-[100px]  app w-[150px] h-[150px] rounded-full`}
          src="./users.png"
          alt=""
        />
      </div>
      <div className="pt-14 px-4 animate-fade-in1">
        <ul className="grid gap-3  text-gray-800 dark:text-gray-200">
          <li>
            <span className="font-semibold">First Name: </span>
            {carInfo.first_name}
          </li>
          <li>
            <span className="font-semibold">Last Name: </span>{" "}
            {carInfo.last_name}
          </li>
          <li>
            <span className="font-semibold">Email: </span> {carInfo.email}
          </li>
          <li>
            <span className="font-semibold">Birthday: </span> {carInfo.birthday}
          </li>
        </ul>
        <div className="flex pt-4 gap-2 justify-center">
          <button
            onClick={() => handleClickUpdate(carInfo)}
            className="bg-green-500 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800
            transition-colors text-gray-200 p-1 rounded-md"
          >
            <IconUserEdit />
          </button>
          <button
            onClick={() => deleteUser(carInfo.id)}
            className="bg-red-600 hover:bg-red-800 dark:bg-red-800 dark:hover:bg-red-900
            transition-colors text-gray-200 p-1 rounded-md"
          >
            <IconTrashX />
          </button>
        </div>
      </div>
    </article>
  );
};
export default Car;
