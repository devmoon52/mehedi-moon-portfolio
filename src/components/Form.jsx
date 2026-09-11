import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";
import { IoIosSend, IoIosAlert } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import emailjs from "@emailjs/browser";
import EmojiPicker from "emoji-picker-react";

import { useContext, useEffect, useState } from "react";
import { NotificationContext } from "../context/notificationContext";
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const childVar = {
  hidden: {
    y: 15,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

// displaying err message fn
function displayErrMsg(msg) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0 }}
      className="absolute z-10 sm:left-10 left-3 top-full mt-2 w-[90%] max-w-84"
    >
      {/* triangle */}
      <div
        className="absolute -top-2 left-4 w-0 h-0 
        border-l-8 border-l-transparent
        border-r-8 border-r-transparent
        border-b-8 border-b-[#ff5c5c]"
      ></div>

      {/* box */}
      <div
        className="bg-[#ff5c5c]/90 backdrop-blur-sm border border-[#ffffff1a] 
        text-white px-3 py-2 rounded-md flex items-start gap-2 shadow-lg"
      >
        <IoIosAlert size={24} />

        <span id="name-error" className="text-sm">
          {msg}
        </span>
      </div>
    </motion.div>
  );
}

const Form = ({ input }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { setNotification } = useContext(NotificationContext);

  const {
    register,
    setValue,
    reset,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // submit form action
  async function submitData(data) {
    try {
      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, {
        publicKey: PUBLIC_KEY,
      });

      if (res.status >= 200 && res.status < 300) {
        setNotification({
          message: "Message has been sent",
          type: "toastbar",
          show: true,
        });

        reset(); // reset form
      }
    } catch (err) {
      // Something went wrong !
      console.error("Something went wrong !");
    }
  }

  // off emoji by window click
  useEffect(() => {
    function offEmojiPicker() {
      if (!showEmojiPicker) return;
      setShowEmojiPicker(false);
    }

    window.addEventListener("click", offEmojiPicker);

    return () => {
      window.removeEventListener("click", offEmojiPicker);
    };
  }, [showEmojiPicker]);

  const message = watch("message", "");

  return (
    <div className="w-full">
      <form className="space-y-3" onSubmit={handleSubmit(submitData)}>
        {/* name field */}
        <motion.div variants={childVar} className="w-full relative">
          <label
            htmlFor="name"
            className="uppercase text-gray-200 font-medium sm:text-[16px] text-sm"
          >
            your name
          </label>
          <input
            {...register("name", {
              required: "Please enter your name first !",
              minLength: {
                value: 3,
                message: "Name must be at least 3 charrecters !",
              },
              maxLength: {
                value: 30,
                message: "Name must be less than 30 charrecters !",
              },
            })}
            className={`border border-gray-500 w-full md:py-3 py-2 rounded-md mt-1 outline-none focus:ring ring-teal-500 px-4 focus:border-teal-500 ${input && input}`}
            id="name"
            autoComplete="name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            type="text"
          />
          <AnimatePresence>
            {errors.name && displayErrMsg(errors.name.message)}
          </AnimatePresence>
        </motion.div>

        {/* email field */}
        <motion.div variants={childVar} className="w-full relative">
          <label
            htmlFor="email"
            className="uppercase text-gray-200 font-medium sm:text-[16px] text-sm"
          >
            your email
          </label>
          <input
            {...register("email", {
              required: "Email is required !",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email !",
              },
            })}
            className={`border border-gray-500 w-full md:py-3 py-2 rounded-md mt-1 outline-none focus:ring ring-teal-500 px-4 focus:border-teal-500 ${input && input}`}
            id="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            type="email"
          />
          <AnimatePresence>
            {errors.email && displayErrMsg(errors.email.message)}
          </AnimatePresence>
        </motion.div>

        {/* textarea field */}
        <motion.div className="relative" variants={childVar}>
          <label
            htmlFor="message"
            className="uppercase text-gray-200 font-medium sm:text-[16px] text-sm"
          >
            message
          </label>
          <div className="w-full h-50 relative">
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message too short",
                },
                maxLength: {
                  value: 500,
                  message: "Message too long",
                },
              })}
              id="message"
              autoComplete="off"
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.error ? "message-error" : undefined}
              className={`border border-gray-500 w-full md:py-3 py-2 rounded-md outline-none focus:ring ring-teal-500 px-4 focus:border-teal-500 resize-none h-full ${input && input}`}
            ></textarea>

            {/* counter & emoji */}
            <div
              className={`absolute right-1 bottom-1 flex items-center text-gray-200 gap-2 ${input && input} py-0.5 px-1`}
            >
              {showEmojiPicker && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute right-1 bottom-10 z-10"
                >
                  <EmojiPicker
                    theme="dark"
                    emojiStyle="native"
                    width={320}
                    height={400}
                    autoFocusSearch={false}
                    previewConfig={{ showPreview: false }}
                    onEmojiClick={(emojiData) => {
                      setValue("message", message + emojiData.emoji);
                    }}
                  />
                </div>
              )}

              <p className="text-sm">{message.length}/500</p>
              <button
                type="button"
                aria-label="Open emoji tab"
                className="cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowEmojiPicker((prev) => !prev);
                }}
              >
                <MdOutlineEmojiEmotions size={20} />
              </button>
            </div>
          </div>
          <AnimatePresence>
            {errors.message && displayErrMsg(errors.message.message)}
          </AnimatePresence>
        </motion.div>

        {/* send btn */}
        <motion.div variants={childVar} className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            aria-label="Send message"
            className="cursor-pointer w-52 h-13 flex items-center gap-3 justify-center rounded-md bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="h-6 w-6 border-2 border-white border-t-transparent animate-spin rounded-full"></div>
                <span>Sending</span>
              </>
            ) : (
              <>
                <span className="font-semibold">Send Message</span>
                <IoIosSend size={25} />
              </>
            )}
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default Form;
