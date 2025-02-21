import { BreaksServerRendering } from "@/components/BreakingSSR";

export const dynamic = "force-dynamic";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      <h1>Hello World</h1>
      <BreaksServerRendering />
      <div>This will get rendered twice</div>
    </div>
  );
}
