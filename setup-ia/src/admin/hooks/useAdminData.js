import { useState, useCallback } from 'react'

export function useAdminData(initialPageSize = 20) {
  const [page, setPage] = useState(1)
  const [pageSize] = useState(initialPageSize)
  const [sortCol, setSortCol] = useState(null)
  const [sortDir, setSortDir] = useState('asc')
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({})

  const handleSort = useCallback((col) => {
    if (sortCol === col) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    } else {
      setSortCol(col)
      setSortDir('asc')
    }
    setPage(1)
  }, [sortCol])

  const handleSearch = useCallback((val) => {
    setSearch(val)
    setPage(1)
  }, [])

  const handleFilter = useCallback((key, val) => {
    setFilters(f => ({ ...f, [key]: val }))
    setPage(1)
  }, [])

  const range = { from: (page - 1) * pageSize, to: page * pageSize - 1 }

  return {
    page, setPage, pageSize, range,
    sortCol, sortDir, handleSort,
    search, handleSearch,
    filters, handleFilter,
  }
}
