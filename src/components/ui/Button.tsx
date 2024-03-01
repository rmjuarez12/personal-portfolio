export default function Button(props: ButtonProps) {
  return (
    <a
      className='px-5 py-2 bg-red-900 hover:bg-slate-800 w-3/4 mx-auto text-center rounded transition-all flex flex-row items-center'
      href='https://google.com'
      target={props.newTab ? "_blank" : "_self"}
    >
      {props.icon != null && <span className='mr-2'>{props.icon}</span>}{" "}
      {props.btnTxt}
    </a>
  );
}

interface ButtonProps {
  btnTxt: string;
  newTab: boolean;
  icon?: React.ReactNode;
}
