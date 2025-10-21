import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>🎛 Uniswap V2 Core</h1>
          <p>Web interface for UniswapV2 core contracts</p>
        </header>

        <div className="card">
          <h2>Contract Overview</h2>
          <div className="contract-info">
            <div className="contract-item">
              <h3>UniswapV2Factory</h3>
              <p>
                The factory contract creates new UniswapV2Pair contracts for any ERC20 token pair.
                It manages the creation and tracking of all trading pairs on the platform.
              </p>
            </div>
            <div className="contract-item">
              <h3>UniswapV2Pair</h3>
              <p>
                The core trading contract that handles token swaps, liquidity provision,
                and price discovery for each token pair.
              </p>
            </div>
            <div className="contract-item">
              <h3>UniswapV2ERC20</h3>
              <p>
                The ERC20 implementation for UniswapV2Pair tokens, representing
                liquidity provider shares in trading pairs.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Key Features</h2>
          <div className="features">
            <div className="feature">
              <span className="feature-icon">🔄</span>
              <h3>Automated Market Making</h3>
              <p>Constant product formula for price discovery and liquidity provision</p>
            </div>
            <div className="feature">
              <span className="feature-icon">💰</span>
              <h3>Liquidity Mining</h3>
              <p>Earn fees by providing liquidity to trading pairs</p>
            </div>
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <h3>Gas Optimized</h3>
              <p>Efficient smart contracts with minimal gas consumption</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🔒</span>
              <h3>Secure & Audited</h3>
              <p>Battle-tested contracts with comprehensive security audits</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🌐</span>
              <h3>Decentralized</h3>
              <p>Fully decentralized protocol with no central authority</p>
            </div>
            <div className="feature">
              <span className="feature-icon">📊</span>
              <h3>Price Oracle</h3>
              <p>Time-weighted average price (TWAP) oracle functionality</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Contract Addresses</h2>
          <p>
            This interface provides information about the Uniswap V2 core contracts.
            The actual contract addresses depend on the network deployment.
          </p>
          <div style={{ marginTop: '20px', padding: '15px', background: '#f8f9fa', borderRadius: '8px' }}>
            <h4>Mainnet Addresses:</h4>
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              <li><strong>Factory:</strong> 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f</li>
              <li><strong>Router:</strong> 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h2>Getting Started</h2>
          <p>
            To interact with Uniswap V2 contracts, you can:
          </p>
          <ul style={{ marginTop: '15px', paddingLeft: '20px', lineHeight: '1.8' }}>
            <li>Deploy your own factory and pair contracts using the provided Solidity code</li>
            <li>Integrate with existing Uniswap V2 deployments on various networks</li>
            <li>Use the contracts to create custom AMM implementations</li>
            <li>Build frontend interfaces that interact with these contracts</li>
          </ul>
        </div>

        <footer className="footer">
          <p>Built with React • Powered by Uniswap V2 Core Contracts</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
