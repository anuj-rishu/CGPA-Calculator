import React, { useState } from "react";

const gradePoints = {
  "O": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6,
  "C": 5.5,
  "W": 0,
  "F": 0,
  "Ab": 0,
  "I": 0,
  "*": 0
};

const grades = ["O", "A+", "A", "B+", "B", "C", "W", "F", "Ab", "I", "*"];

const CGPACalculator = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, credit: "", grade: "O" },
    { id: 2, credit: "", grade: "O" },
    { id: 3, credit: "", grade: "O" },
    { id: 4, credit: "", grade: "O" },
    { id: 5, credit: "", grade: "O" },
    { id: 6, credit: "", grade: "O" },
  ]);
  const [result, setResult] = useState(null);

  const handleCreditChange = (id, value) => {
    setSubjects(subjects.map(sub => 
      sub.id === id ? { ...sub, credit: value } : sub
    ));
  };

  const handleGradeChange = (id, value) => {
    setSubjects(subjects.map(sub => 
      sub.id === id ? { ...sub, grade: value } : sub
    ));
  };

  const addSubject = () => {
    const newId = subjects.length + 1;
    setSubjects([...subjects, { id: newId, credit: "", grade: "O" }]);
  };

  const calculate = () => {
    let points = 0;
    let sumCredits = 0;

    subjects.forEach(subject => {
      const credit = subject.credit === "" ? 0 : Number(subject.credit);
      sumCredits += credit;
      const gradePt = gradePoints[subject.grade];
      points += credit * gradePt;
    });

    const gpa = points / sumCredits;
    const percent = (gpa * 10).toFixed(0);
    
    setResult({ gpa: gpa.toFixed(2), percent });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const reset = () => {
    setSubjects([
      { id: 1, credit: "", grade: "O" },
      { id: 2, credit: "", grade: "O" },
      { id: 3, credit: "", grade: "O" },
      { id: 4, credit: "", grade: "O" },
      { id: 5, credit: "", grade: "O" },
      { id: 6, credit: "", grade: "O" },
    ]);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0C0F1B] via-[#18202e] to-[#0C0F1B] py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Result Display */}
        {result && (
          <div className="mb-8 bg-gradient-to-r from-[#257093]/10 to-[#18a0d8]/10 backdrop-blur-sm border border-[#257093]/30 rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Your CGPA
            </h2>
            <div className="text-center mb-6">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#257093] via-[#18a0d8] to-[#257093] bg-clip-text text-transparent">
                {result.gpa}
              </div>
              <div className="text-lg text-[#666668] mt-2">
                Grade Point Average
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-[#666668]/20 rounded-full h-6 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#257093] to-[#18a0d8] transition-all duration-1000 ease-out flex items-center justify-center text-white text-sm font-semibold"
                style={{ width: `${result.percent}%` }}
              >
                {result.percent}%
              </div>
            </div>
          </div>
        )}

        {/* Calculator Card */}
        <div className="bg-gradient-to-br from-[#18202e] to-[#0C0F1B] border border-[#666668]/20 rounded-2xl p-6 md:p-8 shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
            CGPA Calculator
          </h1>
          <p className="text-center text-[#666668] mb-8">
            Calculate your Grade Point Average for SRMIST
          </p>

          {/* Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#666668]/30">
                  <th className="text-left py-3 px-2 text-[#257093] font-semibold">#</th>
                  <th className="text-left py-3 px-2 text-[#257093] font-semibold">Credits</th>
                  <th className="text-left py-3 px-2 text-[#257093] font-semibold">Grade</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject) => (
                  <tr key={subject.id} className="border-b border-[#666668]/10">
                    <td className="py-3 px-2 text-white">{subject.id}.</td>
                    <td className="py-3 px-2">
                      <input
                        type="number"
                        min="0"
                        max="10"
                        value={subject.credit}
                        onChange={(e) => handleCreditChange(subject.id, e.target.value)}
                        className="w-full bg-[#0C0F1B] border border-[#666668]/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#257093] transition-colors"
                        placeholder="0"
                      />
                    </td>
                    <td className="py-3 px-2">
                      <select
                        value={subject.grade}
                        onChange={(e) => handleGradeChange(subject.id, e.target.value)}
                        className="w-full bg-[#0C0F1B] border border-[#666668]/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#257093] transition-colors cursor-pointer"
                      >
                        {grades.map(grade => (
                          <option key={grade} value={grade}>{grade}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={addSubject}
              className="flex-1 bg-[#666668]/20 hover:bg-[#666668]/30 text-white px-6 py-3 rounded-lg font-medium transition-all border border-[#666668]/30"
            >
              Add More Subjects
            </button>
            
            <button
              onClick={calculate}
              className="flex-1 bg-gradient-to-r from-[#257093] to-[#18a0d8] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-[#257093]/30 transition-all"
            >
              {result ? 'Recalculate CGPA' : 'Calculate CGPA'}
            </button>
            
            {result && (
              <button
                onClick={reset}
                className="flex-1 bg-[#666668]/20 hover:bg-[#666668]/30 text-white px-6 py-3 rounded-lg font-medium transition-all border border-[#666668]/30"
              >
                Reset Calculator
              </button>
            )}
          </div>

          {/* Grade Info */}
          <div className="mt-8 p-4 bg-[#0C0F1B]/50 rounded-xl border border-[#666668]/20">
            <h3 className="text-lg font-semibold text-[#257093] mb-3">Grade Points</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {Object.entries(gradePoints).map(([grade, points]) => (
                <div key={grade} className="flex justify-between text-sm">
                  <span className="text-white font-medium">{grade}:</span>
                  <span className="text-[#666668]">{points}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CGPACalculator;
