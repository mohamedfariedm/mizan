import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function Features() {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const t = useTranslations("features");

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 space-y-12">
      {/* Finances Section */}
      <div className=" flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
        <div className="space-y-4 text-center md:text-left md:flex-1">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold text-charcoal",
              isRTL && "text-right"
            )}
          >
            {t("f1Title")}
          </h2>
          <p
            className={cn(
              "text-neutral-400 text-lg md:text-xl",
              isRTL && "text-right"
            )}
          >
            {t("f1Description")}
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src={!isRTL ? "/feature1.svg" : "/feature1Ar.svg"}
            alt="Financial tracking graph"
            width={500}
            height={500}
            className="w-full max-w-md"
            unoptimized
          />
        </div>
      </div>

      {/* Direct Investing Section */}
      <div className=" flex flex-col-reverse md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
        <div className="flex-1 flex justify-center">
          <Image
            src={!isRTL ? "/feature2.svg" : "/feature2Ar.svg"}
            alt="Direct investing graph"
            width={500}
            height={500}
            className="w-full max-w-md mt-8"
            unoptimized
          />
        </div>
        <div className="space-y-4 text-center md:text-left md:flex-1">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold text-charcoal",
              isRTL && "text-right"
            )}
          >
            {t("f2Title")}
          </h2>
          <p
            className={cn(
              "text-neutral-400 text-lg md:text-xl",
              isRTL && "text-right"
            )}
          >
            {t("f2Description")}
          </p>
        </div>
      </div>

      {/* Investment Details Section */}
      <div className=" flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
        <div className="space-y-4 text-center md:text-left md:flex-1">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold text-charcoal",
              isRTL && "text-right"
            )}
          >
            {t("f3Title")}
          </h2>
          <p
            className={cn(
              "text-neutral-400 text-lg md:text-xl",
              isRTL && "text-right"
            )}
          >
            {t("f3Description")}
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src={!isRTL ? "/feature3.svg" : "/feature3Ar.svg"}
            alt="Investment tracking graph"
            width={500}
            height={500}
            className="w-full max-w-md"
            unoptimized
          />
        </div>
      </div>

      {/* Budget Management Section */}
      <div className=" flex flex-col-reverse md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
        <div className="flex-1 flex justify-center">
          <Image
            src={!isRTL ? "/feature4.svg" : "/feature4Ar.svg"}
            alt="Budget management graph"
            width={500}
            height={500}
            className="w-full max-w-md mt-8"
            unoptimized
          />
        </div>
        <div className="space-y-4 text-center md:text-left md:flex-1">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold text-charcoal",
              isRTL && "text-right"
            )}
          >
            {t("f4Title")}
          </h2>
          <p
            className={cn(
              "text-neutral-400 text-lg md:text-xl",
              isRTL && "text-right"
            )}
          >
            {t("f4Description")}
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-green-50 to-transparent flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12  lg:p-12">
        <h2
          className={cn(
            "text-3xl lg:text-5xl font-bold lg:text-left md:w-1/3",
            isRTL && "text-right"
          )}
        >
          {t("f5Title")}
        </h2>
        <div className="flex justify-center lg:justify-end">
          <Image
            src={!isRTL ? "/feature5.svg" : "/feature5Ar.svg"}
            alt="Security illustration"
            width={400}
            height={400}
            className=""
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
