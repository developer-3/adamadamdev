interface ProjectProps {
  name: string;
  link: string;
  summary: string;
}

export default function Project(props: ProjectProps) {
  return (
    <div class="bg-gray-200 rounded-lg pb-2">
      <p class="text-xl text-slate-600 font-bold p-4">
        {props.name}
      </p>
      <p class="text-md text-gray px-4">
        {props.summary}
      </p>
      <a href={props.link} class="px-4">
        Source code
      </a>
    </div>
  );
}
