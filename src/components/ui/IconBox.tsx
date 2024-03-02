export default function IconBox(props: IconBoxProps) {
  return (
    <a
      href={props.url}
      className={`${props.className} size-10 bg-slate-800 mx-2 flex justify-center items-center rounded hover:bg-red-900 transition-all text-lg`}
      target='_blank'
      title={props.title}
    >
      {props.icon}
    </a>
  );
}

interface IconBoxProps {
  icon: React.ReactNode;
  title: string;
  url: string;
  className?: string;
}
