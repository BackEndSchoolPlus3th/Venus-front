declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'local' | 'development' | 'production'
    NEXT_PUBLIC_API_URL: string
  }
}
