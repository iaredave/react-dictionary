import React, { Component } from 'react'
import ThumbNail from '../ThumbNail/index'
import carAPI from '../../carAPI'
import { RightArrow, LeftArrow } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

class Slider extends Component {
  constructor () {
    super()

    this.state = {
        carArray: carAPI,
        newArray: [0, 1],
        totalCars: carAPI.length,
        totalNegCars: -(carAPI.length),
        pictures: carAPI.map((cars, index) => (
                      <ThumbNail
                            id={index}
                            key={cars.title}
                            title={cars.title}
                            info={cars.info}
                            url={cars.url}
                        />
                    )),
        rightCounter: 1,
        leftCounter: -1,
        flipSlider: false,
        defaultView: true
    }
  }

  /* Check for current window size */
    componentDidMount() {
            window.addEventListener("resize", this.resize.bind(this))
            this.resize()
        }

  /* Adjust arrow icons based on viewport size */
    resize() {
        let currentflipSlider = (window.innerWidth <= 760)
            if (currentflipSlider !== this.state.flipSlider) {
                this.setState({flipSlider: currentflipSlider})
            }
        }

    toggleRightArrow = () => {
  /* If right counter is less than total length of car array then increase counters */
        if (this.state.totalCars + 1 > this.state.rightCounter) {
                this.setState({
                    defaultView: false,
                    rightCounter: this.state.rightCounter + 1,
                    leftCounter: this.state.leftCounter + 1,
                    /* Render new car array */
                    newArray: this.state.carArray.slice(this.state.rightCounter).concat(this.state.carArray.slice(0, this.state.rightCounter))
                })
         }
  /* If right counter equals total car array length then drop counter back to 1 to reset */
          if (this.state.rightCounter >= this.state.totalCars) {
                this.setState({
                    rightCounter: 1,
                    newArray: this.state.carArray.slice(this.state.rightCounter).concat(this.state.carArray.slice(0, this.state.rightCounter))
                })
          }
  /* If left counter equals total car array length then drop counter back to -1 to reset */
          if (this.state.leftCounter > this.state.totalCars - 3) {
                this.setState({ leftCounter: -1 })
          }
    }

    toggleLeftArrow = () => {
        if (this.state.totalNegCars - 1 < this.state.leftCounter) {
                this.setState({
                    defaultView: false,
                    leftCounter: this.state.leftCounter - 1,
                    rightCounter: this.state.rightCounter - 1,
                    newArray: this.state.carArray.slice(this.state.leftCounter).concat(this.state.carArray.slice(0, this.state.leftCounter))
                })
       }
        if (this.state.leftCounter <= this.state.totalNegCars) {
                 this.setState({
                    leftCounter: - 1,
                    newArray: this.state.carArray.slice(this.state.leftCounter).concat(this.state.carArray.slice(0, this.state.leftCounter))
                 })
        }
        if (this.state.rightCounter < this.state.totalNegCars + 3) {
                 this.setState({ rightCounter: 1 })
         }
    }

  render () {
  /* If slider arrow is clicked, render updated array */
  const newPictures = this.state.newArray.map((cars, index) => (
                        <ThumbNail
                              id={index}
                              key={cars.title}
                              title={cars.title}
                              info={cars.info}
                              url={cars.url}
                          />
                      ))

    return (
    <React.Fragment>
       <LeftArrow onClick={this.toggleLeftArrow}>
         <FontAwesomeIcon style={{ fontSize: '80px' }} rotation={this.state.flipSlider ? 90 : 0} icon={faChevronCircleLeft} />
       </LeftArrow>
     { this.state.defaultView === true ? (
       <div>
         {this.state.pictures}
        </div>
         ) : (
        <div>
          {newPictures}
        </div>
     )}
       <RightArrow onClick={this.toggleRightArrow}>
         <FontAwesomeIcon style={{ fontSize: '80px' }} rotation={this.state.flipSlider ? 90 : 0} icon={faChevronCircleRight} />
       </RightArrow>
     </React.Fragment>
    )
  }
}

export default Slider
