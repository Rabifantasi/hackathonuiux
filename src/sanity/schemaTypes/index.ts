import { type SchemaTypeDefinition } from 'sanity'
import hero from './hero'
import header from './header'
import footer from './footer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, header, footer],
}
