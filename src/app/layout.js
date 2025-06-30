import { ThemeProvider } from './contexts/Theme';
import { Lexend_Deca, Unbounded } from 'next/font/google';
import './globals.css';

const textFont = Lexend_Deca({
  variable: '--font-lexend-deca',
  subsets: ['latin']
})

const headingFont = Unbounded({
  variable: '--font-unbounded',
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-16x16.ico" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-64x64.ico" sizes="64x64" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'light';
                  document.documentElement.className = 'theme-' + theme;
                } catch (_) {}
              })();
            `
          }}
        />
      </head>
      <body className={`${textFont.variable} ${headingFont.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
