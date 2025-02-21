import { ReactElement } from "react";
import { I18nProviderClient } from "@/locales/clients";

export default async function SubLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactElement;
}) {
  const { locale } = await params;

  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
