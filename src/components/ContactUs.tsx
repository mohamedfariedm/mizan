"use client";
import React, { useState } from "react";

const ContactUs = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  // Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error" | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    setToastMessage(null); // Clear previous toast

    try {
      const response = await fetch("https://mizan.com.sa/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include", // Include cookies if needed
      });

      if (response.ok) {
        setIsSuccess(true);
        setToastMessage("تم إرسال الرسالة بنجاح!");
        setToastType("success");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setIsError(true);
        setToastMessage("حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى.");
        setToastType("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setIsError(true);
      setToastMessage("حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى.");
      setToastType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Toast Container */}
      <ol
        className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
        role="alert"
      >
        {toastMessage && (
          <li
            className={`${
              toastType === "success" ? "bg-green-500" : "bg-red-500"
            } text-white p-4 rounded-md mb-4`}
          >
            {toastMessage}
          </li>
        )}
      </ol>

      <div className="container mx-auto py-10 px-4" dir="rtl">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-xl mx-auto">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="tracking-tight text-3xl font-bold text-center">تواصل معنا</div>
          </div>
          <div className="p-6 pt-0">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-lg">الاسم</label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 !text-xl ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-neutral-400 placeholder:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="name"
                  name="name"
                  placeholder="ادخل اسمك بالكامل"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-lg">البريد الالكتروني</label>
                <input
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 !text-xl ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-neutral-400 placeholder:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="email"
                  name="email"
                  placeholder="ادخل بريدك الالكتروني"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {/* Message Textarea */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-lg">الرسالة</label>
                <textarea
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 !text-xl ring-offset-background placeholder:text-neutral-400 placeholder:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[150px]"
                  id="message"
                  name="message"
                  placeholder="ادخل رسالتك"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 w-full text-lg py-6"
                disabled={isLoading} // Disable the button while the request is loading
              >
                {isLoading ? "جاري الإرسال..." : "ارسل"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
