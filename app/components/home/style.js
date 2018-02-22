import reactCSS from 'reactcss';

export default (props, state) => {
  return reactCSS({
    'default': {
      container: {
        color: 'gray',
      },
    },
  }, props, state);
};
