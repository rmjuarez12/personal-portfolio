import Link from "next/link";

export default function MenuButton(props: MenuButtonProps) {
  return (
    <Link
      href={props.url}
      className={`size-20 flex flex-col rounded-lg hover:bg-red-900 align-middle justify-center items-center transition-all my-3 mx-auto ${
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
