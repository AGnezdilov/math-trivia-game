import { css } from '@emotion/css';

const styles = css({
  '&__wrapper':{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
  },
  '&__item':{
    width:'100%',
    maxWidth: 400,
  }
});

export default styles;