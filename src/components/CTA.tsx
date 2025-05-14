import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const CTA = () => {
  const t = useTranslations("CTA");
  return (
    <div className="bg-charcoal text-white py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Text Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-gray-300 text-xl md:text-xl">{t("subtitle")}</p>
        </div>

        {/* Download Cards */}
        <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
          {/* Android Card */}
          <div className="bg-[#3F454B] rounded-lg p-6 flex flex-col items-start w-full sm:w-1/2 md:w-auto">
            <h3 className="font-medium mb-2">{t("getAndroid")}</h3>
            <p className="text-sm text-gray-400 mb-4">Android 8.0 +</p>
            <button className="bg-[#208BFF] text-white px-12 py-3 rounded-lg mb-6 hover:bg-blue-600 transition-colors">
              {t("downloadNow")}
            </button>
            <div className=" flex items-center gap-6">
              <Image
                src="/qr-android.svg"
                alt="Android QR Code"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div className="bg-[#2C3136] p-4 rounded-full">
                <Image
                  src="/google-play.svg"
                  alt="Google Play"
                  width={28}
                  height={28}
                />
              </div>
            </div>
          </div>

          {/* iOS Card */}
          <div className="bg-[#3F454B] rounded-lg p-6 flex flex-col items-start w-full sm:w-1/2 md:w-auto">
            <h3 className="font-medium mb-2">{t("getIos")}</h3>
            <p className="text-sm text-gray-400 mb-4">iOS 15+</p>
            <button className="bg-[#208BFF] text-white px-12 py-3 rounded-lg mb-6 hover:bg-blue-600 transition-colors">
              {t("downloadNow")}
            </button>
            <div className="flex items-center gap-6">
              <Image
                src="/qr-ios.svg"
                alt="iOS QR Code"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div className="bg-[#2C3136] p-4 rounded-full">
                <Image
                  src="/app-store.svg"
                  alt="App Store"
                  width={28}
                  height={28}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
