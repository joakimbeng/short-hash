'use strict';
var test = require('tape');
var shortHash = require('../');

test('shortHash generates a small hash from a string', function (assert) {
  var str = 'Lorem ipsum dolor sit amet, et nec eros partem integre, ' +
    'ex veri falli ancillae pro, consetetur adipiscing et vix. ' +
    'Et utamur definitionem eos, natum sadipscing voluptatibus usu et. ' +
    'No omnesque intellegat vel, cum prima tollit democritum an. ' +
    'Fuisset copiosae mel ei, in utroque meliore lucilius has. Ancillae incorrupte ut has.';

  assert.equal(shortHash(str), 'cf74ec25');
  assert.equal(shortHash(str, 16), 'cf74ec25');
  assert.equal(shortHash(str, 27), '8qf71qk');
  assert.equal(shortHash(str, 36), '1lk86qt');

  assert.end();
});
