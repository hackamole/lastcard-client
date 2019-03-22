import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
  width: ${props => props.size ? props.size : '3rem'};
  height: auto;
  display: flex;
  align-items: center; 
  flex-wrap: wrap;
  
  h1 {
    font-size: 3rem;
    font-weight: 700;  
    padding-left: 22px;
    margin: 8px 0;
  }
  
  img {
    width: 100%;
  }
  
  svg {
  
  }
`

export default (props) => (
  <Logo size={props.size} className="logo">
    {props.full && (
      <h1>
        the <br/>
        card <br/>
        network <br/>
      </h1>
    )}
    {/*<img src="/static/images/logo.png" alt="" />*/}
    <svg width="100%" height="100%" viewBox="0 0 88 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.48571 0C6.45604 0 4 2.45604 4 5.48571V40.2286C4 43.2583 6.45604 45.7143 9.48572 45.7143H78.5143C81.544 45.7143 84 43.2583 84 40.2286V5.48571C84 2.45604 81.544 0 78.5143 0H9.48571ZM29.9233 8.04148C34.866 8.04148 39.3126 10.1459 43.2632 14.3549L39.78 20.6246C36.9255 16.7396 33.8837 14.7971 30.6546 14.7971C28.4335 14.7971 26.5916 15.5832 25.1289 17.1552C23.7746 18.5998 23.0974 20.3419 23.0974 22.3813C23.0974 24.5907 23.8017 26.4177 25.2102 27.8623C26.5645 29.3069 28.3793 30.0292 30.6546 30.0292C32.9841 30.0292 35.0698 29.2432 36.9117 27.6711C37.5076 27.1188 38.1577 26.4177 38.8619 25.568C39.512 24.6757 40.2162 23.6135 40.9747 22.3813L40.9345 22.318L44.2285 15.5162L44.2203 15.4272L44.2286 15.4369L44.2286 15.5119C47.9332 10.8316 52.7017 8.49147 58.5339 8.49147C63.572 8.49147 67.4725 10.2335 70.2353 13.7175C72.4023 16.4368 73.4857 19.5172 73.4857 22.9588C73.4857 26.8252 72.3481 30.0756 70.0728 32.7099C67.3641 35.769 63.5178 37.2986 58.5338 37.2986C53.6431 37.2986 49.2381 35.2382 45.3187 31.1173L48.4169 24.3551C51.3465 28.4803 54.4751 30.543 57.8025 30.543C60.0236 30.543 61.8655 29.7569 63.3282 28.1849C64.6825 26.7402 65.3597 24.9982 65.3597 22.9588C65.3597 20.7494 64.6555 18.9224 63.2469 17.4778C61.8926 16.0332 60.0778 15.3109 57.8025 15.3109C55.4731 15.3109 53.3874 16.0969 51.5455 17.669C50.9496 18.2213 50.2995 18.9224 49.5952 19.7721C48.9452 20.6644 48.2409 21.7266 47.4825 22.9588L47.5212 23.0199H47.387L44.2286 29.8849L44.2286 29.8282C40.5239 34.5085 35.7555 36.8486 29.9233 36.8486C24.8852 36.8486 20.9847 35.1066 18.2218 31.6226C16.0549 28.9033 14.9714 25.8229 14.9714 22.3813C14.9714 18.5149 16.1091 15.2645 18.3844 12.6302C21.093 9.57106 24.9393 8.04148 29.9233 8.04148ZM44.2286 29.8849L44.238 29.9143L44.2286 29.9032V29.8849Z" fill="url(#paint0_linear)"/>
      </g>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="88" height="53.7143" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear" x1="4" y1="45.7143" x2="84" y2="3.64427e-06" gradientUnits="userSpaceOnUse">
          <stop stopColor="#851299"/>
          <stop offset="1" stopColor="#7471FA"/>
        </linearGradient>
      </defs>
    </svg>

  </Logo>
)
