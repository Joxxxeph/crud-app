import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, EMPTY_FORM_VALUES } from "./constants/users";
import Modal from "./components/Modal";
import Header from "./components/Header";
import { useForm } from "react-hook-form";
import CarList from "./components/CarList";
import Swal from "sweetalert2";


function App() {
  const [isShowUser, setIsShowUser] = useState(false);  
  const [cars, setCars] = useState([]);
  const [idUserToEdit, setidUserToEdit] = useState(null);
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }
    return "light"
  })

  const { handleSubmit, register, reset, formState : {errors} } = useForm();


  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark")
    } else {
      document.querySelector("html").classList.remove("dark")
    }
  }, [theme])
  

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }

  const handleAlert = () => {
    Swal.fire ({
      icon: 'success',
      title: 'Good Job!',
      timer: 1300,
    })   
  }

  const handleUpdateAlert = () => {
    Swal.fire ({
      icon: 'success',
      title: 'Update Success!',
      timer: 1300,
    })
  }

  const handleDeleteAlert = () => {
    Swal.fire ({
      icon: 'success',
      title: 'Delete Success!',
      timer: 1300,
    })
  }

  const submit = (data) => {
    if (idUserToEdit) {
      updateUser(data);
    } else {
      createUser(data);
    }
  };

  const handleOpenModal = () => {
    setIsShowUser(true);
  };

  const handleClosedModal = () => {
    setidUserToEdit(null);
    reset(EMPTY_FORM_VALUES);
    setIsShowUser(false);
  };

  const createUser = (data) => {
    axios
      .post(BASE_URL + "/users/", data)
      .then(() => {
        handleClosedModal();
        handleAlert();
        getAllCars();
      })
      .catch(({ error }) => console.log(error));
  };

  const deleteUser = (id) => {
    axios
      .delete(BASE_URL + `/users/${id}/`)
      .then(() => {
        getAllCars()
        handleDeleteAlert()
      })
      .catch((err) => console.log(err));
  };

  const updateUser = (data) => {
    axios
      .put(BASE_URL + `/users/${idUserToEdit}/`, data)
      .then(() => {
        handleClosedModal();
        handleUpdateAlert()
        getAllCars();
      })
      .catch((err) => console.log(err));
  };

  const getAllCars = () => {
    axios
      .get(BASE_URL + "/users/")
      .then(({ data }) => {
        setCars(data)
        
      })
      .catch((error) => console.log(error));
  };

  const handleClickUpdate = (userToUpdate) => {
    handleOpenModal();
    reset(userToUpdate);
    setidUserToEdit(userToUpdate.id);
  };

  useEffect(() => {
    getAllCars();
   
  }, []);

  return (
    <main className=" min-h-screen font-['Lato']">
      <div className="min-h-screen fontt px-2 fixed min-w-full duration-500 dark:brightness-[.60]"></div>
      <Header
        handleOpenModal={handleOpenModal}
        handleChangeTheme={handleChangeTheme}
        theme={theme}
      />
      <h1 className="flex justify-center text-white text-3xl py-4 font-bold">
        User List
      </h1>
      <Modal
        isShowUser={isShowUser}
        handleClosedModal={handleClosedModal}
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        idUserToEdit={idUserToEdit}
        errors={errors}
      />
      <CarList
        cars={cars}
        deleteUser={deleteUser}
        handleClickUpdate={handleClickUpdate}
      />
    </main>
  );
}

export default App;
