import { Triangle } from 'react-loader-spinner';
import { Backdrop } from './Loader.styled';
export const Loader = () => {
  return (
    <Backdrop>
      <Triangle
        height="80"
        width="80"
        radius="48"
        color="#eac645"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Backdrop>
  );
};
