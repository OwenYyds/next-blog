'use client'
import React, { useEffect } from 'react'
import ArticleCard from '../blog/ArticleCard'

export default function HomePage() {
  return (
    <>
      <div className="mb-5 py-3 h-screen flex flex-col justify-center items-center text-center">
        <div className="block text-5xl font-bold">Hello , i am Owen</div>
        <div className="block text-3xl font-semibold">Welcome to my blog</div>
        <div className="block">My blog is under construction</div>
      </div>

      <hr className="my-5" />

      <div className="mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </>
  )
}
