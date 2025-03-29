"use client"
import { useEffect } from 'react';

export default function TestPage() {
  useEffect(() => {
    // ============================================
    // Test 1: Response 1 (Fails)
    // ============================================
    console.log('=== Testing Response 1 ===');
    try {
        const key = 'test';
        const results = { test: 'value' };
        const newHiddenInput = document.createElement('input')
          .setAttribute('type', 'hidden') // ❌ Returns undefined
          .setAttribute('name', key)      // Error: Cannot read property of undefined
          .setAttribute('value', results[key]);
      } catch (error) {
        console.error('Response 1 Error:', error); // Now this will catch the error
      }

    // ============================================
    // Test 2: Response 2 (Works)
    // ============================================
    console.log('=== Testing Response 2 ===');
    try {
      function createAndConfigureElement(tag: string, attributes: Record<string, string>) {
        const element = document.createElement(tag);
        for (const [k, v] of Object.entries(attributes)) {
          element.setAttribute(k, v);
        }
        return element;
      }

      const newHiddenInput = createAndConfigureElement('input', {
        type: 'hidden',
        name: 'test',
        value: 'value',
      });

      console.log('Response 2 Success:', newHiddenInput); // Screenshot 2: Console log
      document.body.appendChild(newHiddenInput); // Append to DOM for inspection
    } catch (error) {
      console.error('Response 2 Error:', error);
    }
  }, []);

  return (
    <div>
      <h1>Code Validation Tests</h1>
      <p>Check browser console and DOM for results.</p>
    </div>
  );
}