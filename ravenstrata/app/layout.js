import './globals.css';

export const metadata = {
  title: 'Raven Strata — Mission First. Safety Always.',
  description: 'Digital pre-job safety briefings purpose-built for critical infrastructure. Electric utilities, gas operations, and construction. Veteran-owned.',
  keywords: 'safety briefing, tailboard, pre-job briefing, utility safety, electric utility, digital tailboard, JHA, job hazard analysis',
  openGraph: {
    title: 'Raven Strata — Mission First. Safety Always.',
    description: 'Digital pre-job safety briefings purpose-built for critical infrastructure.',
    type: 'website',
    url: 'https://ravenstrata.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-300 font-body noise-bg">
        {children}
      </body>
    </html>
  );
}
