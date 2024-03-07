export default function Button(props: ButtonProps) {
  return (
    <a
      className={`${props.className} px-5 py-2 bg-red-900 hover:bg-slate-800 rounded transition-all flex flex-row items-center justify-center`}
      href={props.url}
      target={props.newTab ? "_blank" : "_self"}
      title={props.title != null ? props.title : ""}
    >
      {props.icon != null && <span className='mr-2'>{props.icon}</span>}{" "}
      {props.btnTxt != null && props.btnTxt}
    </a>
  );
}

interface ButtonProps {
  btnTxt?: string;
  newTab: boolean;
  icon?: React.ReactNode;
  url: string;
  className?: string;
  title?: string;
}
