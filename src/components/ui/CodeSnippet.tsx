export default function CodeSnippet() {
  return (
    <div className='bg-slate-800 py-2'>
      <CodeLine
        lineNum='1'
        lineText='const <span>profession</span> = ['
        isHighlight={false}
      />
      <CodeLine lineNum='2' lineText=']' isHighlight={false} />
    </div>
  );
}

function CodeLine(props: CodeLineProps) {
  return <>{props.lineText}</>;
}

interface CodeLineProps {
  lineNum: string;
  lineText: JSX.Element | string;
  isHighlight: boolean;
}
