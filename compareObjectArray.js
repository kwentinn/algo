/**
 * @function compareObjectArrays
 * @description Compare 2 object arrays on the specified keyField (or on the 'id' property if not provided).
 * @param objectArrayA object array to compare the elements from.
 * @param objectArrayB object array to compare the elements to.
 * @param keyField (optional) defaults to 'id'.
 * @param verbose (optional) set to true to gather more info about the comparison.
 */
var compareObjectArrays = function (objectArrayA, objectArrayB, options) {

    // initialise options
    var keyField = "id",
        verbose = false;
    if (typeof options == 'object') {
        if (options['keyField'] != null) keyField = options['keyField'];
        if (options['verbose'] != null) verbose = options['verbose'];
    }

    if ( !! verbose) {
        console.log("compareObjectArrays()");
    }

    // check lengths of arrays
    if (objectArrayA.length != objectArrayB.length) {
        if ( !! verbose) console.log("A and B have a different length, result is necessarily false.");
        return false;
    }

    // force key to 'id' if not provided
    if (!keyField) keyField = 'id';

    for (var i = 0; i < objectArrayA.length; i++) {
        var elementA = objectArrayA[i];
        var isElementAFoundInB = false;
        for (var j = 0; j < objectArrayB.length; j++) {
            var elementB = objectArrayB[j];
            if (elementA[keyField] == elementB[keyField]) isElementAFoundInB = true;
        }
        if (isElementAFoundInB === false) {
            if ( !! verbose) console.log("elementA['" + keyField + "'] = \"" + elementA[keyField] + "\" could not be found in B");
            return false;
        }
    }

    if ( !! verbose) console.log("objectArrayA, objectArrayB are equal.");

    return true;
};

