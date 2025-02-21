import { BreaksServerRendering } from "@/components/BreakingSSR";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return (
    <div>
      <h1>Hello World</h1>
      <BreaksServerRendering />
      <div>This will get rendered twice</div>
    </div>
  );
}
