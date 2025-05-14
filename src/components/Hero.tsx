import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full flex flex-col items-center justify-center px-4 py-12">
        <Image
          src="/hero-bg.svg"
          alt="background pattern"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
          {/* Main Text */}
          <h1 className="text-deepBlue text-3xl md:text-5xl font-bold mb-4">
            {t("title")}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6">
            {t("subtitle")}
          </h2>
          <p className="text-neutral-400 text-sm md:text-xl mb-8 max-w-2xl mx-auto">
            {t("description")}
          </p>

          {/* Email Input with integrated button */}
          <div className="relative max-w-xl mx-auto mb-16">
            <Input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="w-full pl-6 pr-32 py-6 rounded-full bg-gray-50"
            />
            <Button className="absolute right-1 top-1/2 -translate-y-1/2 px-8 py-2 rounded-full bg-charcoal text-white hover:bg-charcoal/90">
              {t("send")}
            </Button>
          </div>

          <div className="flex justify-center items-center mb-16">
            <Image
              src="/hero-main.svg"
              alt="Mizan app interface"
              width={500}
              height={500}
              className="w-1/2 h-1/2"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 text-center py-12">
        <p className="text-charcoal mb-8 text-2xl">{t("authorizedBy")}</p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          <Image
            src="/central-bank.svg"
            alt="Saudi Central Bank"
            width={200}
            height={75}
            className="h-16 w-auto"
            unoptimized
          />
          <Image
            src="/capital-market.svg"
            alt="Capital Market Authority"
            width={200}
            height={75}
            className="h-16 w-auto"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
