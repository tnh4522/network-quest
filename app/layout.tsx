import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Link from "next/link";
import { Network, History } from "lucide-react";
import type { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Network Quest – Luyện thi Mạng máy tính",
  description:
    "Ứng dụng luyện thi & kiểm tra trắc nghiệm Mạng máy tính với 180+ câu hỏi theo 3 mức độ: Cơ bản, Trung bình, Nâng cao.",
  keywords: ["mạng máy tính", "trắc nghiệm", "luyện thi", "network", "quiz"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('nq_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', t);
                if (t === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--fg)] antialiased transition-colors">
        {/* Nav */}
        <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-[#0f1117]/90 backdrop-blur-md transition-colors">
          <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg px-1"
              aria-label="Network Quest – Trang chủ"
            >
              <Network size={20} className="text-cyan-600 dark:text-cyan-400" aria-hidden />
              <span className="text-sm">Network Quest</span>
            </Link>

            <nav className="flex items-center gap-2" aria-label="Điều hướng chính">
              <Link
                href="/history"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <History size={15} aria-hidden />
                <span className="hidden sm:inline">Lịch sử</span>
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1" id="main-content">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 dark:border-white/5 py-4 text-center text-xs text-slate-500 dark:text-slate-600">
          Network Quest &copy; {new Date().getFullYear()} — Luyện thi Mạng máy tính
        </footer>
      </body>
    </html>
  );
}
