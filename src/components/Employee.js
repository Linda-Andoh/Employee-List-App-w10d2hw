import React from "react"
import imageTwo from "./images/two.jpg";

export default function Employee (props) {
  return (
    <>
      <div>
      <h2>Samuel Jones</h2>
      <img src={imageTwo}></img> 
      <h3>VP of Marketing</h3>
      <h4>124-481-7733</h4>
      <h4>JonesSam43@gmail.com</h4>
      </div>
    </>
  )
}