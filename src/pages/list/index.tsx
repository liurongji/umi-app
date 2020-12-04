import { Icon, NavBar, List, Carousel, WingBlank } from 'antd-mobile';
import React from 'react';

const Item = List.Item;
const Brief = Item.Brief;

export default () => {
  const state = {
    data: [
      { url: 'AiyWuByWklrrUDlFignR' },
      { url: 'TekJlZRVCjLFexlOCuWn' },
      { url: 'IJOtIlfsYdTyaDTRVrLI' },
    ],
    imgHeight: 176,
  };
  return (
    <div>
      <WingBlank>
        <Carousel initialSlideWidth={state.imgHeight} autoplay={false} infinite>
          {state.data.map((val, index) => (
            <a
              key={index}
              href="http://www.alipay.com"
              style={{
                display: 'inline-block',
                width: '100%',
                height: state.imgHeight,
              }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val.url}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    </div>
  );
};
