import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import typography from '@material-ui/core/Typography'
import Typography from '@material-ui/core/Typography';

export default class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        style={{marginRight: '100px'}}
      >
        <Slider
        style={{
            width: "300px",
            height: "350px",
        
        }}>
          <Slide index={0} style={{textAlign: 'center'}}>
               <Typography variant="h3" ><i>"Świetna zabawa dla całej rodziny! Polecam!"</i> <b>Marcin</b> ⭐️⭐️⭐️⭐️⭐️</Typography> 
              </Slide>
          <Slide index={1} style={{textAlign: 'center'}}>
          <Typography variant="h3"><i>"Najlepsza aplikacja jaką mam na telefonie."</i> <b>Patka12</b> ⭐️⭐️⭐️⭐️⭐️</Typography>
              </Slide>
          <Slide index={2} style={{textAlign: 'center'}}>
          <Typography variant='h3'> <i>"Bogu dziękować, że ktoś to wymyślił!"</i> <b>Czarodziej</b> ⭐️⭐️⭐️⭐️⭐️</Typography>
              </Slide>
        </Slider>
        <div
        style={{display: 'flex', justifyContent: 'center'}}>
        <ButtonBack style={{
            border: 'none',
            width: '70px',
            height: '45px'
        }}>Back</ButtonBack>
        <ButtonNext style={{
            border: 'none',
            width: '70px',
            height: '45px'
        }}>Next</ButtonNext>
        </div>
      </CarouselProvider>
    );
  }
}