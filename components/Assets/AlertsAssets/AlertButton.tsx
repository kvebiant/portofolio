import { GiCrossedAxes } from "react-icons/gi";

const AlertButton = (props: any) => {
  return (
    <div className="fixed top-24 ease-in duration-300 ">
      <div className="flex items-center bg-gray-50 p-4 w-full max-w-xs text-gray-500 rounded-lg shadow cursor-pointer">
        <div
          className={
            "inline-flex rounded-lg flex-shrink-0 justify-center items-center w-8 h-8 " +
            props.bgcolor + props.textcolor
          }
        >
          {props.icon}
        </div>
        <div className="ml-3 text-sm font-normal pr-4">{props.message}</div>
        <button
          onClick={props.onClick}
          className="ml-auto text-lg items-center justify-center shadow-gray-300 -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <GiCrossedAxes />
        </button>
      </div>
    </div>
  );
};

export default AlertButton;
