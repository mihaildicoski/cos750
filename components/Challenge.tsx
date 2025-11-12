import React, { useState } from 'react';
import Card from './Card';
import { LightBulbIcon } from './icons';
import { GoogleGenAI } from '@google/genai';

const Challenge: React.FC = () => {
    const [question, setQuestion] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const generateQuestion = async () => {
        setIsLoading(true);
        setError(null);
        setQuestion(null);

        try {
            if (!process.env.API_KEY) {
                throw new Error("API key is not available.");
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: 'Generate a unique and interesting programming problem scenario (without providing the code solution) that requires the use of the Decorator Design Pattern in C++. The problem should be suitable for a university student learning about design patterns. Present it as a clear challenge.',
            });
            setQuestion(response.text);
        } catch (e) {
            console.error(e);
            setError("Sorry, I couldn't generate a question right now. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card icon={<LightBulbIcon className="h-6 w-6" />} title="AI Decorator Challenge">
            <div className="space-y-4">
                <p className="text-gray-600">
                    Test your understanding by solving a dynamically generated problem. Click the button below to get a new challenge from the AI.
                </p>
                
                <button 
                    onClick={generateQuestion} 
                    disabled={isLoading}
                    className="w-full p-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 flex items-center justify-center"
                >
                    {isLoading ? (
                        <>
                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                           </svg>
                           Generating...
                        </>
                    ) : 'Generate New Challenge'}
                </button>

                {error && (
                    <div className="mt-4 p-4 rounded-md bg-red-50 border border-red-200 text-red-700 text-sm">
                        {error}
                    </div>
                )}
                
                {question && !isLoading && (
                     <div className="mt-4 p-4 rounded-md bg-gray-50 border border-gray-200 animate-fade-in">
                        <h4 className="font-bold text-gray-800 mb-2">Your Challenge:</h4>
                        <div className="text-gray-700 whitespace-pre-wrap prose">{question}</div>
                    </div>
                )}
            </div>
        </Card>
    );
};

export default Challenge;