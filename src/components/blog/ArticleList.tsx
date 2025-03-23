'use client'
import React, { useEffect, useState } from 'react'
import ArticleListCard from './ArticleListCard'
import { TextInput, Select } from 'flowbite-react'
import Button from '../Button'
import { getAll, getArticleDetail, register } from '@/apis'
import { Article } from '@/modal/article'

export default function ArticleList() {
  const [articleList, setArticleList] = useState<Article[]>()

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getAll()
        setArticleList(response.data)
      } catch (error) {
        console.error('Failed to fetch articles:', error)
      }
    }

    fetchArticles()
  }, [])
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
        <form className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Term:
            </label>
            <TextInput
              placeholder="Search..."
              id="searchTerm"
              type="text"
              value={111}
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort:</label>
            <Select id="sort">
              <option value="desc">Latest</option>
              <option value="asc">Oldest</option>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Category:</label>
            <Select id="category">
              <option value="uncategorized">Uncategorized</option>
              <option value="reactjs">React.js</option>
              <option value="nextjs">Next.js</option>
              <option value="javascript">JavaScript</option>
            </Select>
          </div>
          <Button name="Apply Filters" duoTone="purpleToBlue" />
        </form>
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 ">
          Posts results:
        </h1>
        <div className="p-7 flex flex-wrap gap-4">
          {false && <p className="text-xl text-gray-500">No posts found.</p>}
          {false && <p className="text-xl text-gray-500">true...</p>}
          {true &&
            articleList?.map((article) => (
              <ArticleListCard key={article.id} article={article} />
            ))}
          {/* {showMore && (
            <button
              onClick={() => {}}
              className="text-teal-500 text-lg hover:underline p-7 w-full"
            >
              Show More
            </button>
          )} */}
        </div>
      </div>
    </div>
  )
}
