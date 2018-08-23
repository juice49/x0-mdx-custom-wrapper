import React from 'react'
import { MDXProvider } from '@mdx-js/tag'

const CustomWrapper = ({ children }) => (
  <div className='custom-wrapper'>
    {children}
  </div>
)

export default ({ Component, pageProps }) => (
  <MDXProvider
    components={{
      wrapper: 'article'
      // wrapper: CustomWrapper
    }}
  >
    <Component {...pageProps} />
  </MDXProvider>
)
