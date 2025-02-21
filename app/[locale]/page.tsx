import { BreaksServerRendering } from "@/components/BreakingSSR";
import { getI18n } from "@/locales/server";

export default async function Home() {
  const t = await getI18n();
  return (
    <div>
      <h1>{t("hello_world")}</h1>
      <BreaksServerRendering />
      <BreaksServerRendering />
      <div>{t("rendered_twice")}</div>
    </div>
  );
}
