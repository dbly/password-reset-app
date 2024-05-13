# password-reset-app

Provides a password reset form built using Next.js, Typescript, Tailwind CSS and tested with Jest/React Testing Library.

## Architecture
The single page application runs on Cloudflare CDN and the API is hosted as an Edge function.

The new password is submitted via HTTP POST request to the endpoint `https://{hostname:port}/api/password-change`.

## Requirements
The following components need to be installed to run locally:
* nodejs v21.7.1
* npm 10.5.0

### How to install dependencies
`npm install`

## How to run
`npm run dev`

## How to deploy
`npm run deploy`

## How to test
`npm run test`

## Online demo
Go to https://46b282ea.password-reset-app.pages.dev/

Note, your browser may throw a warning the site is suspicious.

## Considerations

For a production deployment, UI testing could be expanded but I was running out of time.

Also, there is no proper handling of server error responses at this stage and the API implementation is a stub.

A real password reset flow would require a preceding proper authentication step (e.g. at minimum a password reset link via email or one-time passcode send to a mobile phone).

This would generate an auth token (e.g. JWT) which the password reset form would need to submit to the API alongside the new password. 

Further considerations are accessibility (eg. the consistent use of `alt` attributes) and the use of a CSS design system. This would allow the application of consistent & re-usable styling for all pages of the web application.