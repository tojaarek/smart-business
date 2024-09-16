import { ThreeDots } from 'react-loader-spinner'

const Loader = () => {
    return <ThreeDots
    visible={true}
    height="80"
    width="80"
    color="#3bbdf8"
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />;
  };
  
  export default Loader;