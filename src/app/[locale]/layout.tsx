import "../globals.css";
import type { Metadata } from "next";
import { Zain } from "next/font/google";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const zain = Zain({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Mizan",
  description: "Take control of your financial future",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${zain.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
