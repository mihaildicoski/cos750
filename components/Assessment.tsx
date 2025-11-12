import React, { useState } from 'react';
import Card from './Card';
import CodeBlock from './CodeBlock';
import { ClipboardCheckIcon, CheckCircleIcon, XCircleIcon } from './icons';

const Assessment: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const correctAnswer = 'b';

  const assessmentCode = `
class Pizza {
public:
    virtual ~Pizza() = default;
    virtual void make() = 0;
};

class PlainPizza : public Pizza {
public:
    void make() override { /* Makes plain pizza */ }
};

class ToppingDecorator : public Pizza {
protected:
    Pizza* component;
public:
    ToppingDecorator(Pizza* p) : component(p) {}
    void make() override {
        if (component) {
            component->make();
        }
    }
};

class CheeseDecorator : public ToppingDecorator {
public:
    CheeseDecorator(Pizza* p) : ToppingDecorator(p) {}
    void make() override {
        // Adds cheese...
        addCheese(); 
        
        // What essential line must follow to complete the decoration?
        // __________ MISSING LINE __________
    }
private:
    void addCheese() { /* Logic for adding cheese */ }
};

int main() {
    Pizza* myPizza = new CheeseDecorator(new PlainPizza());
    myPizza->make();
    delete myPizza; // Assume proper memory management
    return 0;
}
  `;

  const assessmentOptions = [
    { id: 'a', text: 'this->make();' },
    { id: 'b', text: 'ToppingDecorator::make();' },
    { id: 'c', text: 'PlainPizza::make();' },
    { id: 'd', text: 'delete component;' },
  ];

  const handleAnswer = (id: string) => {
    setSelectedAnswer(id);
    if (id === correctAnswer) {
      setFeedback("Correct! The decorator must call the base class's implementation to continue the chain of delegation. This ensures the underlying component's `make()` method is eventually called.");
    } else {
      let rationale = '';
      switch(id) {
        case 'a': rationale = "This creates an infinite recursion, a fundamental C++ error. The function would call itself repeatedly, leading to a stack overflow."; break;
        case 'c': rationale = "This breaks the pattern's flexibility. It hardcodes the next object in the chain to be a `PlainPizza`, defeating the purpose of dynamically wrapping any `Pizza` component."; break;
        case 'd': rationale = "This is a memory management error in this context. The decorator's role is to add behavior, not to manage the lifecycle of the object it's wrapping."; break;
      }
      setFeedback(`Incorrect. ${rationale} This indicates a potential misunderstanding of either a core C++ concept or the Decorator pattern's primary goal.`);
    }
  };

  return (
    <Card icon={<ClipboardCheckIcon className="h-6 w-6" />} title="Assessment Item Example">
      <p className="mb-4 text-gray-600">This activity is designed to identify if a student requires intervention on a specific Decorator concept or a fundamental C++ concept.</p>
      <CodeBlock code={assessmentCode} language="cpp" />
      <div className="mt-6">
          <h4 className="font-semibold text-gray-800">Question:</h4>
          <p className="text-gray-600 mb-4">In the `CheeseDecorator::make()` method, which line of code should replace `// __________ MISSING LINE __________` to correctly implement the pattern?</p>
          <div className="space-y-3">
            {assessmentOptions.map(option => (
              <button 
                key={option.id}
                onClick={() => handleAnswer(option.id)}
                disabled={!!selectedAnswer}
                className={`w-full text-left p-3 rounded-md border-2 transition-all duration-200 flex items-center ${
                  selectedAnswer === option.id 
                  ? (option.id === correctAnswer ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')
                  : 'border-gray-300 bg-white hover:bg-gray-50 hover:border-blue-500 disabled:opacity-60 disabled:hover:bg-white'
                }`}
              >
                <span className="font-mono bg-gray-100 text-blue-600 rounded px-2 py-1 mr-4">{option.id.toUpperCase()}</span>
                <code className="text-gray-700">{option.text}</code>
              </button>
            ))}
          </div>
          {feedback && (
            <div className={`mt-4 p-4 rounded-lg flex items-start space-x-3 ${selectedAnswer === correctAnswer ? 'bg-green-50 border border-green-300 text-green-800' : 'bg-red-50 border border-red-300 text-red-800'}`}>
              {selectedAnswer === correctAnswer ? <CheckCircleIcon className="h-6 w-6 text-green-600"/> : <XCircleIcon className="h-6 w-6 text-red-600" />}
              <p className="text-sm">{feedback}</p>
            </div>
          )}
      </div>
    </Card>
  );
};

export default Assessment;