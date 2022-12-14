import file_name from './file_name.mjs'
import TransformComponent from './template.mjs'

const getPaths_component = (whatIs, skip) => {
  const name_folder = file_name.folder(
    'n_a_m_e'.replace(/_/g, ''),
  )
  return {
    type: 'add',
    templateFile:
      'plop/plops/component_react/{{ isTs }}/generator/' +
      whatIs +
      '.hbs',
    path: '{{ group }}'
      ? `src/components/{{ constantCase group }}/${name_folder}/` +
        file_name[whatIs]('na' + 'me')
      : `./src/components/${name_folder}/` +
        file_name[whatIs]('na' + 'me'), //diretorio destiono
    transform: (doc) => TransformComponent[whatIs](doc),
    skip: (answers) => {
      if (typeof skip === 'boolean') return skip
      return answers[skip] ? false : '-SKIP ' + whatIs
    },
  }
}

export default [
  {
    ...getPaths_component('stories', 'hasStorybook'),
  },
  {
    ...getPaths_component('index', 'hasIndex'),
  },
  {
    ...getPaths_component('styles', false),
  },
  {
    ...getPaths_component('mock', 'hasMock'),
  },
  {
    ...getPaths_component('test', 'hasTest'),
  },
]
