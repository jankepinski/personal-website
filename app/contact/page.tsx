"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SocialIcon } from "react-social-icons";
import { handleSubmit } from "../actions/actions";
import { useFormState } from "react-dom";
import { createRef, useEffect } from "react";

const initialState = {
  message: "",
};

const formRef = createRef<HTMLFormElement>();

export default function Contact() {
  const [state, formAction] = useFormState(handleSubmit, initialState);

  useEffect(() => {
    if (state.message) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center text-neutral-200 mt-24 w-full lg:w-1/2">
        <div className="w-full flex-col-reverse md:flex-row flex justify-between">
          <h1 className="text-4xl mb-2 font-bold text-gray-300">Contact me</h1>
          <div className="flex justify-end gap-2 self-start -ml-3 md:ml-0">
            <SocialIcon
              href="https://twitter.com/kepinski_dev"
              target="_blank"
              network="twitter"
              bgColor="transparent"
              fgColor="#aaa"
            />
            <SocialIcon
              href="https://github.com/jankepinski"
              target="_blank"
              style={{ cursor: "pointer" }}
              network="github"
              bgColor="transparent"
              fgColor="#aaa"
            />
            <SocialIcon
              href="https://www.linkedin.com/in/jan-k%C4%99pi%C5%84ski-17607128a/"
              target="_blank"
              style={{ cursor: "pointer" }}
              network="linkedin"
              bgColor="transparent"
              fgColor="#aaa"
            />
          </div>
        </div>
        <form
          ref={formRef}
          className="w-full flex flex-col justify-center items-center"
          action={formAction}
        >
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <Input
              type="text"
              name="name"
              placeholder="Name"
              className="border-neutral-600 basis-1/4"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              className="border-neutral-600 basis-3/4"
              required
            />
          </div>
          <Textarea
            className="border-neutral-600 mt-2 resize-none"
            name="message"
            placeholder="Your message..."
            rows={16}
            required
          />
          <div className="w-full flex justify-between flex-col lg:flex-row-reverse mt-2">
            <Button
              className="border-neutral-600 text-gray-400 w-full lg:w-auto"
              variant="outline"
              type="submit"
            >
              Send
            </Button>
            {state.message && <p className="text-gray-200">{state.message}</p>}
            {state.error && <p className="text-red-500">{state.error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
