# Network Quest 🌐

Ứng dụng luyện thi & kiểm tra trắc nghiệm **Mạng máy tính** với 196+ câu hỏi chính xác về kỹ thuật, xây dựng trên Next.js 16 + TypeScript + Tailwind CSS.

## Tính năng

| Tính năng | Mô tả |
|---|---|
| **196+ câu hỏi** | 68 Cơ bản, 68 Trung bình, 60 Nâng cao (kèm chủ đề Tường lửa / Firewall) |
| **Luyện tập** | Hiện đáp án + giải thích ngay sau mỗi câu |
| **Thi thử** | Đồng hồ đếm ngược, cảnh báo 1 phút cuối |
| **Phân tích kết quả** | Điểm, xếp loại, biểu đồ theo chủ đề |
| **Lịch sử** | Lưu tự động localStorage, biểu đồ tiến bộ |
| **Làm lại câu sai** | Tự tạo bài luyện từ các câu đã sai |
| **Phím tắt** | A/B/C/D chọn đáp án, ←→ chuyển câu, M đánh dấu |
| **Dark/Light mode** | Hỗ trợ cả hai theme chuẩn contrast |
| **Responsive** | Mobile-first, chạy tốt từ 360px |
| **Offline** | Không cần server, chạy hoàn toàn client-side |

## Cách chạy

```bash
# Cài dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Chạy unit tests
npm test

# Lint
npm run lint
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt.

## Cấu trúc thư mục

```
network-quest/
├── app/
│   ├── layout.tsx              # Root layout (nav, theme)
│   ├── page.tsx                # Trang chủ / chọn bài
│   ├── quiz/page.tsx           # Màn hình làm bài
│   ├── result/[attemptId]/     # Trang kết quả
│   └── history/page.tsx        # Lịch sử làm bài
│
├── components/
│   ├── ui/                     # Button, Badge, ThemeToggle
│   ├── home/                   # QuickStats, QuizConfig
│   ├── quiz/                   # QuestionCard, OptionButton, Timer, ...
│   ├── result/                 # ResultSummary, TopicChart, ReviewList
│   └── history/                # HistoryList, ScoreChart
│
├── data/questions/
│   ├── basic.ts                # 68 câu Cơ bản
│   ├── intermediate.ts         # 68 câu Trung bình
│   ├── advanced.ts             # 60 câu Nâng cao
│   └── index.ts                # Export + validateQuestions()
│
├── lib/
│   ├── quiz-engine.ts          # shuffle, select, score, analyze (pure functions)
│   ├── grading.ts              # getGradeInfo, suggestions, formatters
│   ├── storage.ts              # localStorage wrapper (SSR-safe)
│   └── constants.ts            # TOPICS, LEVELS, TIME_LIMITS, STORAGE_KEYS
│
├── store/
│   └── quizStore.ts            # Zustand store (session state)
│
├── types/
│   └── index.ts                # Question, QuizConfig, AttemptResult, ...
│
└── __tests__/
    ├── quiz-engine.test.ts     # 17 unit tests
    ├── grading.test.ts         # 16 unit tests
    └── questions.test.ts       # 6 unit tests
```

## Cách thêm câu hỏi mới

1. Mở file tương ứng theo mức độ:
   - `data/questions/basic.ts`
   - `data/questions/intermediate.ts`
   - `data/questions/advanced.ts`

2. Thêm một object theo schema sau vào array:

```ts
{
  id: "basic-osi-061",          // PHẢI unique trong toàn bộ ngân hàng
  level: "basic",               // "basic" | "intermediate" | "advanced"
  topic: "osi-model",           // topic ID từ lib/constants.ts
  question: "Câu hỏi của bạn?", // Hỗ trợ markdown: ```code```, **bold**
  options: {
    A: "Đáp án A",
    B: "Đáp án B",
    C: "Đáp án C",
    D: "Đáp án D",
  },
  answer: "C",                  // "A" | "B" | "C" | "D"
  explanation: "Giải thích vì sao C đúng và A/B/D sai.",
  tip: "Mẹo nhớ (tùy chọn)",
}
```

3. Chạy validation:
```bash
node -e "const {validateQuestions, ALL_QUESTIONS} = require('./data/questions'); console.log(validateQuestions(ALL_QUESTIONS))"
```

### Thêm chủ đề mới

1. Thêm topic vào `lib/constants.ts` (trong `TOPICS_BASIC`, `TOPICS_INTERMEDIATE`, hoặc `TOPICS_ADVANCED`)
2. Viết câu hỏi với `topic` tương ứng
3. Rebuild app

## Thư viện sử dụng

| Thư viện | Mục đích |
|---|---|
| `next` 16 | App Router, SSR/CSR |
| `zustand` | State management cho quiz session |
| `recharts` | Biểu đồ kết quả và lịch sử |
| `lucide-react` | Icon set |
| `clsx` | Utility ghép className |
| `vitest` | Unit testing |

## Hướng mở rộng

- **Authentication**: Thêm NextAuth.js để lưu lịch sử theo user
- **Backend/Database**: Migrate từ localStorage sang PostgreSQL (Prisma)
- **Bảng xếp hạng**: Leaderboard so sánh điểm số
- **Chế độ cạnh tranh**: Real-time quiz với nhiều người dùng (WebSocket)
- **AI Giải thích**: Tích hợp LLM để giải thích câu sai chi tiết hơn
- **Import/Export câu hỏi**: Admin panel để quản lý ngân hàng câu hỏi
