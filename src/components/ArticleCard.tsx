"use client";

import { Card } from "flowbite-react";
import Image from "next/image";

import bg from "@/assets/images/proj5.png";

export function ArticleCard() {
  return (
    <Card
      className="max-w-sm min-w-min"
      renderImage={() => (
        <Image
          src={bg}
          alt="image 1"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </Card>
  );
}
