# 💪 FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. Pick a lift from the library,
lock it into today's plan, and watch the week's work add up.

## 📖 Description

FitLog lets you browse a library of 12 workouts pulled live from a REST API, view
full details and instructions for each lift, and build a daily training plan.
Add exercises to **Today's Plan** or **Save for later**, track live metrics
(exercises, minutes, calories), mark lifts as done, and remove them when you're
finished — all persisted locally so your plan survives a page reload.

## 🛠️ Technologies Used

- **Next.js 14** (App Router) — routing, layouts, client/server components
- **React 18** — UI and state management (Context API + hooks)
- **Tailwind CSS** — styling and full responsive design
- **lucide-react** — icon set
- **FitLog REST API** — workout data (`https://api.abcz.workers.dev/api/fitlog`)
- **localStorage** — persists Today's Plan and Saved lists across reloads

## ✨ Key Features

1. **Responsive workout library** — a 3×4 grid on desktop that collapses to 2 and
   1 columns on tablet and mobile, with a loading state while data is fetched.
2. **Detailed workout pages** — two-column layout with key specs, step-by-step
   instructions, and Add to Plan / Save for Later actions with toast feedback.
3. **My Plan dashboard** — live metrics row (Exercises / Minutes / Calories),
   tabbed Today's Plan / Saved views, Mark as Done, and Remove actions.
4. **Sort by Duration, Calories, or Rating** — instantly re-sorts the library grid.
5. **Persistent state** — Today's Plan and Saved lists are stored in
   `localStorage`, so your progress survives a refresh.
6. **Plan cap & guardrails** — Today's Plan is capped at 5 lifts, with the
   "Add to today's plan" button disabling and a toast warning once it's full.
7. **Custom 404 page** and graceful error handling for unknown routes and
   failed requests.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

```bash
npm run build
npm start
```
