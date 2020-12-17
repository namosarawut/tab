import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, View } from 'native-base';
import Tab1 from './TabOne';
import Tab2 from './TabTwo';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
       <View
       style={{height:25}}
       />
        <Tabs>
          <Tab heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />

          </Tab>
        </Tabs>
      </Container>
    );
  }
}