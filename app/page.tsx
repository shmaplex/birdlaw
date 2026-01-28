import BirdLawEditor from '@/components/BirdLawEditor';
import GiphyGallery from '@/components/GiphyGallery';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, BookOpen, Gavel } from 'lucide-react';

const quotes = [
  "I'm not saying I agree with it. It's just that bird law in this country—it's not governed by reason.",
  "Let's say you and I go toe-to-toe on bird law and see who comes out the victor.",
  "I know a lot about the law and various other lawyerings.",
  "Well, filibuster...",
  "I'll just regress, because I feel I've made myself perfectly redundant.",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2c1810] to-[#1a0f08] relative overflow-x-hidden">
      {/* Texture overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(244,228,193,0.5)_2px,rgba(244,228,193,0.5)_4px)]" />
      
      <div className="container relative z-10 max-w-6xl px-4 py-8 mx-auto">
        {/* Header */}
        <header className="mb-12 text-center animate-fade-in">
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <span className="text-6xl animate-bounce">🦅</span>
            <h1 className="text-5xl md:text-7xl font-bold text-[#d4af37] font-['Crimson_Text'] tracking-wide drop-shadow-[3px_3px_0_rgba(0,0,0,0.5)]">
              BIRD LAW
            </h1>
            <span className="text-6xl animate-bounce [animation-delay:150ms]">🦅</span>
          </div>
          <p className="text-xl text-[#a89968] italic mb-2">
            Specialist in All Forms of Avian Litigation
          </p>
          <p className="text-lg text-[#a89968] italic">
            Certified by Charlie Kelly, Esq.
          </p>
        </header>

        {/* Rotating Quote */}
        <Card className="mb-12 border-l-4 border-[#d4af37] bg-[#d4af37]/10">
          <CardContent className="py-6">
            <blockquote className="text-lg md:text-xl italic text-[#f4e4c1] text-center">
              "{quotes[0]}"
            </blockquote>
            <p className="text-center text-sm text-[#a89968] mt-2">- Charlie Kelly</p>
          </CardContent>
        </Card>

        {/* GIF Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#d4af37] font-['Crimson_Text'] mb-6 text-center">
            Charlie Kelly's Greatest Legal Moments
          </h2>
          <GiphyGallery />
        </div>

        {/* Features */}
        <div className="grid gap-6 mb-12 md:grid-cols-3">
          <Card className="border-2 border-[#4a4a3a] hover:border-[#d4af37] transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Scale className="w-6 h-6 text-[#d4af37]" />
                Legal Framework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#a89968]">
                A comprehensive syntax for prosecuting, defending, and settling all avian-related legal matters.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#4a4a3a] hover:border-[#d4af37] transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <BookOpen className="w-6 h-6 text-[#d4af37]" />
                Case Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#a89968]">
                Real-time validation and analysis by Charlie Kelly himself. Get instant feedback on your Bird Law cases.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#4a4a3a] hover:border-[#d4af37] transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Gavel className="w-6 h-6 text-[#d4af37]" />
                Worm Currency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#a89968]">
                All fines and settlements are paid in the official Bird Law currency: worms. Fair and legally binding.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Editor */}
        <BirdLawEditor />

        {/* Code Examples */}
        <div className="mt-12">
          <Card className="border-2 border-[#4a4a3a]">
            <CardHeader>
              <CardTitle className="text-3xl font-['Crimson_Text']">
                Bird Law Language Examples
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-[#d4af37] font-bold mb-2 text-lg">Example 1: Simple Accusation</h4>
                <pre className="bg-[#0a0604] p-4 rounded-lg border border-[#4a4a3a] overflow-x-auto">
                  <code className="text-[#7ed321] font-['Courier_Prime']">
{`ACCUSE seagull OF stealing beach snacks
SUMMON seagull TO COURT`}
                  </code>
                </pre>
                <p className="text-[#a89968] text-sm mt-2">
                  A straightforward case of seagull theft with immediate court summons.
                </p>
              </div>

              <div>
                <h4 className="text-[#d4af37] font-bold mb-2 text-lg">Example 2: Defense Case</h4>
                <pre className="bg-[#0a0604] p-4 rounded-lg border border-[#4a4a3a] overflow-x-auto">
                  <code className="text-[#7ed321] font-['Courier_Prime']">
{`ACCUSE hummingbird OF aggressive behavior
DEFEND hummingbird BECAUSE territorial instincts are natural
DECLARE hummingbird INNOCENT`}
                  </code>
                </pre>
                <p className="text-[#a89968] text-sm mt-2">
                  A complete case with accusation, defense, and declaration.
                </p>
              </div>

              <div>
                <h4 className="text-[#d4af37] font-bold mb-2 text-lg">Example 3: Settlement Agreement</h4>
                <pre className="bg-[#0a0604] p-4 rounded-lg border border-[#4a4a3a] overflow-x-auto">
                  <code className="text-[#7ed321] font-['Courier_Prime']">
{`ACCUSE crow OF property damage
FINE crow 300 WORMS
SETTLE WITH crow FOR community service at local park`}
                  </code>
                </pre>
                <p className="text-[#a89968] text-sm mt-2">
                  Mixed penalty approach: monetary fine plus settlement terms.
                </p>
              </div>

              <div>
                <h4 className="text-[#d4af37] font-bold mb-2 text-lg">Example 4: Complex Case</h4>
                <pre className="bg-[#0a0604] p-4 rounded-lg border border-[#4a4a3a] overflow-x-auto">
                  <code className="text-[#7ed321] font-['Courier_Prime']">
{`ACCUSE pigeon OF loitering in commercial district
SUMMON pigeon TO COURT
DEFEND pigeon BECAUSE seeking shelter is not a crime
FINE pigeon 50 WORMS
SETTLE WITH pigeon FOR relocation to designated pigeon zone`}
                  </code>
                </pre>
                <p className="text-[#a89968] text-sm mt-2">
                  A comprehensive case demonstrating the full range of Bird Law procedures.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-[#a89968] italic pb-8">
          <p className="mb-2">"Filibuster. I'm going to object."</p>
          <p className="text-sm">- Charlie Kelly, Bird Law Expert</p>
          
          <div className="flex flex-col items-center gap-3 mt-6">
            <p className="text-sm">
              Think you can draft a better Bird Law constitution?
            </p>
            <a 
              href="https://github.com/shmaplex/birdlaw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f4c430] transition-colors"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5" 
                fill="currentColor"
              >
                <title>GitHub</title>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="not-italic font-bold">Contribute on GitHub</span>
            </a>
          </div>

          <p className="mt-6 text-xs opacity-50">
            Bird Law is not governed by reason. Use at your own risk.
          </p>
        </footer>
      </div>
    </div>
  );
}