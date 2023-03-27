const App = ({ Component, pageProps }) => (
  <>
    <style global jsx>{`
      h1 {
        color: red;
      }
    `}</style>

    <Component {...pageProps} />
  </>
)

export default App
