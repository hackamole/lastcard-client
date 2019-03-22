import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
  width: ${props => props.size ? props.size : '3rem'};
  display: flex;
  align-items: center;
  height: 100%;
`

export default (props) => (
  <Logo size={props.size} className="logo">
    <svg width="183" height="108" viewBox="0 0 183 108" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C9.37258 0 4 5.37258 4 12V88C4 94.6274 9.37259 100 16 100H167C173.627 100 179 94.6274 179 88V12C179 5.37258 173.627 0 167 0H16ZM60.7072 17.5907C71.5193 17.5907 81.2463 22.1942 89.8882 31.4012L82.2687 45.1163C76.0246 36.6179 69.3707 32.3687 62.307 32.3687C57.4483 32.3687 53.4192 34.0882 50.2196 37.5271C47.257 40.6872 45.7756 44.4978 45.7756 48.9591C45.7756 53.7922 47.3162 57.7888 50.3973 60.9488C53.3599 64.1089 57.3298 65.6889 62.307 65.6889C67.4027 65.6889 71.9651 63.9695 75.9943 60.5306C77.2978 59.3223 78.7199 57.7888 80.2604 55.9299C81.6825 53.9781 83.223 51.6545 84.8821 48.9591L84.7943 48.8205L91.9999 33.9417L91.982 33.747L92 33.7682L92 33.9323C100.104 23.6942 110.535 18.5751 123.293 18.5751C134.314 18.5751 142.846 22.3858 148.89 30.0071C153.63 35.9555 156 42.6939 156 50.2223C156 58.6802 153.511 65.7904 148.534 71.5528C142.609 78.2448 134.195 81.5907 123.293 81.5907C112.594 81.5907 102.958 77.0835 94.3847 68.069L101.162 53.2768C107.57 62.3007 114.414 66.8127 121.693 66.8127C126.552 66.8127 130.581 65.0933 133.78 61.6544C136.743 58.4943 138.224 54.6836 138.224 50.2223C138.224 45.3893 136.684 41.3927 133.603 38.2326C130.64 35.0725 126.67 33.4925 121.693 33.4925C116.597 33.4925 112.035 35.212 108.006 38.6509C106.702 39.8591 105.28 41.3927 103.74 43.2516C102.318 45.2034 100.777 47.527 99.1179 50.2223L99.2027 50.3561H98.909L92 65.3732L92 65.2491C83.8961 75.4873 73.4651 80.6064 60.7072 80.6064C49.6863 80.6064 41.154 76.7957 35.1103 69.1743C30.3701 63.226 28 56.4876 28 48.9591C28 40.5013 30.4886 33.3911 35.4658 27.6286C41.391 20.9367 49.8048 17.5907 60.7072 17.5907ZM92 65.3739L92.0206 65.4375L92 65.4133V65.3739Z" fill="white"/>
      </g>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="183" height="108" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
      </defs>
    </svg>
  </Logo>
)
