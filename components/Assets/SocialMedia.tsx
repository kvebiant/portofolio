import Link from "next/link";

const SocialMedia = (props: any) => {
  return (
    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
      <Link href={props.url}>
        <props.icon className={" text-teal-500 " + props.size} />
      </Link>
    </div>
  );
};

export default SocialMedia;
