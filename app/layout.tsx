import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Webhook Router — Smart routing & filtering",
  description: "Route webhooks to specific Discord channels based on content, priority, or source with smart filtering and rate limiting."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d1b2b0be-a4a8-46a9-b1b7-51a606c51aa0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
