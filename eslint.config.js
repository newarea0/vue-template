import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
  },
})
