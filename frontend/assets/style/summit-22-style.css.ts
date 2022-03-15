import { css } from 'lit';
export default css`
* {
  box-sizing: border-box;
}

svg {
  height: auto !important;
}

/* color variables */
/* text	variables */
@font-face {
  font-family: "Repo ExtraBold";
  font-style: normal;
  font-weight: normal;
  src: local("Repo ExtraBold"), url("Repo-ExtraBold.woff") format("woff");
}
@font-face {
  font-family: "Repo ExtraBlack";
  font-style: normal;
  font-weight: normal;
  src: local("Repo ExtraBlack"), url("Repo-ExtraBlack.woff") format("woff");
}
@font-face {
  font-family: "Repo Medium";
  font-style: normal;
  font-weight: normal;
  src: local("Repo Medium"), url("Repo-Medium.woff") format("woff");
}
.bikeFont {
  font-family: Repo ExtraBold, sans-serif !important;
  color: #ffffff;
  text-shadow: 1px 1px 1px #0499c5;
}

.h2-text {
  font-size: 1.2rem;
  text-align: center;
  margin: 0.25rem auto;
}

.h3-text {
  font-size: 0.9rem;
  text-align: center;
  margin: 0 auto 0.5rem;
}

/* Main content */
html {
  height: 100%;
  position: relative;
  overflow: hidden;
}

body {
  margin: 0;
  padding: 0;
  background-image: linear-gradient(45deg, #79c4c6, #0499c5, #79c4c6);
  font-family: Repo ExtraBold, sans-serif;
  font-size: 16px;
  height: 100%;
  position: relative;
  overflow: hidden;
}

#game-wrapper {
  display: flex;
  flex-direction: column;
  border: black solid 1px;
  min-width: 320px;
  max-width: 600px;
  margin: 0 auto;
  justify-content: space-between;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.game-wrapper-spotlight {
  background-image: url("../img/spotlight.svg");
  background-repeat: no-repeat !important;
  background-size: contain;
}

.main-btn {
  font-family: Repo ExtraBold, sans-serif;
  padding: 0.5rem 2rem;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.main-btn-footer {
  display: block;
  background-image: url("../img/next-button.svg");
  background-repeat: no-repeat !important;
  background-size: contain;
  width: 160px;
  height: 55px;
  text-align: center;
  padding: 0.5rem;
  margin: 1rem auto 2rem;
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
  text-transform: uppercase;
}

.header-area {
  display: block;
  position: relative;
  margin-top: 0.5rem;
}

#grid-wrapper {
  display: grid;
  grid-template-rows: 200px 1fr;
  grid-template-columns: 1fr;
  align-items: stretch;
  justify-content: space-between;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.header-block {
  background-image: url(../img/header-block.svg);
  background-repeat: no-repeat !important;
  background-position: top center;
  background-size: contain;
  width: 100%;
  height: auto;
  text-align: center;
  color: #ffffff;
  margin: 0.5rem auto;
}
.header-block h2 {
  font-size: 1.2rem;
  line-height: 1rem;
  padding: 2.5rem 0 0 0;
  margin: 0;
  text-shadow: 1px 1px 1px #142C4D;
}
.header-block h3 {
  font-size: 0.9rem;
  line-height: 0.75rem;
  text-shadow: 1px 1px 1px #142C4D;
}

.sensorTest {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 1rem;
  gap: 1rem;
}

.sensorButtons {
  display: flex;
  border: #ffffff 2px solid;
  border-radius: 20px;
  padding: 2rem;
  color: #ffffff;
  width: 100%;
  height: 150px;
  text-align: center;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.sensorButtons:visited {
  text-decoration: none;
  color: #ffffff;
}
.sensorButtons:first-of-type, .sensorButtons:nth-of-type(2) {
  align-self: end;
}

.sensorHeat {
  margin: 0 auto;
}

.sensorBlock {
  width: 150px;
  height: 200px;
  background: red;
  margin: 1rem auto;
}

.sensorGauge {
  width: 100px;
  height: 140px;
  margin: 0 auto;
  text-align: center;
}

/* gauge readings start*/
.lowGauge {
  fill: #fff;
}

.mediumGauge {
  fill: #fff;
}

.highGauge {
  fill: #fff;
}

.warningGauge {
  fill: #f9b466;
}

.dangerGauge {
  fill: #f3400b;
}

.lightsOut {
  fill: none;
}

/* gauge readings end */
.headerUser {
  font-size: 1.2rem;
}

.headerPoints {
  font-size: 1rem;
}

.progress {
  fill: #cecece;
  stroke: #fff;
  stroke-width: 2.1995;
  stroke-miterlimit: 10;
}

.progressDone {
  fill: #52bdd7;
  stroke: #9ad5e5;
  stroke-width: 2.1995;
  stroke-miterlimit: 10;
}

.text-area {
  fill: none;
}

.bike-parts-wrapper h2 {
  text-align: center;
  color: #ffffff;
  margin: 0 0 0.25rem 0;
  text-shadow: 2px 2px 2px #0499c5;
}

.bikePart-carousel {
  display: block;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  overflow: hidden;
  text-align: center;
}
.bikePart-carousel li {
  display: inline-block;
  margin: 0.5rem;
  width: 90px;
  height: 90px;
}
@media screen and (min-width: 300px) and (max-width: 339px) {
  .bikePart-carousel li {
    width: 70px;
    height: 70px;
  }
}

#bike-assembly-wrapper {
  position: relative;
  margin: 5px auto;
  width: 360px;
  height: 260px;
}

@media screen and (min-width: 340px) and (max-width: 390px) {
  #bike-assembly-wrapper {
    position: relative;
    margin: -20px auto 10px;
    transform: scale(0.9, 0.9);
  }
}
@media screen and (min-width: 300px) and (max-width: 339px) {
  #bike-assembly-wrapper {
    position: relative;
    margin: -30px 0 0 -20px;
    transform: scale(0.7, 0.7);
    text-align: center;
    width: 320px;
    height: 220px;
  }
}
.bike-parts-wrapper {
  position: relative;
  margin: 1rem auto;
}

#bikePrinter-title h2 {
  font-size: 1.2rem;
  text-align: center;
  margin: 0 auto;
}
#bikePrinter-title h3 {
  font-size: 0.9rem;
  text-align: center;
  margin: 0 auto;
}

#bikePrinter {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: url(../img/printScreen.svg);
  background-position: center top;
  width: 360px;
  height: 440px;
  position: relative;
  overflow: hidden;
  margin: 0 auto 0.5rem;
}

#bikePrinterTouch {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: url(../img/printScreenTouch.svg);
  background-position: center top;
  width: 360px;
  height: 440px;
  position: relative;
  overflow: hidden;
  margin: 0 auto 0.5rem;
}

.printerArm {
  display: inline-flex;
  width: 18px;
  height: 330px;
  background-image: url(../img/printerArm.svg);
  position: absolute;
  left: 90px;
  top: 2px;
  z-index: 2;
}

.bikePrinter-Tri {
  display: inline-flex;
  background-image: url(../img/triBikePinter.svg);
  width: 360px;
  height: 170px;
  left: 40px;
  top: 40px;
  z-index: 1;
}

.printerHead {
  display: inline-flex;
  width: 100px;
  height: 110px;
  background-image: url(../img/printerHead.svg);
  position: absolute;
  left: 40px;
  top: 40px;
  z-index: 3;
}

.gaugeBlocks {
  align-self: flex-end;
  width: 65px;
  height: auto;
  margin: 0.5rem 0.75rem;
  border-radius: 25px;
}

.layerStepper {
  background-color: #142C4D;
  color: #ffffff;
  padding: 10px;
  border-radius: 50px;
  line-height: 12px;
}

.bikeFrame {
  display: inline-block;
  background-image: url("../img/bikeFramesSprite.svg");
}

.bikeFrameRed {
  fill: #EE0000;
}

.bikeFrameNavy {
  fill: #27579A;
}

.bikeFrameOrange {
  fill: #FAAA4F;
}

.bikeFrameBlue {
  fill: #AEDCDD;
}

.bikeFrame-eBike {
  background-position: 360px 0px;
  position: absolute;
  top: 0;
  left: 0;
  height: 280px;
  width: 360px;
  z-index: 2;
}

.bikeFrame-wagon {
  background-position: 720px 0px;
  position: absolute;
  top: 0;
  left: 0;
  height: 280px;
  width: 360px;
  z-index: 2;
}

.bikeFrame-loRider {
  background-position: 1080px 0px;
  position: absolute;
  top: 0;
  left: 0;
  height: 280px;
  width: 360px;
  z-index: 2;
}

.bikeFrame-Road {
  background-position: 1440px 0px;
  position: absolute;
  top: 0;
  left: 0;
  height: 280px;
  width: 360px;
  z-index: 2;
}

.bikeFrame-Tri {
  background-position: 1800px 0px;
  position: absolute;
  top: 0;
  left: 0;
  height: 280px;
  width: 360px;
  z-index: 2;
}

.bikeSeat {
  display: inline-block;
  background-image: url("../img/bikeSeatSprite.svg");
}

.bikeSeat-eBike {
  background-position: 60px 0px;
  position: absolute;
  height: 30px;
  width: 60px;
  z-index: 1;
}

.bikeSeat-eBike--eBike {
  top: 65px;
  left: 104px;
}

.bikeSeat-eBike--wagon {
  top: 74px;
  left: 125px;
}

.bikeSeat-eBike--loRider {
  top: 92px;
  left: 96px;
}

.bikeSeat-eBike--Road {
  top: 52px;
  left: 97px;
}

.bikeSeat-eBike--Tri {
  top: 24px;
  left: 95px;
}

.bikeSeat-wagon {
  background-position: 123px 0px;
  position: absolute;
  height: 60px;
  width: 63px;
  z-index: 1;
}

.bikeSeat-wagon--eBike {
  top: 31px;
  left: 95px;
}

.bikeSeat-wagon--wagon {
  top: 42px;
  left: 117px;
}

.bikeSeat-wagon--loRider {
  top: 60px;
  left: 88px;
}

.bikeSeat-wagon--Road {
  top: 18px;
  left: 88px;
}

.bikeSeat-wagon--Tri {
  top: -7px;
  left: 85px;
}

.bikeSeat-loRider {
  background-position: 185px 0px;
  position: absolute;
  height: 60px;
  width: 59px;
  z-index: 4;
}

.bikeSeat-loRider--eBike {
  top: 58px;
  left: 102px;
}

.bikeSeat-loRider--wagon {
  top: 68px;
  left: 123px;
}

.bikeSeat-loRider--loRider {
  top: 87px;
  left: 96px;
}

.bikeSeat-loRider--Road {
  top: 45px;
  left: 95px;
}

.bikeSeat-loRider--Tri {
  top: 17px;
  left: 95px;
}

.bikeSeat-Road {
  background-position: 249px 0px;
  position: absolute;
  height: 21px;
  width: 60px;
  z-index: 4;
}

.bikeSeat-Road--eBike {
  top: 82px;
  left: 110px;
}

.bikeSeat-Road--wagon {
  top: 87px;
  left: 128px;
}

.bikeSeat-Road--loRider {
  top: 105px;
  left: 104px;
}

.bikeSeat-Road--Road {
  top: 64px;
  left: 100px;
}

.bikeSeat-Road--Tri {
  top: 40px;
  left: 100px;
}

.bikeSeat-Tri {
  background-position: 310px 0px;
  position: absolute;
  height: 16px;
  width: 56px;
  z-index: 4;
}

.bikeSeat-Tri--eBike {
  top: 80px;
  left: 110px;
}

.bikeSeat-Tri--wagon {
  top: 90px;
  left: 130px;
}

.bikeSeat-Tri--loRider {
  top: 107px;
  left: 104px;
}

.bikeSeat-Tri--Road {
  top: 10px;
  left: 65px;
}

.bikeSeat-Tri--Tri {
  top: 40px;
  left: 98px;
}

.bikeHandles {
  display: inline-block;
  background-image: url("../img/bikeHandlesSprite.svg");
}

.bikeHandles-eBike {
  background-position: 37px 0px;
  position: absolute;
  height: 76px;
  width: 34px;
  z-index: -6;
}

.bikeHandles-eBike--eBike {
  top: 0;
  left: 227px;
}

.bikeHandles-eBike--wagon {
  top: 22px;
  left: 241px;
}

.bikeHandles-eBike--loRider {
  top: 10px;
  left: 235px;
}

.bikeHandles-eBike--Road {
  top: 0;
  left: 226px;
}

.bikeHandles-eBike--Tri {
  top: 20px;
  left: 241px;
}

.bikeHandles-wagon {
  background-position: 110px 0px;
  position: absolute;
  height: 75px;
  width: 55px;
  z-index: -6;
}

.bikeHandles-wagon--eBike {
  top: 5px;
  left: 203px;
}

.bikeHandles-wagon--wagon {
  top: 25px;
  left: 217px;
}

.bikeHandles-wagon--loRider {
  top: 15px;
  left: 212px;
}

.bikeHandles-wagon--Road {
  top: 5px;
  left: 203px;
}

.bikeHandles-wagon--Tri {
  top: 20px;
  left: 214px;
}

.bikeHandles-loRider {
  background-position: 179px 0px;
  position: absolute;
  height: 75px;
  width: 48px;
  z-index: -2;
}

.bikeHandles-loRider--eBike {
  top: 0px;
  left: 213px;
}

.bikeHandles-loRider--wagon {
  top: 22px;
  left: 2228px;
}

.bikeHandles-loRider--loRider {
  top: 11px;
  left: 222px;
}

.bikeHandles-loRider--Road {
  top: 0;
  left: 213px;
}

.bikeHandles-loRider--Tri {
  top: 20px;
  left: 228px;
}

.bikeHandles-Road {
  background-position: 288px 51px;
  position: absolute;
  height: 50px;
  width: 85px;
  z-index: -6;
}

.bikeHandles-Road--eBike {
  top: 50px;
  left: 230px;
}

.bikeHandles-Road--wagon {
  top: 69px;
  left: 245px;
}

.bikeHandles-Road--loRider {
  top: 59px;
  left: 1239px;
}

.bikeHandles-Road--Road {
  top: 48px;
  left: 230px;
}

.bikeHandles-Road--Tri {
  top: 66px;
  left: 243px;
}

.bikeHandles-Tri {
  background-position: 420px 0px;
  position: absolute;
  height: 75px;
  width: 115px;
  z-index: 6;
}

.bikeHandles-Tri--eBike {
  top: 17px;
  left: 206px;
}

.bikeHandles-Tri--wagon {
  top: 40px;
  left: 221px;
}

.bikeHandles-Tri--loRider {
  top: 30px;
  left: 221px;
}

.bikeHandles-Tri--Road {
  top: 16px;
  left: 206px;
}

.bikeHandles-Tri--Tri {
  top: 34px;
  left: 209px;
}

.bikePedals {
  display: inline-block;
  background-image: url("../img/bikePedalsSprite.svg");
}

.bikePedals-eBike {
  background-position: 40px 0px;
  position: absolute;
  height: 47px;
  width: 41px;
  z-index: 6;
}

.bikePedals-eBike--eBike {
  top: 180px;
  left: 154px;
}

.bikePedals-eBike--wagon {
  top: 183px;
  left: 174px;
}

.bikePedals-eBike--loRider {
  top: 162px;
  left: 134px;
}

.bikePedals-eBike--Road {
  top: 184px;
  left: 142px;
}

.bikePedals-eBike--Tri {
  top: 190px;
  left: 145px;
}

.bikePedals-wagon {
  background-position: 81px 0px;
  position: absolute;
  height: 60px;
  width: 39px;
  z-index: 6;
}

.bikePedals-wagon--eBike {
  top: 180px;
  left: 153px;
}

.bikePedals-wagon--wagon {
  top: 182px;
  left: 173px;
}

.bikePedals-wagon--loRider {
  top: 160px;
  left: 132px;
}

.bikePedals-wagon--Road {
  top: 184px;
  left: 141px;
}

.bikePedals-wagon--Tri {
  top: 185px;
  left: 145px;
}

.bikePedals-loRider {
  background-position: 117px 0px;
  position: absolute;
  height: 53px;
  width: 34px;
  z-index: 6;
}

.bikePedals-loRider--eBike {
  top: 181px;
  left: 153px;
}

.bikePedals-loRider--wagon {
  top: 184px;
  left: 174px;
}

.bikePedals-loRider--loRider {
  top: 163px;
  left: 134px;
}

.bikePedals-loRider--Road {
  top: 183px;
  left: 141px;
}

.bikePedals-loRider--Tri {
  top: 190px;
  left: 145px;
}

.bikePedals-Road {
  background-position: 158px 0px;
  position: absolute;
  height: 60px;
  width: 40px;
  z-index: 6;
}

.bikePedals-Road--eBike {
  top: 177px;
  left: 149px;
}

.bikePedals-Road--wagon {
  top: 180px;
  left: 171px;
}

.bikePedals-Road--loRider {
  top: 160px;
  left: 130px;
}

.bikePedals-Road--Road {
  top: 130px;
  left: 138px;
}

.bikePedals-Road--Tri {
  top: 185px;
  left: 142px;
}

.bikePedals-Tri {
  background-position: 379px 0px;
  position: absolute;
  height: 49px;
  width: 29px;
  z-index: 6;
}

.bikePedals-Tri--eBike {
  top: 185px;
  left: 156px;
}

.bikePedals-Tri--wagon {
  top: 187px;
  left: 177px;
}

.bikePedals-Tri--loRider {
  top: 165px;
  left: 138px;
}

.bikePedals-Tri--Road {
  top: 187px;
  left: 145px;
}

.bikePedals-Tri--Tri {
  top: 190px;
  left: 150px;
}

.bikeWheels {
  display: inline-block;
  background-image: url("../img/bikeWheelsSprite.svg");
}

.bikeWheels-eBike {
  background-position: 149px 0px;
  position: absolute;
  height: 147px;
  width: 147px;
  z-index: 1;
}

.bikeWheels-eBikeRear--eBike {
  top: 112px;
  left: 4px;
}

.bikeWheels-eBikeFront--eBike {
  top: 112px;
  left: 214px;
}

.bikeWheels-eBikeRear--wagon {
  transform: scale(0.8, 0.8);
  top: 126px;
  left: 2px;
}

.bikeWheels-eBikeFront--wagon {
  transform: scale(0.8, 0.8);
  top: 126px;
  left: 224px;
}

.bikeWheels-eBikeRear--loRider {
  transform: scale(0.8, 0.8);
  top: 120px;
  left: -4px;
}

.bikeWheels-eBikeFront--loRider {
  transform: scale(0.8, 0.8);
  top: 120px;
  left: 221px;
}

.bikeWheels-eBikeRear--Road {
  top: 112px;
  left: 4px;
}

.bikeWheels-eBikeFront--Road {
  top: 117px;
  left: 214px;
}

.bikeWheels-eBikeRear--Tri {
  transform: scale(0.9, 0.9);
  top: 117px;
  left: 0px;
}

.bikeWheels-eBikeFront--Tri {
  transform: scale(0.9, 0.9);
  top: 117px;
  left: 213px;
}

.bikeWheels-wagon {
  background-position: 276px 0px;
  position: absolute;
  height: 122px;
  width: 122px;
  z-index: 1;
}

.bikeWheels-wagonRear--eBike {
  top: 124px;
  left: 15px;
}

.bikeWheels-wagonFront--eBike {
  top: 124px;
  left: 225px;
}

.bikeWheels-wagonRear--wagon {
  top: 140px;
  left: 15px;
}

.bikeWheels-wagonFront--wagon {
  top: 140px;
  left: 237px;
}

.bikeWheels-wagonRear--loRider {
  top: 132px;
  left: 5px;
}

.bikeWheels-wagonFront--loRider {
  top: 132px;
  left: 233px;
}

.bikeWheels-wagonRear--Road {
  top: 128px;
  left: 10px;
}

.bikeWheels-wagonFront--Road {
  top: 128px;
  left: 225px;
}

.bikeWheels-wagonRear--Tri {
  top: 128px;
  left: 10px;
}

.bikeWheels-wagonFront--Tri {
  top: 128px;
  left: 224px;
}

.bikeWheels-loRider {
  background-position: 406px 0px;
  position: absolute;
  height: 130px;
  width: 130px;
  z-index: 1;
}

.bikeWheels-loRiderRear--eBike {
  top: 120px;
  left: 13px;
}

.bikeWheels-loRiderFront--eBike {
  top: 120px;
  left: 222px;
}

.bikeWheels-loRiderRear--wagon {
  transform: scale(0.8, 0.8);
  top: 137px;
  left: 8px;
}

.bikeWheels-loRiderFront--wagon {
  transform: scale(0.8, 0.8);
  top: 137px;
  left: 234px;
}

.bikeWheels-loRiderRear--loRider {
  top: 130px;
  left: 0px;
}

.bikeWheels-loRiderFront--loRider {
  top: 130px;
  left: 227px;
}

.bikeWheels-loRiderRear--Road {
  top: 125px;
  left: 7px;
}

.bikeWheels-loRiderFront--Road {
  top: 125px;
  left: 220px;
}

.bikeWheels-loRiderRear--Tri {
  top: 125px;
  left: 8px;
}

.bikeWheels-loRiderFront--Tri {
  top: 125px;
  left: 220px;
}

.bikeWheels-Road {
  background-position: 553px 0px;
  position: absolute;
  height: 145px;
  width: 145px;
  z-index: 1;
}

.bikeWheels-RoadRear--eBike {
  top: 110px;
  left: 4px;
}

.bikeWheels-RoadFront--eBike {
  top: 110px;
  left: 216px;
}

.bikeWheels-RoadRear--wagon {
  transform: scale(0.8, 0.8);
  top: 126px;
  left: 5px;
}

.bikeWheels-RoadFront--wagon {
  transform: scale(0.8, 0.8);
  top: 126px;
  left: 228px;
}

.bikeWheels-RoadRear--loRider {
  transform: scale(0.9, 0.9);
  top: 119px;
  left: -4px;
}

.bikeWheels-RoadFront--loRider {
  transform: scale(0.9, 0.9);
  top: 119px;
  left: 224px;
}

.bikeWheels-RoadRear--Road {
  top: 115px;
  left: 3px;
}

.bikeWheels-RoadFront--Road {
  top: 115px;
  left: 214px;
}

.bikeWheels-RoadRear--Tri {
  transform: scale(0.9, 0.9);
  top: 116px;
  left: 2px;
}

.bikeWheels-RoadFront--Tri {
  transform: scale(0.9, 0.9);
  top: 116px;
  left: 214px;
}

.bikeWheels-Tri {
  background-position: 0 0px;
  position: absolute;
  height: 143px;
  width: 143px;
  z-index: 1;
}

.bikeWheels-TriRear--eBike {
  top: 112px;
  left: 4px;
}

.bikeWheels-TriFront--eBike {
  top: 112px;
  left: 215px;
}

.bikeWheels-TriRear--wagon {
  transform: scale(0.8, 0.8);
  top: 126px;
  left: 3px;
}

.bikeWheels-TriFront--wagon {
  transform: scale(0.8, 0.8);
  top: 126px;
  left: 227px;
}

.bikeWheels-TriRear--loRider {
  transform: scale(0.9, 0.9);
  top: 120px;
  left: -4px;
}

.bikeWheels-TriFront--loRider {
  transform: scale(0.9, 0.9);
  top: 120px;
  left: 222px;
}

.bikeWheels-TriRear--Road {
  top: 115px;
  left: 4px;
}

.bikeWheels-TriFront--Road {
  top: 115px;
  left: 214px;
}

.bikeWheels-TriRear--Tri {
  top: 116px;
  left: 0px;
}

.bikeWheels-TriFront--Tri {
  top: 116px;
  left: 213px;
}

.footer-area-wrapper {
  background-image: url("../img/footer-background.svg");
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat !important;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;
}

@media screen and (min-width: 420px) {
  .footer-area-wrapper {
    background-size: cover;
  }
}
.footer-area--timer {
  display: block;
  background-image: url("../img/timer-background.svg");
  height: 70px;
  width: 70px;
  margin: 0 0 0.5rem 1rem;
  color: #ffffff;
  font-size: 2.2rem;
  text-align: center;
  padding-top: 10px;
}

@media screen and (max-width: 374px) {
  .footer-area--timer {
    height: 60px;
    width: 60px;
    font-size: 1.2rem;
  }
}
.footer-group {
  background-image: url(../img/footer-background.svg);
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.timer-text {
  font-family: Repo ExtraBlack, sans-serif;
  font-size: 1.2rem;
  color: #ffffff;
  text-shadow: 2px 2px 2px #0499c5;
}

.footer-area--next {
  margin: 0;
}

#footer-wrapper {
  position: relative;
  margin: 0;
  width: 100%;
  padding: 0 0.5rem;
  align-self: flex-end;
}

#ticket {
  background-image: url("../img/ticket.svg");
  background-size: contain;
  background-repeat: repeat-y;
  position: absolute;
  top: 120px;
  left: 7vw;
  width: 240px;
  height: auto;
  display: block;
  z-index: 18;
  padding: 0.5rem 2rem;
}

#ticket h2 {
  font-size: 16px;
  border-bottom: 0.5px black solid;
}

#ticket h3 {
  font-size: 14px;
  border-bottom: 0.5px black solid;
}

.ticket-info {
  margin: 0;
  padding: 0;
}

.ticket-item {
  font-family: "Repo Medium", sans-serif;
  list-style: none;
  font-size: 14px;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 0.5px #333333 solid;
}

#pauseScreen {
  display: grid;
  grid-template-rows: repeat(1fr);
  align-items: center;
  padding: 1rem;
  height: 100%;
}

#pauseHeader {
  margin-top: 10px;
  z-index: -999;
  position: relative;
}

.orderTicket {
  background-image: url(../img/ticketBar.svg);
  margin: -20px auto;
  z-index: 999;
  width: 85%;
  padding: 1rem 2rem;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.3));
}
.orderTicket h2 {
  margin: 0.5rem 0 1rem 0;
  border-bottom: 1px solid #142C4D;
}

.bikeOrders {
  display: grid;
  grid-template-columns: 80px 1fr;
  margin: 1rem 0;
  padding-bottom: 1rem;
  width: 100%;
  border-bottom: 1px solid #142C4D;
}

.bikeOrders-preview {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bikeOrders-preview img {
  width: 100%;
}

.bikeOrders-info {
  width: 200px;
  height: auto;
  display: flex;
  margin-left: 20px;
  align-items: center;
}
.bikeOrders-info h3 {
  margin: 0 0 5px 0;
  width: 100%;
}
.bikeOrders-info p {
  margin: 0;
  width: 100%;
  font-size: 14px;
  padding: 0;
}

.shippingProgress {
  display: inline-block;
  width: 75px;
  height: 10px;
  border-radius: 20px;
  background-color: green;
}

/*# sourceMappingURL=summit-22-style.css.map */

`