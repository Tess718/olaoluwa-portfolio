import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Media } from './collections/Media'
import { Gallery } from './collections/Gallery'
import { SelectedWorks } from './collections/SelectedWorks'
import { Testimonials } from './collections/Testimonials'
import { Pricing } from './collections/Pricing'
import { imagekitStorage } from '@humaan/payload-storage-imagekit'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    // Customize admin panel if needed
  },
  editor: lexicalEditor({}),
  collections: [Media, Gallery, SelectedWorks, Testimonials, Pricing],
  secret: process.env.PAYLOAD_SECRET || '',
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  plugins: [
    imagekitStorage({
      collections: {
        media: true,
      },
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY || '',
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY || '',
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || '',
      folder: 'portfolio-gallery',
      disablePayloadAccessControl: true,
    }),
  ],
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
