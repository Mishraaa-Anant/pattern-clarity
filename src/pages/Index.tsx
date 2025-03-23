
import React, { useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import Math from '@/components/Math';

const Index = () => {
  useEffect(() => {
    // Load MathJax from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    script.async = true;
    script.id = 'MathJax-script';
    document.head.appendChild(script);

    // Configure MathJax
    window.MathJax = {
      tex: {
        inlineMath: [['\\(', '\\)']],
        displayMath: [['\\[', '\\]']],
      },
      options: {
        enableMenu: false
      }
    };

    return () => {
      // Clean up if needed
      const existingScript = document.getElementById('MathJax-script');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Neural Networks for Classification</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Introduction to Neural Networks</CardTitle>
            <CardDescription>Understanding the basics of classification with neural networks</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Neural networks are powerful models for classification tasks. When working with a simple perceptron, 
              the decision boundary is given by <Math formula="w^Tx + b = 0" />, where <Math formula="w" /> is the 
              weight vector and <Math formula="b" /> is the bias.
            </p>
            
            <h3 className="text-xl font-semibold mb-2">Linear Separability</h3>
            <p className="mb-4">
              A dataset is linearly separable if there exists a hyperplane that can separate the classes. 
              However, some problems like XOR are not linearly separable:
            </p>
            
            <Math formula="XOR = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}" block />
            
            <h3 className="text-xl font-semibold mb-2">Multi-Layer Perceptron</h3>
            <p>
              To solve non-linearly separable problems, we use multi-layer networks with activation functions 
              like the sigmoid <Math formula="\sigma(z) = \frac{1}{1 + e^{-z}}" /> or ReLU 
              <Math formula="ReLU(z) = max(0, z)" />.
            </p>
          </CardContent>
        </Card>
        
        <div className="text-center text-gray-600">
          <p>Explore more sections coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
