import { QuizConfig } from "@/components/home/QuizConfig";
import { QuickStats } from "@/components/home/QuickStats";
import { Network, Zap } from "lucide-react";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-8 animate-fade-in-up">
      {/* Hero */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 mb-2">
          <Network size={32} className="text-cyan-600 dark:text-cyan-400" aria-hidden />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Network Quest
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base max-w-md mx-auto leading-relaxed">
          Luyện thi & kiểm tra trắc nghiệm{" "}
          <strong className="text-slate-900 dark:text-slate-200 font-semibold">Mạng máy tính</strong> với
          180+ câu hỏi theo 3 mức độ.
        </p>
        <div className="flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Zap size={12} className="text-cyan-600 dark:text-cyan-400" aria-hidden />
            Không cần đăng nhập
          </span>
          <span>·</span>
          <span>Tiến độ lưu tự động</span>
          <span>·</span>
          <span>Có giải thích chi tiết</span>
        </div>
      </div>

      {/* Quick Stats (client component, SSR-safe) */}
      <Suspense fallback={null}>
        <QuickStats />
      </Suspense>

      {/* Config card */}
      <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 shadow-sm dark:shadow-xl transition-colors">
        <QuizConfig />
      </div>
    </div>
  );
}
