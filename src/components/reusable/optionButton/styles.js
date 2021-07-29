import { css } from '@emotion/css';

const styles = css({
  '&__button':{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid grey',
    cursor: 'pointer',
    width: '100%',
    height: 40,
    fontSize: 20,
    '&_green':{
      backgroundColor: 'green',
    },
    '&_red':{
      backgroundColor: 'red'
    }
  }
});

export default styles;