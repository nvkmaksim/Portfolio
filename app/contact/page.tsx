"use client";
import Image from "next/image";
import { useRef } from "react";
import SendIcon from "@/public/images/send.png";
import { sendMessage } from "@/actions/send-message";
import { toast } from "react-toastify";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section className="flex flex-col flex-1 gap-(--spacing-md)">
      <div className="flex flex-col gap-(--spacing-sm)">
        <h2 className="text-(--color-text) text-2xl font-bold relative inline-block">
          Связаться
        </h2>

        <div>
          <h3 className="text-(--color-text) text-xl font-bold mb-6">
            Местоположение
          </h3>
          <div className="w-full h-70 rounded-2xl overflow-hidden">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad41bf4e94e4f97dab5119165b6dbf7dc5ed7ba30b922de5dc1f54dca6ac0392c&amp;source=constructor"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-(--color-text) text-xl font-bold mb-6">
          Контактная форма
        </h3>

        <form
          id="contact-form"
          ref={formRef}
          action={async (formData) => {
            toast("hello");
            const result = await sendMessage(formData);
            if (result.success) {
              toast.success("Сообщение отправлено!");
              formRef.current?.reset();
            } else {
              toast.error("Не удалось отправить сообщение!");
            }
          }}
          className="flex flex-col gap-(--spacing-sm)"
        >
          <input
            name="name"
            type="text"
            placeholder="Имя"
            required
            className="w-full bg-transparent border border-(--color-border) rounded-xl px-4 py-3 text-(--color-text) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-text)/20 transition-colors"
          />

          <input
            name="subject"
            type="text"
            placeholder="Тема"
            className="w-full border border-(--color-border) rounded-xl px-4 py-3 text-(--color-text) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-text)/20 transition-colors"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Ваше сообщение"
            required
            className="w-full bg-transparent border border-(--color-border) rounded-xl px-4 py-3 text-(--color-text) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-text)/20 transition-colors"
          />
          <button
            type="submit"
            className="mt-2 flex items-center justify-center gap-2 w-full bg-(--color-secondary)/50 border border-(--color-border) py-4 rounded-xl font-medium hover:bg-(--color-text)/20 transition-all active:scale-[1]"
          >
            <Image className="invert w-5 h-5" src={SendIcon} alt="Send icon" />
            <span>Отправить сообщение</span>
          </button>
        </form>
      </div>
    </section>
  );
}
