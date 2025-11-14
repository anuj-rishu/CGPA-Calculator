import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CGPACalculator from './components/CGPACalculator'
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <CGPACalculator />
      </main>
      <Footer />
    </div>
  )
}

export default App
