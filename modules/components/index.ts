import type { PlopGeneratorConfig } from 'plop'

export default <Partial<PlopGeneratorConfig>>{
  description: 'Generate Migrations',

  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'Component name',
      validate: (value: string) => (!value ? 'name is required' : true),
    },
  ],

  actions: (data: any) => {
    const { componentName } = data
    const fileData = { componentName }

    return [
      {
        type: 'add',
        path: `../src/components/{{componentName}}/index.ts`,
        templateFile: `modules/components/templates/index.hbs`,
        data: fileData,
      },

      {
        type: 'add',
        path: `../src/components/{{componentName}}/styles.ts`,
        templateFile: `modules/components/templates/styles.hbs`,
        data: fileData,
      },

      {
        type: 'add',
        path: `../src/components/{{componentName}}/{{componentName}}.tsx`,
        templateFile: `modules/components/templates/component.hbs`,
        data: fileData,
      },
    ]
  },
}
