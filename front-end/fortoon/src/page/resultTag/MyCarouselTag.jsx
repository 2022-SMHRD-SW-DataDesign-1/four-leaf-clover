import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import PropTypes from 'prop-types';
import './css/MyCarouselTag.scss';
import Button from './TrunPageButton'
import { useNavigate } from 'react-router-dom';

// const isEqual = require("react-fast-compare");

export function Carousel(props) {

  // console.log("이미지데이터:",props.slides);
  // console.log("이미지크기:",props.cnt);

  // let slides = props?.slides;

  // console.log(slides);

  const cnt = props.cnt;
  const [slideTotal, setSlideTotal] = useState(0);
  const [slideCurrent, setSlideCurrent] = useState(0);
  const [slides, setSlides] = useState([]);
  const [height, setHeight] = useState('0px');
  const [cardLeftMove, setCardLeftMove] = useState(false);
  const [cardRightMove, setCardRightMove] = useState(false);
  const [donCardLoading, setDonCardLoading] = useState(false);
  const intervalRef = useRef(null);
  const nextRef = useRef();
  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => slideRight(),
    onSwipedRight: () => slideLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  useEffect(() => {
    if(props.slides){
      setSlides(props.slides)
      setSlideTotal(props.cnt - 1);
      setSlideCurrent(-1);
    
      setDonCardLoading(true);
    }
  }, [props.slides])

  useEffect(() => {
    setTimeout(() => {
      nextRef.current.click();
    }, 4000);
    setTimeout(() => {
      nextRef.current.click();
    }, 4500);
  }, [donCardLoading])


  const slideRight = () => {
    let preactiveSlide;
    let proactiveSlide;
    let slideCurrentLoc = slideCurrent;
    
    const activeClass = 'slider-single active';
    const slide = [...slides];
    if (slideTotal > 1) {
      if (slideCurrentLoc < slideTotal) {
        slideCurrentLoc++;
      } else {
        slideCurrentLoc = 0;
      }
      if (slideCurrentLoc > 0) {
        preactiveSlide = slide[slideCurrentLoc - 1];
      } else {
        preactiveSlide = slide[slideTotal];
      }
      const activeSlide = slide[slideCurrentLoc];
      if (slideCurrentLoc < slideTotal) {
        proactiveSlide = slide[slideCurrentLoc + 1];
      } else {
        proactiveSlide = slide[0];
      }

      slide.forEach((slid, index) => {
        if (slid.class.includes('preactivede')) {
          slid.class = 'slider-single proactivede';
        }
        if (slid.class.includes('preactive')) {
          slid.class = 'slider-single preactivede';
        }
      });

      preactiveSlide.class = 'slider-single preactive';
      activeSlide.class = activeClass;
      proactiveSlide.class = 'slider-single proactive';
      setSlides(slide);
      setSlideCurrent(slideCurrentLoc);

      if (document.getElementsByClassName('slider-single active').length > 0) {
        setTimeout(() => {
          if (document.getElementsByClassName('slider-single active').length > 0) {
            const height = document.getElementsByClassName('slider-single active')[0].clientHeight;
            setHeight(`${height}px`);
          }
        }, 500);
      }
      props.onSlideChange(slideCurrentLoc);
      if (props.autoplay) {
        clearTimeout(intervalRef.current);
        intervalRef.current = setTimeout(() => {
          nextRef.current.click();
        }, props.interval);
      }
    } else if (slide[0] && slide[0].class !== activeClass) {
      slide[0].class = activeClass;
      setSlides(slide);
      setSlideCurrent(0);
    }
  };
  const slideLeft = () => {
    if (slideTotal > 1) {
      let preactiveSlide;
      let proactiveSlide;
      let slideCurrentLoc = slideCurrent;
      const slide = [...slides];
      if (slideCurrentLoc > 0) {
        slideCurrentLoc--;
      } else {
        slideCurrentLoc = slideTotal;
      }

      if (slideCurrentLoc < slideTotal) {
        proactiveSlide = slide[slideCurrentLoc + 1];
      } else {
        proactiveSlide = slide[0];
      }
      let activeSlide = slide[slideCurrentLoc];
      if (slideCurrentLoc > 0) {
        preactiveSlide = slide[slideCurrentLoc - 1];
      } else {
        preactiveSlide = slide[slideTotal];
      }
      slide.forEach((slid, index) => {
        if (slid.class.includes('proactivede')) {
          slid.class = 'slider-single preactivede';
        }
        if (slid.class.includes('proactive')) {
          slid.class = 'slider-single proactivede';
        }
      });
      preactiveSlide.class = 'slider-single preactive';
      activeSlide.class = 'slider-single active';
      proactiveSlide.class = 'slider-single proactive';
      setSlides(slide);
      setSlideCurrent(slideCurrentLoc);
      props.onSlideChange(slideCurrentLoc);
      if (document.getElementsByClassName('slider-single active').length > 0) {
        setTimeout(() => {
          if (document.getElementsByClassName('slider-single active').length > 0) {
            const height = document.getElementsByClassName('slider-single active')[0].clientHeight;
            setHeight(`${height }px`);
          }
        }, 500);
      }
    }
  };

  const sliderClass = (direction) => {
    let sliderClass = `slider-${direction}`;
    if (!props.arrows) {
      sliderClass = 'slider-disabled';
    } else if (props.arrows && !props.arrowBorders) {
      sliderClass = `slider-${direction}-noborders`;
    }
    return sliderClass;
  };

  let changeLeftStatus = () => setCardLeftMove(!cardLeftMove)
  let changeRightStatus = () => setCardRightMove(!cardRightMove)

  useEffect(() => {
    console.log('왼쪽으로')
    slideLeft()
  },[cardLeftMove])

  useEffect(() => {
    console.log('오른쪽으로')
    slideRight()
  },[cardRightMove])

  const goNextPage = (slider) => {
    let outputList = []
    props.result.map((items) => {
      items.map((item) => {
        if(item.sttchr == slider.sttchr){
          outputList.push(item);
        }
      })
    })
    navigate('/resultToon',{state:{outputList}})
  }

  return (
    <div className="react-3d-carousel" style={{ height }} {...handlers}>
      
      { <div className="slider-container" >
        <div className="slider-content">
          {slides.map((slider, index) => (
            <div className={slider.class} key={index}>
                <div className={sliderClass('left')} onClick={() => slideLeft()}>
                    <div>
                        <i className="fa fa-arrow-left"></i>
                    </div>
                </div>
                <div className={sliderClass('right')} onClick={() => slideRight()} ref={nextRef}>
                    <div >
                        <i className="fa fa-arrow-right"></i>
                    </div>
                </div>
                <div className="slider-single-content" onClick={() => goNextPage(slider)}>
                  {slider.element}
                  <div className='slider-tagsets'>
                    <div className='slider-ment'>
                      {/* {props.resultTagData == undefined? */}
                      {slider.ment == undefined?
                      null : 
                      slider.ment}
                    </div>

                    <div className='slider-tagset'>
                      {/* {props.resultTagData == undefined?  */}
                      {slider.tags == undefined? 
                      null : 
                      slider.tags.map((tag, tagidx) => {
                        if (tagidx < 8){
                          return(
                            <div className='slider-tag' key={tagidx}>
                            #{tag}
                            </div>
                          )
                        }
                      })}
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>}
      <Button slideLeft={changeLeftStatus} slideRight={changeRightStatus} />
    </div>
  );
}
Carousel.propTypes = {
  slides: PropTypes.array,
  autoplay: PropTypes.bool,
  interval: PropTypes.number,
  arrows: PropTypes.bool,
  arrowBorders: PropTypes.bool,
  onSlideChange:PropTypes.func
};
Carousel.defaultProps = {
  autoplay: false,
  interval: 3000,
  arrows: true,
  arrowBorders: true,
  onSlideChange:function(){
  }
};

