import Car from "./Car";

const CarList = ({ cars, deleteUser, handleClickUpdate, profile }) => {
  return (
    <section
      className="pt-[6rem] grid gap-y-[7rem] grid-cols-[repeat(auto-fit,_350px)] place-items-center justify-center
    max-w-[1024px] mx-auto gap-5 py-10"
    >
      
      {cars.map((car) => (
        <Car
          key={car.id}
          carInfo={car}
          deleteUser={deleteUser}
          handleClickUpdate={handleClickUpdate}
          profile={profile}
        />
      ))}
    </section>
  );
};
export default CarList;
