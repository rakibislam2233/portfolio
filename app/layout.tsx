import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const jetbrains  = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixel",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Md Rakib Ali - Full-Stack Developer",
  description: "Modern portfolio website showcasing full-stack development skills, projects, and experience.",
  generator: "v0.app",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Portfolio"],
  authors: [{ name: "Md Rakib Ali" }],
  creator: "Md Rakib Ali",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrains.className}  antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
