import { Carousel, WingBlank } from 'antd-mobile';
import React, { useState } from 'react';

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
        <Carousel initialSlideWidth={state.imgHeight} autoplay={true} infinite>
          {state.data.map((val) => (
            <a
              key={val.url}
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
