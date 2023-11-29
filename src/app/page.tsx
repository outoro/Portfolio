import Double from "./components/Double";
import { projects } from "./project/data";

export default function Home() {
  return (
    <div className="h-full">
      <Double projects={[projects[0], projects[1]]} reversed={false} />
      {/* <Double projects={[projects[2], projects[3]]} reversed={true} /> */}
    </div>
  );
}
