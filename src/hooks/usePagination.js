import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function usePagination(url) {
    const [page, setPage] = useState(1)
    const [data, setData] = useState()

    useEffect(() => {
        axios
            .get(`${url}/?page=${page}`)
            .then(res => {
                setData(res.data)
            })
    }, [page])

    const incrementPage = () => {
        if (page < data.info.pages) {
          setPage(page + 1)
        }
      }
    
    const decrementPage = () => {
        if (page > 1) {
          setPage(page - 1)
        }
    }

    return [data, incrementPage, decrementPage]
}