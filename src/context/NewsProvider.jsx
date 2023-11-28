import axios from "axios"
import { createContext, useEffect, useState } from "react"

const NewsContext = createContext()

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([])
  const [category, setCategory] = useState("general")
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalNews, setTotalNews] = useState(0)
  const pageSize = 10

  const handleChangeCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleChangePage = (e, value) => {
    setPage(Number(value))
  }

  useEffect(() => {
    const getNewsByCategory = async () => {
      setLoading(true)
      setNews([])
      console.log(import.meta.env.VITE_NEWS_API_KEY)
      try {
        const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=mx&pageSize=${pageSize}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        const { data } = await axios(url)
        console.log(data)

        const { articles } = data
        setNews(articles)
        setTotalNews(data.totalResults)
        setPage(1)
        console.log(articles)
      } catch (error) {
        console.error("ERROR: ", error)
      } finally {
        setLoading(false)
      }
    }
    getNewsByCategory()
  }, [category])

  useEffect(() => {
    const getNewsByCategory = async () => {
      setLoading(true)
      try {
        const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=mx&page=${page}&pageSize=${pageSize}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        const { data } = await axios(url)
        console.log(data)

        const { articles } = data
        setNews(articles)
        setTotalNews(data.totalResults)
        console.log(articles)
      } catch (error) {
        console.error("ERROR: ", error)
      } finally {
        setLoading(false)
      }
    }
    getNewsByCategory()
  }, [page])

  return (
    <NewsContext.Provider
      value={{
        news,
        category,
        handleChangeCategory,
        loading,
        totalNews,
        page,
        handleChangePage,
        pageSize,
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}

export { NewsProvider }

export default NewsContext