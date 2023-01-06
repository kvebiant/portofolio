const CardSkill = (props: any) => {
  return (
    <div className=" p-6 shadow-xl rounded-xl hover:scale-105 md:hover:scale-110 ease-in duration-300 bg-white text-black/80">
      <div className=" grid grid-cols-2 md:grid-cols-1 gap-4 justify-center items-center">
        <div className="m-auto">
          <props.icon className={"text-3xl " + props.iconColor}  />
        </div>
        <div className=" flex flex-col items-center justify-center">
          <h3>{props.text}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardSkill;
