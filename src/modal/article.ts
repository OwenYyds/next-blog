export interface Article {
  id: number
  userId: number
  title: string
  content: string
  summary: string
  coverImage: string
  categoryId: number
  status: number
  viewCount: number
  likeCount: number
  commentCount: number
  createTime: string
  updateTime: string
  deleted: number
}
