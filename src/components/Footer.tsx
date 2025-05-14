import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t py-8 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image src="/logo.svg" alt="Mizan Logo" width={120} height={40} />
            <p className="text-base text-muted-foreground max-w-xs">
              {t.rich("title", {
                strong: (chunks) => (
                  <span className="text-deepBlue">{chunks}</span>
                ),
              })}
            </p>
          </div>

          {/* Authorized By */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">{t("authorizedBy")}</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Image
                src="/capital-market-color.svg"
                alt="Capital Market Authority"
                width={100}
                height={40}
                className="w-40"
              />
              <Image
                src="/central-bank-color.svg"
                alt="Saudi Central Bank"
                width={100}
                height={40}
                className="w-40"
              />
            </div>
          </div>

          {/* Download Apps */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">{t("downloadNow")}</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="#" className="sm:w-auto">
                <div className="bg-charcoal text-white px-6 py-3 rounded-full flex items-center gap-3">
                  <Image
                    src="/google-play.svg"
                    alt="Google Play icon"
                    width={24}
                    height={24}
                  />
                  <div className="text-left">
                    <div className="text-xs">{t("getItOn")}</div>
                    <div className="text-sm font-medium">Google Play</div>
                  </div>
                </div>
              </Link>
              <Link href="#" className="sm:w-auto">
                <div className="bg-charcoal text-white px-6 py-3 rounded-full flex items-center gap-3">
                  <Image
                    src="/app-store.svg"
                    alt="App Store icon"
                    width={24}
                    height={24}
                  />
                  <div className="text-left">
                    <div className="text-xs">{t("getItOn")}</div>
                    <div className="text-sm font-medium">App Store</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">{t("followUs")}</h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="bg-charcoal text-white p-2 rounded-full hover:opacity-80 transition"
              >
                <Image
                  src="/twitter.svg"
                  alt="Twitter icon"
                  width={24}
                  height={24}
                  className="w-5 h-5"
                />
              </Link>
              <Link
                href="#"
                className="bg-charcoal text-white p-2 rounded-full hover:opacity-80 transition"
              >
                <Image
                  src="/in.svg"
                  alt="LinkedIn icon"
                  width={24}
                  height={24}
                  className="w-5 h-5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
