import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Cost Budget Guardian — Prevent AI Cost Overruns",
  description: "Sets spending limits per prompt template, auto-pauses expensive prompts, sends cost alerts before budget breach. Built for AI product managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="11850f93-0427-44be-b423-c6f287d70903"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
