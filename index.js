/*!
 * Copyright 2015, All Rights Reserved.
 *
 * Code licensed under the MIT License:
 * http://vitorbritto.mit-license.org/
 *
 * Author: Vitor Britto <code@vitorbritto.com.br>
 */

'use strict';

/**
 * Convert base numbers
 *
 * @function: convertBase
 * @params: {String} num | {Number} from | {Number} to
 * @return: {String}
 */

var convertBase = function(num, from, to) {
    return parseInt(num, from).toString(to);
};
