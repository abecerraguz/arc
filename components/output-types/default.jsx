import React from 'react'

export default ({
  children,
  contextPath,
  deployment,
  CssLinks,
  Fusion,
  Libs,
  MetaTags
}) =>
  <html>
    <head>
      <title>Fusion Article</title>
      <MetaTags />
      <Libs />
      <CssLinks />
      <link rel='icon' type='image/x-icon' href={deployment(`${contextPath}/resources/favicon.ico`)} />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>
    </head>
    <body>

    {/* <h2 class="container text-info">Welcome to Fusion!</h2> */}
      <div id='fusion-app'>
      {children}
      </div>
      <Fusion />
    </body>
  </html>
