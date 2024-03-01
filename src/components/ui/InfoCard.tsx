export default function InfoCard(props: InfoCardProps) {
  return (
    <div
      className={`px-4 py-2 flex flex-row items-center ${
        !props.isLast && "border-solid border-slate-700 border-b-2 mb-2"
      }`}
    >
      <div className='mr-3 text-lg bg-red-900 p-2 rounded'>{props.icon}</div>

      <div>
        <p className='text-sm'>{props.label}</p>
        <p className='text-white'>{props.description}</p>
      </div>
    </div>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  isLast: boolean;
}
