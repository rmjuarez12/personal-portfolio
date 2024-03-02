export default function ServiceBox(props: ServiceBoxProps) {
  return (
    <div
      className={`${props.className} md:p-6 border-slate-800 border-2 border-solid flex flex-row rounded-lg`}
    >
      <div className={`mr-4 text-4xl ${props.iconColor}`}>{props.icon}</div>

      <div className='w-11/12'>
        <h3 className='mb-4 text-2xl'>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

interface ServiceBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  iconColor?: string;
}
