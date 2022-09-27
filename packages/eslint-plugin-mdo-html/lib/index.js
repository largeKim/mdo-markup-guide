/**
 * @fileoverview test
 * @author md-html
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const noCapitalizeTagIncludeDoctype = require("./rules/no-capitalize-tag-include-doctype");
const noSingleTagSlash = require("./rules/no-single-tag-slash");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = {
    "no-capitalize-tag-include-doctype": noCapitalizeTagIncludeDoctype,
    "no-single-tag-slash": noSingleTagSlash,
};
module.exports.configs = {
    recommended: {
        rules: {
            "md-html/no-single-tag-slash": "error",
        },
    },
};
