import { mount } from '@vue/test-utils';
import FactorNavTemplate from './FactorNavTemplate.vue';

describe('FactorNavTemplate', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(FactorNavTemplate);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('receives searchBarLabel', () => {
    const testText = 'searchBarLabel';
    const wrapper = mount(FactorNavTemplate, {
      propsData: {
        searchBarLabel: testText,
      },
    });
    expect(wrapper.vm.$props.searchBarLabel).toEqual(testText);
  });

  it('receives searchBarHandler', () => {
    const testFunc = (value) => value;
    const wrapper = mount(FactorNavTemplate, {
      propsData: {
        searchBarHandler: testFunc,
      },
    });
    expect(wrapper.vm.$props.searchBarHandler(7)).toEqual(7);
  });

  it('receives slot logo', () => {
    const testSrc = `https://www.mozilla.org/media/protocol/img/logos/mozilla/black.svg`;
    const wrapper = mount(FactorNavTemplate, {
      slots: {
        logo: `<img src='${testSrc}' />`,
      },
    });
    expect(wrapper.vm.$slots.logo[0].data.attrs.src).toEqual(testSrc);
  });

  it('receives slot nav', () => {
    const wrapper = mount(FactorNavTemplate, {
      slots: {
        nav: `<p>nav</p>`,
      },
    });
    expect(wrapper.vm.$slots.nav[0].children[0].text).toEqual('nav');
  });

  it('receives slot profile', () => {
    const wrapper = mount(FactorNavTemplate, {
      slots: {
        profile: `<p>profile</p>`,
      },
    });
    expect(wrapper.vm.$slots.profile[0].children[0].text).toEqual('profile');
  });

  it('receives slot main', () => {
    const wrapper = mount(FactorNavTemplate, {
      slots: {
        main: `<p>main</p>`,
      },
    });
    expect(wrapper.vm.$slots.main[0].children[0].text).toEqual('main');
  });

  it('receives slot footerLinks', () => {
    const wrapper = mount(FactorNavTemplate, {
      slots: {
        footerLinks: `<p>footerLinks</p>`,
      },
    });
    expect(wrapper.vm.$slots.footerLinks[0].children[0].text).toEqual(
      'footerLinks',
    );
  });
});

// import { shallowMount } from '@vue/test-utils';
// import HelloWorld from '@/components/HelloWorld.vue';

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message';
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });
