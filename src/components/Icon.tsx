export type TIcon = {
  viewBox: string;
  paths: Array<{
    d: string;
    fillRule?: "nonzero" | "evenodd" | "inherit" | undefined;
    clipRule?: string | number | undefined;
    id?: string;
  }>;
  title: string;
  customClasses?: string;
  id?: string;
}

export function Icon(props: TIcon) {
  const {viewBox, paths, customClasses, title, id} = props;

  return (
    <svg viewBox={viewBox} id={id} className={`icon ${customClasses || ""}`}>
      <title id="title" lang="en">{title}</title>
      {paths.map((path, index) => (
        <path key={index} id={path.id} d={path.d} fillRule={path.fillRule} clipRule={path.clipRule} />
      ))}
    </svg>
  )
}
