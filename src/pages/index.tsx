import SimpleSlider from '@/components/SimpleSlider';
import Swiper from '@/components/Swiper';
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
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >
        NavBar
      </NavBar>
      <List renderHeader={() => 'Subtitle'} className="my-list">
        <Item arrow="horizontal" multipleLine onClick={() => {}}>
          Title <Brief>subtitle</Brief>
        </Item>
        <Item
          arrow="horizontal"
          multipleLine
          onClick={() => {}}
          platform="android"
        >
          ListItem （Android）
          <Brief>
            There may have water ripple effect of <br /> material if you set the
            click event.
          </Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => {}}
        >
          Title <Brief>subtitle</Brief>
        </Item>
      </List>
      <Swiper></Swiper>
    </div>
  );
};
