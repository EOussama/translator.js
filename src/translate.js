/**
 * 
 * @name:       translatejs
 * @version:    1.0.0
 * @author:     EOussama
 * @license     MIT
 * @source:     https://github.com/EOussama/translatejs
 * 
 * A simple javascript library for translating web content.
 * 
 */

(function (obj) {

    if (typeof exports !== 'undefined') {
        module.exports = Translate;
    } else {
        obj.Translate = Translate;
    }
})((typeof window !== 'undefined') ? window : this);
