import './slider.css';

const MAX = 500;

const Slider = ({setSliderValue, sliderValue, onChange}) => {

  const getBackgroundSize = () => {
    return { backgroundSize: `${(sliderValue * 100) / MAX}% 100%` };
  };

  const handleChange =(e)=>{    
    if(typeof onChange === 'function'){
       // call the callback passing in whatever parameters you decide
       // in this simple case just sending numeric value
       onChange(e, 'distance')
    }    
  }

  return (
    <>
    
      <input
        type="range"
        min="0"
        max={MAX}
        onChange={(e) => {
          setSliderValue(e.target.value)
          handleChange(e)
        
        }

        }
        style={getBackgroundSize()}
        value={sliderValue}
      />
      </>
  );
}

export default Slider;