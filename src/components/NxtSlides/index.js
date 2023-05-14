import {Component} from 'react'
import './index.css'
import EachSlide from '../EachSlide'
import SliderContext from '../../Context'
import ActiveSlide from '../ActiveSlide'

class Slides extends Component {
  render() {
    return (
      <SliderContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-container">
              <ol className="slides-list">
                {initialList.map((eachSlide, index) => (
                  <EachSlide
                    details={eachSlide}
                    key={eachSlide.id}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <ActiveSlide />
            </div>
          )
        }}
      </SliderContext.Consumer>
    )
  }
}

export default Slides
