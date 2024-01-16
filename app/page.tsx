import Image from "next/image";
import Tasks from "./components/tasks/Tasks";

export default function Home() {
  return (
    <main>
      <h1>
        <Tasks />
      </h1>
    </main>
  );
}
