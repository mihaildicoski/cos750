import React from 'react';

const UmlDiagram: React.FC = () => {
    return (
        <div className="flex justify-center bg-gray-50 rounded-lg border border-gray-200 p-4">
            <svg width="100%" height="auto" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" className="font-sans text-gray-700">
                <defs>
                    <marker id="uml-arrow-hollow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="white" stroke="#6b7280" strokeWidth="1" />
                    </marker>
                    <marker id="uml-diamond-hollow" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                        <path d="M 5 0 L 10 5 L 5 10 L 0 5 z" fill="white" stroke="#6b7280" strokeWidth="1" />
                    </marker>
                    <style>
                        {`
                        .uml-class { fill: #f9fafb; stroke: #d1d5db; stroke-width: 1; }
                        .uml-text-title { font-weight: bold; text-anchor: middle; font-size: 14px; }
                        .uml-text-interface { font-style: italic; text-anchor: middle; font-size: 12px; }
                        .uml-text-field { font-family: monospace; text-anchor: middle; font-size: 12px; }
                        .uml-text-method { font-family: monospace; text-anchor: middle; font-size: 12px; }
                        .uml-line { stroke: #6b7280; stroke-width: 1; }
                        .uml-line-dashed { stroke: #6b7280; stroke-width: 1; stroke-dasharray: 4, 4; }
                        `}
                    </style>
                </defs>

                {/* Classes */}
                <g id="component">
                    <rect x="225" y="10" width="150" height="70" className="uml-class" />
                    <text x="300" y="30" className="uml-text-interface">&lt;&lt;interface&gt;&gt;</text>
                    <text x="300" y="48" className="uml-text-title">Component</text>
                    <line x1="225" y1="58" x2="375" y2="58" className="uml-line" />
                    <text x="300" y="72" className="uml-text-method">operation()</text>
                </g>
                
                <g id="concrete-component">
                    <rect x="20" y="150" width="150" height="70" className="uml-class" />
                    <text x="95" y="175" className="uml-text-title">ConcreteComponent</text>
                    <line x1="20" y1="185" x2="170" y2="185" className="uml-line" />
                    <text x="95" y="205" className="uml-text-method">operation()</text>
                </g>

                <g id="decorator">
                    <rect x="225" y="150" width="150" height="80" className="uml-class" />
                    <text x="300" y="170" className="uml-text-title">Decorator</text>
                    <line x1="225" y1="180" x2="375" y2="180" className="uml-line" />
                    <text x="300" y="198" className="uml-text-field">- component: Component</text>
                    <line x1="225" y1="205" x2="375" y2="205" className="uml-line" />
                    <text x="300" y="222" className="uml-text-method">operation()</text>
                </g>
                
                <g id="concrete-decorator-a">
                    <rect x="150" y="300" width="150" height="80" className="uml-class" />
                    <text x="225" y="325" className="uml-text-title">ConcreteDecoratorA</text>
                    <line x1="150" y1="335" x2="300" y2="335" className="uml-line" />
                    <text x="225" y="353" className="uml-text-field">- addedState</text>
                    <line x1="150" y1="358" x2="300" y2="358" className="uml-line" />
                    <text x="225" y="372" className="uml-text-method">operation()</text>
                </g>

                <g id="concrete-decorator-b">
                    <rect x="320" y="300" width="150" height="70" className="uml-class" />
                    <text x="395" y="325" className="uml-text-title">ConcreteDecoratorB</text>
                    <line x1="320" y1="335" x2="470" y2="335" className="uml-line" />
                    <text x="395" y="355" className="uml-text-method">operation()</text>
                </g>
                
                {/* Relationships */}
                {/* ConcreteComponent -> Component (Implements) */}
                <path d="M 95 150 L 95 90 L 300 90 L 300 80" fill="none" className="uml-line-dashed" markerEnd="url(#uml-arrow-hollow)" />
                
                {/* Decorator -> Component (Implements) */}
                <path d="M 300 150 L 300 80" fill="none" className="uml-line-dashed" markerEnd="url(#uml-arrow-hollow)" />

                {/* Decorator -> Component (has-a) */}
                <path d="M 375 190 L 450 190 L 450 45 L 375 45" fill="none" className="uml-line" markerStart="url(#uml-diamond-hollow)" />
                
                {/* ConcreteDecorators -> Decorator (Inherits) */}
                <path d="M 225 300 L 225 250 L 395 250 L 395 300" fill="none" className="uml-line" />
                <path d="M 310 250 L 310 230" fill="none" className="uml-line" markerEnd="url(#uml-arrow-hollow)" />
            </svg>
        </div>
    );
};

export default UmlDiagram;