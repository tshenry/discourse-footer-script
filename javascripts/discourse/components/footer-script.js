import Component from "@ember/component";

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);
    const srcURL = settings.extend_content_security_policy.replace('script_src: ','');
    const tag = document.createElement('script');
    document.querySelector(`script[src="${srcURL}"]`)?.remove();
    tag.setAttribute('src', srcURL);
    document.head.appendChild(tag);
  },
});
