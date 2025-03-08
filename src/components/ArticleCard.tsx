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
          width={500}
          height={200}
          // layout="fill"
          objectFit="cover"
          alt="image 1"
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
