import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <> 
  <Head>

  </Head>

  <Component {...pageProps} />
  
  <Script
      id='nagish_v3_beta'
      dangerouslySetInnerHTML={{
        __html: `
        nagishli_config = {
	      // Plugin language, you can choose "en" for English, and "he" for Hebrew
	      language: "en",
	      // Currently, you can choose from Blue, Red, Green, Purple, Pink, Yellow, Gray, Orange, Brown, Turquoise and Black
	      color: "Blue",
        //addon not supports position at time of upload - check nagishli documentations for latest updates
        nl_pos: "br"
        };
        `
      }}></Script>
    <Script src="/nagishut_v3_beta/nagishli_beta.js?v=3.0b" defer></Script>

  </>
}

export default MyApp
