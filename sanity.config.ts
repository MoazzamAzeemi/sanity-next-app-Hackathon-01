import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanity next site',

  projectId: 'dnn3505k',
  dataset: 'production',
  basePath: '/studio',


  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
