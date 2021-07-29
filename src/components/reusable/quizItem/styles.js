import { css } from '@emotion/css';

const styles = css({
  '&__wrapper':{
    border: '1px solid #efefef',
    padding: '15px 20px'
  },
  '&__top':{
    display:'flex',
    alignItems: 'flex-start',
    justifyContent:'space-between'
  },
  '&__question':{
    fontSize:24
  },
  '&__score':{
    fontSize:18
  },
  '&__step':{
    marginTop:5,
    fontSize:16
  },
  '&__options':{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 10,
    marginTop: 30
  }
});

export default styles;