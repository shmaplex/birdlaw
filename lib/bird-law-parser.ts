export interface BirdLawStatement {
  line: string;
  index: number;
  type: string;
  valid: boolean;
  message: string;
  details?: string[];
}

export interface BirdLawResult {
  caseNumber: string;
  statements: BirdLawStatement[];
  totalStatements: number;
  validStatements: number;
  errorCount: number;
  success: boolean;
}

export function parseBirdLaw(input: string): BirdLawResult {
  const lines = input.split('\n').filter(line => line.trim());
  const caseNumber = `BL-${Math.floor(Math.random() * 9999) + 1000}`;
  const statements: BirdLawStatement[] = [];
  let errorCount = 0;

  lines.forEach((line, index) => {
    const upper = line.toUpperCase();
    let statement: BirdLawStatement = {
      line,
      index: index + 1,
      type: 'UNKNOWN',
      valid: false,
      message: '',
      details: []
    };

    if (upper.includes('ACCUSE')) {
      const match = line.match(/ACCUSE\s+(\w+)\s+OF\s+(.+)/i);
      if (match) {
        statement = {
          ...statement,
          type: 'ACCUSATION',
          valid: true,
          message: `Formal accusation filed against ${match[1]}`,
          details: [
            `Charge: ${match[2]}`,
            'Case will proceed to trial. Bailiff, bring in the bird!'
          ]
        };
      } else {
        statement = {
          ...statement,
          type: 'ACCUSATION',
          message: 'INVALID SYNTAX: Accusation must follow format ACCUSE [bird] OF [crime]'
        };
        errorCount++;
      }
    } 
    else if (upper.includes('DEFEND')) {
      const match = line.match(/DEFEND\s+(\w+)\s+BECAUSE\s+(.+)/i);
      if (match) {
        statement = {
          ...statement,
          type: 'DEFENSE',
          valid: true,
          message: `Defense mounted for ${match[1]}`,
          details: [
            `Reasoning: ${match[2]}`,
            'Charlie Kelly finds this compelling. Jury is nodding.'
          ]
        };
      } else {
        statement = {
          ...statement,
          type: 'DEFENSE',
          message: 'INVALID SYNTAX: Defense requires BECAUSE clause'
        };
        errorCount++;
      }
    }
    else if (upper.includes('SUMMON')) {
      const match = line.match(/SUMMON\s+(\w+)\s+TO\s+COURT/i);
      if (match) {
        statement = {
          ...statement,
          type: 'SUMMONS',
          valid: true,
          message: `Court summons issued to ${match[1]}`,
          details: ['Bailiff dispatched with birdseed bribe']
        };
      } else {
        statement = {
          ...statement,
          type: 'SUMMONS',
          message: 'INVALID SYNTAX: Must summon TO COURT specifically'
        };
        errorCount++;
      }
    }
    else if (upper.includes('FINE')) {
      const match = line.match(/FINE\s+(\w+)\s+(\d+)\s+WORMS/i);
      if (match) {
        statement = {
          ...statement,
          type: 'FINE',
          valid: true,
          message: `Financial penalty assessed: ${match[2]} worms`,
          details: [
            `Defendant: ${match[1]}`,
            'Payment due within 30 sun-ups'
          ]
        };
      } else {
        statement = {
          ...statement,
          type: 'FINE',
          message: 'INVALID SYNTAX: Fines must be in WORMS currency'
        };
        errorCount++;
      }
    }
    else if (upper.includes('DECLARE')) {
      const match = line.match(/DECLARE\s+(\w+)\s+(.+)/i);
      if (match) {
        statement = {
          ...statement,
          type: 'DECLARATION',
          valid: true,
          message: 'Official declaration made',
          details: [
            `${match[1]} is hereby ${match[2]}`,
            'So it is written in the Great Bird Book'
          ]
        };
      } else {
        statement = {
          ...statement,
          type: 'DECLARATION',
          message: 'INVALID SYNTAX: Declaration requires subject and status'
        };
        errorCount++;
      }
    }
    else if (upper.includes('SETTLE')) {
      const match = line.match(/SETTLE\s+WITH\s+(\w+)\s+FOR\s+(.+)/i);
      if (match) {
        statement = {
          ...statement,
          type: 'SETTLEMENT',
          valid: true,
          message: 'Settlement agreement reached',
          details: [
            `Party: ${match[1]}`,
            `Terms: ${match[2]}`,
            'Case closed. Everyone shake wings/hands.'
          ]
        };
      } else {
        statement = {
          ...statement,
          type: 'SETTLEMENT',
          message: 'INVALID SYNTAX: Settlement requires party and terms'
        };
        errorCount++;
      }
    }
    else {
      statement = {
        ...statement,
        message: "UNRECOGNIZED COMMAND: Charlie doesn't understand this legal jargon"
      };
      errorCount++;
    }

    statements.push(statement);
  });

  return {
    caseNumber,
    statements,
    totalStatements: lines.length,
    validStatements: lines.length - errorCount,
    errorCount,
    success: errorCount === 0
  };
}
