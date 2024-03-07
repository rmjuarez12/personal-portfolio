export default function IconBox(props: IconBoxProps) {
  return props.url != null ? (
    <a
      href={props.url}
      className={`${
        props.className != null ? props.className : "size-10"
      } size-10 bg-slate-800 mx-2 flex justify-center items-center rounded hover:bg-red-900 transition-all text-lg`}
      target='_blank'
      title={props.title}
    >
      {props.icon}
    </a>
  ) : (
    <div
      className={`${
        props.className != null ? props.className : "size-10"
      }  bg-slate-800 mx-2 flex justify-center items-center rounded hover:bg-red-900 transition-all text-lg`}
    >
      {props.label != null ? (
        <div className='flex flex-col justify-center items-center'>
          <div className={`${props.iconClassName}`}>{props.icon}</div>
          <div className={`${props.labelClassName} font-semibold`}>
            {props.label}
          </div>
        </div>
      ) : (
        props.icon
      )}
    </div>
  );
}

interface IconBoxProps {
  icon: React.ReactNode;
  title: string;
  label?: string;
  url?: string;
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
}
