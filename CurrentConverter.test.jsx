import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CurrencyConverter from './src/components/CurrencyConverter';

// create a describe test block
describe('MyComponent', () => {
  // create an it test block
  it('renders the component with the correct text', () => {
    // render the component
    render(
        <CurrencyConverter.Provider value={{
            fromCurrency: 'USD',
            toCurrency: 'EUR',  
        }}>
              <CurrencyConverter />
            </CurrencyConverter.Provider>
        )
    // Act

    // Assert
    expect(screen.getByPlaceholderTexT('Enter amount')).toBeInTheDocument();
    expect(screen.getByText('USD')).toBeInTheDocument();
    expect(screen.getByText('EUR')).toBeInTheDocument();
    expect(screen.getByText('=')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it("should show the correct amount for given input", () => {
    // Arrange: Render the component with a specific amount
    render(
        <CurrencyConverter.Provider value={{
            fromCurrency: 'USD',
            toCurrency: 'EUR',  
        }}>
              <CurrencyConverter />
            </CurrencyConverter.Provider>
        );

    // Act: Simulate user input
    //e-target.value
    const inputField = screen.getByPlaceholderText('Enter amount');
    fireEvent.change('inputField', { target: { value: '10' }})

    // Assert: Check that the output is correct
    expect(screen.getByText('20')).toBeInTheDocument(); // Assuming the conversion logic is amount * 2
  });   

   it("should reset the output to default", () => {
    // Arrange: Render the component with a specific amount
    render(
        <CurrencyConverter.Provider value={{
            fromCurrency: 'USD',
            toCurrency: 'EUR',  
        }}>
              <CurrencyConverter />
            </CurrencyConverter.Provider>
    );

    // Act: Simulate user input
    //e-target.value
    const inputField = screen.getByPlaceholderText('Enter amount');
    fireEvent.change(input, { target: { value: '' } });

    // Assert: Check that the output is correct
    expect(screen.getByText('1')).toBeInTheDocument(); // Assuming the conversion logic is amount * 2
  });   
})