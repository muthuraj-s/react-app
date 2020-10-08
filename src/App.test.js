


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as ShallowRenderer from 'react-test-renderer/shallow';
import Form from './Form';
import Enzyme, {shallow ,expect}from 'enzyme';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('Rule Details Test Suite', () => {
  let component;
  let props;

 const shallowComponent = async () => {
     component = await shallow(<App />);
     await component.instance();
     component.update();
 };

 afterEach(() => {
     component = null;
     props = null;
     jest.clearAllMocks();
     sinon.restore();
 });
 describe('renders', () => {
     it('renders ', async () => {
      shallowComponent();
         expect(component).toBeDefined();
         expect(shallowToJson(component)).toMatchSnapshot();
     });
 });
});
// describe('snapshot', () => {
// it('renders ', async () => {
//   let component;
//  shallowComponent();
//   expect(component).toBeDefined();
//   expect(shallowToJson(component)).toMatchSnapshot();
// });});

// it('direct rendering',()=>{
// const a=renderer.create(<App/>).toJSON();
// expect(a).toMatchSnapshot();
// });
// // const shallowComponent = async () => {
// //   let component;
// //   component = await shallow(<Form />);
// //   await component.instance().componentDidMount();
  
// // };

// // 
// //   it('renders ', async () => {
// //       await shallowComponent();
// //       expect(component).toBeDefined();
// //       expect(shallowToJson(component)).toMatchSnapshot();
// //   });
// // });


//   it('renders ', () => {
//     const wrapper = shallow(<Form />);
//     expect(wrapper.find('div.row').exists()).toBe(true);
//   });


//   describe('<App />', () => {
//       let wrapper;
//       beforeEach(() => {
//         wrapper = shallow(<App />);
//       });  });


//   it('renders component', () => {
//         const wrapper = shallow(<Form />);
//         expect(wrapper.find('div.App').exists()).toBe(true);
//       });

//         describe('<App />', () => {
//           it('rendering', () => {
//             const wrapper=shallow(<App></App>);
//             expect(wrapper.find(Form)).toBePresent();
//           });
//           });
//     // const renderer = new ShallowRenderer();
//     // renderer.render(<App />);
//     // const result = renderer.getRenderOutput();
//     // expect(result.type).toBe('div');
//     // expect(result.props.children).toEqual([
//     //   <Form  a="aaa"/>
//     // ]);

