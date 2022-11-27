import filenames from './filenames.mjs'
import Transform from './template.mjs'

const getPaths = (
  whatIs,
  skip,
  path = '',
  value = false,
) => {
  const name_folder = filenames.folder(
    'n_a_m_e'.replace(/_/g, ''),
  )
  return {
    type: 'add',
    templateFile:
      'plop/plops/$test6/template/generator/' +
      whatIs +
      '.hbs',
    path:
      `plop/plops/${name_folder}/` +
      path +
      filenames[whatIs](value ? value : 'na' + 'me'), //diretorio destiono
    transform: (doc) => Transform[whatIs](doc),
    skip: skip,
  }
}

export default [
	folder: '{{ snakeCase }}',
	{
		...getPaths('index', () => false),
	},
	{
		...getPaths('styles', () => false),
	},
	{
		...getPaths('mock', () => false),
	},
]
