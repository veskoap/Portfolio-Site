import {SchemaTypeDefinition} from 'sanity'

import {articleType} from './article'
import {pageElementType, pageType} from './page'
import pageInfo from './schema/pageInfo'
import experience from './schema/experience'
import project from './schema/project'
import skill from './schema/skill'
import social from './schema/social'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [articleType, pageElementType, pageType, pageInfo, experience, project, skill, social],
}
