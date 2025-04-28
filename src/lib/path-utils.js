export function getBasePath() {
    return process.env.NODE_ENV === 'production' ? '/res_cv' : '';
  }
  
  export function getImagePath(path) {
    return `${getBasePath()}${path}`;
  }