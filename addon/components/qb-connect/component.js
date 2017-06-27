import injectScript from 'ember-inject-script';
import { assert } from 'ember-metal/utils';
import Component from 'ember-component';
import layout from './template';
/* global intuit */

export default Ember.Component.extend({
  layout,
  classNames: 'qb-quickbook-connect',

  didInsertElement() {
    this._super(...arguments);

    let { grantUrl, usesQuickbooks, usesPayments, intuitReferred, version } = this.getProperties([
      'grantUrl', 'usesQuickbooks', 'usesPayments', 'intuitReferred', 'version'
    ]);

    assert(grantUrl, "Must specify a grantUrl parameter for this component to work");

    usesQuickbooks = usesQuickbooks !== undefined ? usesQuickbooks : true;
    usesPayments = usesPayments !== undefined ? usesPayments : true;
    intuitReferred = intuitReferred !== undefined ? intuitReferred : true;
    version = version !== undefined ? version : "1.3.3";

    let url = `//appcenter.intuit.com/Content/IA/intuit.ipp.anywhere-${version}.js`;

    injectScript(url).then(() => {
      intuit.ipp.anywhere.setup({
        grantUrl,
        datasources: {
          quickbooks : usesQuickbooks,
          payments : usesPayments
       },
        paymentOptions:{
          intuitReferred
       }
      });
    });
  }

});
