import config from '@/payload.config'
import { NotFoundPage } from '@payloadcms/next/views'
import React from 'react'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

import { importMap } from '../importMap.js'

const NotFound = async ({ params, searchParams }: Args) => {
  return NotFoundPage({ config, params, searchParams, importMap })
}

export default NotFound
