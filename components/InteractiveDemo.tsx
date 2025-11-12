import React, { useState, useMemo } from 'react';
import Card from './Card';
import CodeBlock from './CodeBlock';
import { BeakerIcon } from './icons';

interface Topping {
    name: string;
    price: number;
    decorator: string;
    color: string;
}

const availableToppings: Topping[] = [
    { name: 'Cheese', price: 0.75, decorator: 'CheeseDecorator', color: 'bg-yellow-400' },
    { name: 'Mushrooms', price: 0.50, decorator: 'MushroomDecorator', color: 'bg-gray-400' },
    { name: 'Pepperoni', price: 1.00, decorator: 'PepperoniDecorator', color: 'bg-red-500' },
    { name: 'Olives', price: 0.60, decorator: 'OliveDecorator', color: 'bg-black' },
];

const InteractiveDemo: React.FC = () => {
    const [addedToppings, setAddedToppings] = useState<Topping[]>([]);

    const handleAddTopping = (topping: Topping) => {
        setAddedToppings(prev => [...prev, topping]);
    };

    const handleReset = () => {
        setAddedToppings([]);
    };

    const totalPrice = useMemo(() => {
        const basePrice = 5.00;
        return addedToppings.reduce((sum, topping) => sum + topping.price, basePrice);
    }, [addedToppings]);

    const generatedCode = useMemo(() => {
        let code = `// 1. Start with the concrete component\nPizza* myPizza = new PlainPizza();\n`;
        if (addedToppings.length > 0) {
            code += `\n// 2. Wrap it with decorators\n`;
            addedToppings.forEach(topping => {
                code += `myPizza = new ${topping.decorator}(myPizza);\n`;
            });
        }
        code += `\n// 3. Call the method\nmyPizza->make();`;
        return code;
    }, [addedToppings]);

    return (
        <Card icon={<BeakerIcon className="h-6 w-6" />} title="Interactive Pizza Decorator">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Pizza and Controls */}
                <div className="lg:col-span-1 space-y-4">
                    <h3 className="font-semibold text-gray-700">Build Your Pizza</h3>
                    <div className="relative w-48 h-48 mx-auto bg-yellow-200 rounded-full border-8 border-yellow-600 flex items-center justify-center">
                        <p className="text-yellow-800 font-bold">Pizza</p>
                        {addedToppings.map((topping, index) => (
                            <div key={index} className={`absolute w-6 h-6 ${topping.color} rounded-full`} style={{ transform: `rotate(${index * 45}deg) translate(50px)` }} title={topping.name}></div>
                        ))}
                    </div>
                    <div className="space-y-2">
                        {availableToppings.map(topping => (
                            <button key={topping.name} onClick={() => handleAddTopping(topping)} className="w-full text-left p-2 rounded-md border bg-white hover:bg-gray-50 transition-colors">
                                Add {topping.name} (+${topping.price.toFixed(2)})
                            </button>
                        ))}
                    </div>
                     <button onClick={handleReset} className="w-full p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors">
                        Reset Pizza
                    </button>
                </div>

                {/* Receipt and Code */}
                <div className="lg:col-span-2 space-y-6">
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-2">Live Receipt</h3>
                        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg font-mono text-sm">
                           <div className="flex justify-between">
                                <span>Plain Pizza</span>
                                <span>$5.00</span>
                           </div>
                           {addedToppings.map((topping, index) => (
                             <div key={index} className="flex justify-between">
                                <span>+ {topping.name}</span>
                                <span>${topping.price.toFixed(2)}</span>
                            </div>
                           ))}
                           <hr className="my-2 border-gray-300" />
                           <div className="flex justify-between font-bold text-base">
                               <span>Total</span>
                               <span>${totalPrice.toFixed(2)}</span>
                           </div>
                        </div>
                    </div>
                     <div>
                        <h3 className="font-semibold text-gray-700">C++ Code Flow</h3>
                        <p className="text-sm text-gray-600 mb-2">See how each topping wraps the previous object.</p>
                        <CodeBlock code={generatedCode} language="cpp" />
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default InteractiveDemo;