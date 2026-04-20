# HerPCOS Portal — Agent Rules

## Tech Stack
- Next.js 15 App Router, React 19, TypeScript
- Tailwind CSS (light-mode only design — pink/white/purple palette)
- No UI library (no shadcn, no Radix, no MUI)

## Rules

### 1. Always use `<Input>` and `<Textarea>` components for form fields
Never use raw `<input>` or `<textarea>` HTML elements directly.
Always import and use the reusable components:

```tsx
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
```

These components have `bg-white text-gray-900 placeholder:text-gray-400` baked in.
Using raw elements risks invisible text in dark-mode OS environments.

### 2. Never use dynamic Tailwind class names
Tailwind's JIT scanner cannot detect dynamically constructed class strings.

```tsx
// NEVER — Tailwind will not generate these classes
`bg-${color}-100`
`text-${color}-600`

// ALWAYS — write full class names statically
"bg-pink-100"
"text-pink-600"
```

If you need per-item variation, write each element out explicitly with its own static classes.

### 3. No dark mode
globals.css intentionally has no dark mode override. Do not add one.
The app is light-mode only. All colors are explicit Tailwind utilities.

### 4. No blog posts in MVP
There are no blog routes. Do not create any.
The SEO content pages (/pcos-*) are standalone guides, not blog posts.

### 5. Page structure
- New routes: app/<route>/page.tsx
- Server components by default; add "use client" only when hooks/interactivity needed
- Per-page SEO: export metadata from each page
- Root background: className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50"
- Max width: max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10
- Navbar and Footer are in the root layout — do not add them to individual pages
