export default function Heading(props: HeadingProps) {
  return (
    <div className={`${props.className} mb-5`}>
      <h3 className="md:text-5xl text-3xl mb-5 font-bold relative">
        {props.subtitle != null && <span className="select-none absolute -top-7 -left-5 md:text-7xl text-5xl z-0 opacity-5">{props.subtitle}</span>}
        <span className="z-20">{props.title}</span>
      </h3>

      {props.showBorder && (
        <div className="h-1.5 w-40 bg-red-300 rounded-2xl relative">
          <div className="bg-red-600 absolute left-0 top-0 w-1/5 h-full rounded-2xl"></div>
        </div>
      )}
    </div>
  );
}

interface HeadingProps {
  title: React.ReactNode;
  subtitle?: string;
  showBorder: boolean;
  className?: string;
}
