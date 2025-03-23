import { Article } from '@/modal/article'
import { createApi } from '@/services/request'

export const getAll = () => {
  return createApi<Article[]>('get', '/article')
}

export const getArticleDetail = (id: number) => {
  createApi<Article>('get', `/article/${id}`)
}

export const addArticle = (article: Partial<Article>) => {
  createApi<Article>('post', '/article/add', article)
}
