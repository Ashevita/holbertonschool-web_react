// MajorCredits interface
interface MajorCredits {
  credits: number;
  __brand: 'Major';
}

// MinorCredits interface
interface MinorCredits {
  credits: number;
  __brand: 'Minor';
}

// Fonction de somme pour MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'Major',
  };
}

// Fonction de somme pour MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'Minor',
  };
}

// ✅ Exemple de test (facultatif)
const major1: MajorCredits = { credits: 3, __brand: 'Major' };
const major2: MajorCredits = { credits: 4, __brand: 'Major' };
const totalMajor = sumMajorCredits(major1, major2);
console.log('Major Credits:', totalMajor); // { credits: 7, __brand: 'Major' }

const minor1: MinorCredits = { credits: 1, __brand: 'Minor' };
const minor2: MinorCredits = { credits: 2, __brand: 'Minor' };
const totalMinor = sumMinorCredits(minor1, minor2);
console.log('Minor Credits:', totalMinor); // { credits: 3, __brand: 'Minor' }
