"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export default function ContactSection() {
  const placeholders = [
    "What's the bestseller?",
    "What does Aro mean?",
    "What is Matcha?",
    "Where is the Location?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask Us Anything....
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <h2 className="mt-10 sm:mb-20 text-xl text-center sm:text-2xl dark:text-white text-black underline">
        Your Queries are valuable
      </h2>
    </div>
  );
}
