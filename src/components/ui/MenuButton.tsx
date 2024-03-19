import Link from "next/link";

export default function MenuButton(props: MenuButtonProps) {
  const pageTransition = () => {
    console.log("clicked");
  };

  return (
    <Link
      href={props.url}
      onClick={pageTransition}
      className={`scroll-smooth size-20 flex flex-col rounded-lg hover:bg-red-900 align-middle justify-center items-center transition-all my-3 md:mx-auto mx-3 ${
        props.isActive ? "bg-red-900" : "bg-slate-800"
      }`}
    >
      <div className='text-slate-300 text-2xl mb-1'>{props.icon}</div>
      <div className='text-slate-300'>{props.name}</div>
    </Link>
  );
}

interface MenuButtonProps {
  url: string;
  name: string;
  icon: React.ReactNode;
  isActive: boolean;
}
