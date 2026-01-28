'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { parseBirdLaw, type BirdLawResult } from '@/lib/bird-law-parser';
import { Scale, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

const examples = [
  {
    title: "Hummingbird Harassment",
    code: `ACCUSE hummingbird OF harassment
DEFEND hummingbird BECAUSE it was protecting its territory
SETTLE WITH hummingbird FOR shared feeder access`
  },
  {
    title: "Seagull Theft",
    code: `ACCUSE seagull OF stealing french fries
SUMMON seagull TO COURT
FINE seagull 500 WORMS`
  },
  {
    title: "Crow Surveillance",
    code: `ACCUSE crow OF illegal surveillance
DEFEND crow BECAUSE birds have constitutional rights
DECLARE crow INNOCENT`
  },
  {
    title: "Pigeon Loitering",
    code: `ACCUSE pigeon OF loitering
FINE pigeon 100 WORMS
DECLARE pigeon GUILTY of public nuisance`
  }
];

export default function BirdLawEditor() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState<BirdLawResult | null>(null);

  const executeCode = () => {
    if (!code.trim()) {
      return;
    }
    const parsed = parseBirdLaw(code);
    setResult(parsed);
  };

  const loadExample = (exampleCode: string) => {
    setCode(exampleCode);
    setResult(null);
  };

  return (
    <div className="space-y-6">
      {/* Syntax Guide */}
      <Card className="border-2 border-dashed border-[#a89968]">
        <CardHeader>
          <CardTitle className="text-3xl">Bird Law Syntax Guide</CardTitle>
          <CardDescription className="text-base">
            Charlie Kelly's Official Legal Framework for Avian Litigation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 font-['Courier_Prime'] text-sm">
            <div className="flex items-start gap-3">
              <code className="bg-black/30 px-2 py-1 rounded text-[#7ed321] flex-shrink-0">
                ACCUSE [bird] OF [crime]
              </code>
              <span className="text-[#a89968]">File formal charges against a bird</span>
            </div>
            <div className="flex items-start gap-3">
              <code className="bg-black/30 px-2 py-1 rounded text-[#7ed321] flex-shrink-0">
                DEFEND [bird] BECAUSE [reason]
              </code>
              <span className="text-[#a89968]">Provide legal defense</span>
            </div>
            <div className="flex items-start gap-3">
              <code className="bg-black/30 px-2 py-1 rounded text-[#7ed321] flex-shrink-0">
                SUMMON [bird] TO COURT
              </code>
              <span className="text-[#a89968]">Issue a court summons</span>
            </div>
            <div className="flex items-start gap-3">
              <code className="bg-black/30 px-2 py-1 rounded text-[#7ed321] flex-shrink-0">
                FINE [bird] [amount] WORMS
              </code>
              <span className="text-[#a89968]">Impose financial penalty</span>
            </div>
            <div className="flex items-start gap-3">
              <code className="bg-black/30 px-2 py-1 rounded text-[#7ed321] flex-shrink-0">
                DECLARE [bird] [status]
              </code>
              <span className="text-[#a89968]">Make official declaration</span>
            </div>
            <div className="flex items-start gap-3">
              <code className="bg-black/30 px-2 py-1 rounded text-[#7ed321] flex-shrink-0">
                SETTLE WITH [bird] FOR [terms]
              </code>
              <span className="text-[#a89968]">Reach settlement agreement</span>
            </div>
          </div>

          {/* Examples */}
          <div className="mt-6">
            <h4 className="text-[#d4af37] font-bold mb-3">Click to load examples:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {examples.map((example, idx) => (
                <div
                  key={idx}
                  onClick={() => loadExample(example.code)}
                  className="bg-black/30 p-3 rounded border-l-4 border-[#d4af37] cursor-pointer hover:bg-[#d4af37]/10 transition-all hover:translate-x-1"
                >
                  <div className="text-[#d4af37] font-bold text-sm mb-1">{example.title}</div>
                  <pre className="text-[#7ed321] text-xs overflow-hidden whitespace-pre-wrap">
                    {example.code.split('\n')[0]}...
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Editor */}
      <Card className="border-2 border-[#d4af37]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="w-6 h-6" />
            Bird Law Case Editor
          </CardTitle>
          <CardDescription>
            Enter your Bird Law case below and execute to see Charlie Kelly's expert analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="ACCUSE seagull OF stealing my sandwich&#10;FINE seagull 200 WORMS"
            className="min-h-[200px] font-mono text-base"
          />
          <Button 
            onClick={executeCode} 
            className="w-full text-lg py-6"
            disabled={!code.trim()}
          >
            <Scale className="w-5 h-5 mr-2" />
            Execute Bird Law
          </Button>
        </CardContent>
      </Card>

      {/* Output */}
      {result && (
        <Card className={`border-2 ${result.success ? 'border-[#7ed321]' : 'border-red-500'}`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {result.success ? (
                <CheckCircle2 className="w-6 h-6 text-[#7ed321]" />
              ) : (
                <XCircle className="w-6 h-6 text-red-500" />
              )}
              Bird Law Case Analysis
            </CardTitle>
            <CardDescription>
              Case #{result.caseNumber} | Presiding: The Honorable Charlie Kelly
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Statements */}
            <div className="space-y-3">
              {result.statements.map((stmt, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg border-l-4 ${
                    stmt.valid ? 'border-[#7ed321] bg-[#7ed321]/5' : 'border-red-500 bg-red-500/5'
                  }`}
                >
                  <div className="flex items-start gap-2 mb-2">
                    {stmt.valid ? (
                      <CheckCircle2 className="w-5 h-5 text-[#7ed321] flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <div className="font-['Courier_Prime'] text-[#7ed321] mb-1">
                        [{stmt.index}] {stmt.line}
                      </div>
                      <div className={`font-bold ${stmt.valid ? 'text-[#7ed321]' : 'text-red-500'}`}>
                        {stmt.message}
                      </div>
                      {stmt.details && stmt.details.length > 0 && (
                        <div className="mt-2 space-y-1 text-[#a89968] text-sm">
                          {stmt.details.map((detail, i) => (
                            <div key={i} className="ml-4">→ {detail}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="border-t-2 border-[#4a4a3a] pt-4 mt-6">
              <h4 className="text-[#d4af37] font-bold text-xl mb-3 font-['Crimson_Text']">
                📊 Case Summary
              </h4>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#f4e4c1]">{result.totalStatements}</div>
                  <div className="text-sm text-[#a89968]">Total Statements</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#7ed321]">{result.validStatements}</div>
                  <div className="text-sm text-[#a89968]">Valid Procedures</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">{result.errorCount}</div>
                  <div className="text-sm text-[#a89968]">Errors</div>
                </div>
              </div>
              
              <div className="bg-black/30 p-4 rounded-lg italic text-[#a89968]">
                {result.success ? (
                  <>
                    ✅ <strong className="text-[#7ed321]">CASE SUCCESSFULLY PROCESSED</strong>
                    <br />
                    Charlie Kelly approves this legal work.
                    <br />
                    Court is adjourned. Time for milk steak.
                  </>
                ) : (
                  <>
                    ⚠️ <strong className="text-red-500">CASE HAS ERRORS</strong>
                    <br />
                    Charlie Kelly suggests reviewing Bird Law syntax.
                    <br />
                    Maybe hire a specialist? Like Charlie Kelly.
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
