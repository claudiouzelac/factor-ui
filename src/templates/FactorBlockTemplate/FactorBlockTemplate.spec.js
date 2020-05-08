import { mount } from '@vue/test-utils';
import FactorBlockTemplate from './FactorBlockTemplate.vue';

describe('FactorBlockTemplate', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(FactorBlockTemplate);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('receives searchBarLabel', () => {
    const testText = 'searchBarLabel';
    const wrapper = mount(FactorBlockTemplate, {
      propsData: {
        searchBarLabel: testText,
      },
    });
    expect(wrapper.vm.$props.searchBarLabel).toEqual(testText);
  });

  it('receives searchBarHandler', () => {
    const testFunc = (value) => value;
    const wrapper = mount(FactorBlockTemplate, {
      propsData: {
        searchBarHandler: testFunc,
      },
    });
    expect(wrapper.vm.$props.searchBarHandler(7)).toEqual(7);
  });

  it('receives slot logo', () => {
    const testSrc = `https://www.mozilla.org/media/protocol/img/logos/mozilla/black.svg`;
    const wrapper = mount(FactorBlockTemplate, {
      slots: {
        logo: `<img src='${testSrc}' />`,
      },
    });
    expect(wrapper.vm.$slots.logo[0].data.attrs.src).toEqual(testSrc);
  });

  it('receives slot nav', () => {
    const wrapper = mount(FactorBlockTemplate, {
      slots: {
        nav: `<p>nav</p>`,
      },
    });
    expect(wrapper.vm.$slots.nav[0].children[0].text).toEqual('nav');
  });

  it('receives slot profile', () => {
    const wrapper = mount(FactorBlockTemplate, {
      slots: {
        profile: `<p>profile</p>`,
      },
    });
    expect(wrapper.vm.$slots.profile[0].children[0].text).toEqual('profile');
  });

  it('receives slot main', () => {
    const wrapper = mount(FactorBlockTemplate, {
      slots: {
        main: `<p>main</p>`,
      },
    });
    expect(wrapper.vm.$slots.main[0].children[0].text).toEqual('main');
  });

  it('receives slot footerLinks', () => {
    const wrapper = mount(FactorBlockTemplate, {
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
