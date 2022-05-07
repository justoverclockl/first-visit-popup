# First Visit Popup

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/justoverclock/first-visit-popup.svg)](https://packagist.org/packages/justoverclock/first-visit-popup) [![Total Downloads](https://img.shields.io/packagist/dt/justoverclock/first-visit-popup.svg)](https://packagist.org/packages/justoverclock/first-visit-popup)

A [Flarum](http://flarum.org) extension. First Visit Popup

![chrome_DxgKJVdzJ3](https://user-images.githubusercontent.com/79002016/167265823-de91bffc-5675-4608-a355-ddf5f00d6740.gif)

## Usage

Fill the extension settings with your own html and css... for example

```html

<style>
.offerBtn {
  background-color: rgb(56, 154, 220);
  box-shadow: inset 0px 5px 0px 0px rgba(255, 255, 255, 0.15);
  width: 420px;
  height: 100px;
  z-index: 82;
  display: block;
  position: relative;
  overflow: hidden;
  font-family: 'Raleway', sans;
  cursor: pointer;
  transition: all .2s;
}

.offerBtn:hover {
  background: #3CBD45;
}
.offerBtn:active {
  -webkit-box-shadow: 0px 0px 15px 0px rgba(27,199,0,1);
-moz-box-shadow: 0px 0px 15px 0px rgba(27,199,0,1);
box-shadow: 0px 0px 15px 0px rgba(27,199,0,1);
}
.offerBtn img {
  height: 80px;
  top: 10px;
  position: absolute;
  left: -5px;
  opacity: .15;
}

.offerBtn span {
  position: absolute;
}

.btnIcon {
  top: 24px;
  left: 50px;
}

.st0 {
  fill: #FFFFFF;
}

.st1 {
  fill: #FFFFFF;
  fill-opacity: 0.5;
}

.text1,
.text2,
.text3 {
  color: #FFF;
  font-weight: 800;
}

.offerBtn:before {
  content: '';
  display: block;
  height: 500px;
  width: 500px;
  position: absolute;
  background-color: rgba(255, 255, 255, .15);
  transform: rotate(-45deg);
  top: -200px;
  left: -330px;
  transition: all .2s;
}

.offerBtn:hover:before {
  left: -300px;
}

.text1 {
  font-size: 36px;
  line-height: 1em;
  left: 25px;
  top: 13px;
}

.text2 {
  font-weight: 300;
  right: 42px;
  bottom: 10px;
}

.text3 {
  top: -5px;
  right: 40px;
  font-size: 70px;
  font-family: 'Open Sans', sans;
  font-weight: 400;
  letter-spacing: -4px;
}

.text4 {
  transform: rotate(-90deg);
  right: -39px;
  top: 37px;
  background: yellow;
  padding: 7px 10px;
  font-size: 11px;
  text-transform: uppercase;
}
.maindiv {
display:flex;
justify-content: center;
align-items: center;
margin-bottom: 2rem;
}
</style>
<div class="maindiv">
<a class="offerBtn">
  <img src="https://www.lawgeex.com/wp-content/themes/Lawgeex2015-child/images/contracticon.svg" alt="icon">
  <span class="text1">Get Your<br/>Full Report</span>
  <span class="text2">click here</span>
  <span class="text3">$20</span>
  <span class="text4">Special Offer</span>
</a>
</div>

```


## Installation

Install with composer:

```sh
composer require justoverclock/first-visit-popup:"*"
```

## Updating

```sh
composer update justoverclock/first-visit-popup:"*"
php flarum cache:clear
```

