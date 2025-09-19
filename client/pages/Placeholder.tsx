interface Props {
  title: string;
  description?: string;
}
export default function Placeholder({ title, description }: Props) {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        {title}
      </h1>
      <p className="mt-2 text-slate-600">
        {description ||
          "This page is coming soon. Continue prompting to fill in the content."}
      </p>
    </div>
  );
}
