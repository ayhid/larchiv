export interface IArticle {
  id: string,
  title: string,
  video?: string,
  language: string,
  publishDate: Date,
  categories: [string]
}
