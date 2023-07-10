import React from 'react'
import './GithubLinks.css'



export default function GithubLinks() {
  return (
    <div className='github-container'>
      <div className='github-parent'>
        <div className='title'>
          Recent <span className='title1'>Projects</span>
        </div>
      <div className= 'github-grid'>
      <a href="https://github.com/Dmac500/The-Magnitudinal-Impact-of-Twitter-on-Cryptocurrency">
      <div className='link1'>
       <h6>The Magnitudinal Impact of Twitter on Cryptocurrency </h6>
       <img src={require('../../assets/Home/cryptocurrency-twitter.jpg')} alt= 'no internet connection'/>
      </div>
      </a>
      <a href="https://solscan.io/token/B1Yqn992SNem2yeEiSKsnWELCq3J8JcprZyf17E3Yfp2">
      <div className='link2'>
      <h6> Making of a Crypto Token</h6>
        <img src={require('../../assets/Home/solCoin.png')} alt= 'no internet connection'/>
        
      </div>
      </a>
      <a href="https://github.com/Dmac500/Movie-app">
      <div className='link3'>
      <h6> Movie app </h6>
       <img src={require('../../assets/Home/Popcorn.jpg')} alt= 'no internet connection'/>
        
      </div>
      </a>
      <a href="https://github.com/Dmac500/music_bot">
      <div className='link4'>
      
        <h6> UFC Discord bot</h6>
        <img src={require('../../assets/Home/lilBot.png')} alt= 'no internet connection'/>
        
      </div>
      </a>



      </div>
      </div>
    </div>
  )
}
