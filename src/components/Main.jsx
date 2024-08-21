import { Count } from "./Count";
import { Flash } from "./Flash";
import { Hero } from "./Hero";
import { Topics } from "./Topics";

export const Main = () => {
  return (
    <main className="min-h-screen flex-col">
      <Hero />
      <Flash />
      <Count />
      <Topics />
    </main>
  );
};
