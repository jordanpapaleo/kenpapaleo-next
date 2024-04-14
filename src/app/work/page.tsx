'use client'
import Curtain from '@/components/Curtain'
import PageNav from '@/components/PageNav'
import React from 'react'

export default function Work() {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      <PageNav loading={loading} />
      <Curtain state={loading ? 'closed' : 'open'} />
    </>
  )
}
