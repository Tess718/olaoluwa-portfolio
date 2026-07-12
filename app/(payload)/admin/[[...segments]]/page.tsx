import type { Metadata } from 'next'

import config from '@/payload.config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import React from 'react'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = async ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params, searchParams })

import { importMap } from '../importMap.js'

const Page = async ({ params, searchParams }: Args) => {
  return RootPage({ config, params, searchParams, importMap })
}

export default Page
