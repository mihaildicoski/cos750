import React from 'react';
import Card from './Card';
import { TargetIcon, StructureIcon } from './icons';
import UmlDiagram from './UmlDiagram';

const Theory: React.FC = () => {
    const prerequisites = [
        "Inheritance & Polymorphism: Understanding how a derived class inherits from a base class and how `virtual` functions enable runtime polymorphism.",
        "Abstract Base Classes (ABCs): Grasping the concept of interfaces and pure virtual functions (`virtual void func() = 0;`).",
        "Pointers & Composition: Comfort with using pointers to hold references to other objects, forming a 'has-a' relationship.",
        "Basic UML: Ability to read simple UML class diagrams to understand relationships between classes."
    ];
      
    const patternStructure = [
        { title: "Component Interface", text: "An abstract base class that defines the common interface for both the objects we want to wrap (Concrete Components) and the wrappers themselves (Decorators). This ensures decorators can be used transparently in place of the original object." },
        { title: "Concrete Component", text: "The baseline object. It's a class that implements the Component interface and provides the core functionality that we will later add to dynamically." },
        { title: "Decorator Base Class", text: "An abstract class that also implements the Component interface. Crucially, it contains a pointer to a Component object. Its primary role is to delegate calls to the wrapped Component, acting as a base for all specific decorators." },
        { title: "Concrete Decorators", text: "These are the classes that contain the additional responsibilities. They inherit from the Decorator base class and add their specific behavior either before or after delegating the call to the wrapped component." },
    ];

  return (
    <div className="space-y-6">
      <Card icon={<TargetIcon className="h-6 w-6" />} title="C++ Prerequisite Review">
        <p className="mb-4 text-gray-600">To fully grasp the Decorator Pattern, ensure you are comfortable with the following C++ concepts. Module notes provide detailed explanations.</p>
        <ul className="space-y-3 list-disc list-inside text-gray-700">
          {prerequisites.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </Card>

      <Card icon={<StructureIcon className="h-6 w-6" />} title="UML Class Diagram">
        <p className="mb-4 text-gray-600">
            This diagram illustrates the structure of the Decorator pattern. Notice the recursive composition that allows for an unlimited number of decorators to be "stacked" onto a component.
        </p>
        <UmlDiagram />
      </Card>
      
      <Card icon={<StructureIcon className="h-6 w-6" />} title="Pattern Content Structure">
        <p className="mb-6 text-gray-600">The pattern is explained sequentially, focusing on its purest form. Each part builds on the last to form a complete picture.</p>
        <div className="space-y-4">
          {patternStructure.map((item, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-blue-600">{index + 1}. {item.title}</h4>
              <p className="mt-1 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Theory;