import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('qb-connect', 'Integration | Component | qb connect', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{qb-connect}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#qb-connect}}
      template block text
    {{/qb-connect}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
