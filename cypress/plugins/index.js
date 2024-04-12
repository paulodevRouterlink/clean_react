import webpackPreprocessor from '@cypress/webpack-preprocessor'

export default (on) => {
  on('file:preprocessor', webpackPreprocessor())
}
