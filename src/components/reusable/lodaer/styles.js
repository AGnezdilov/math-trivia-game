import { css, keyframes } from '@emotion/css';

const rotate = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

const styles = css({
  '&__loader':{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width: '100vw',
    height: '100vh',
  },
  '&__icon':{
    borderRadius: '50%',
    border: '3px solid grey',
    borderRight: 'none',
    animation: `${rotate} 1s linear infinite`,
    width:40,
    height:40,
  }
});

export default styles;