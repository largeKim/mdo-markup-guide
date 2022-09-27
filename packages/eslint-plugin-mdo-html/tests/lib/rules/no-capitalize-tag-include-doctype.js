const { RuleTester: ESLintRuleTester } = require("eslint");
const parser = require.resolve("eslint-html-parser");
const { rules } = require("../../../lib/index");

const FILE_NAME = "test.html";

class RuleTester extends ESLintRuleTester {
    constructor(options) {
        super(options);
    }
    run(name, rule, tests) {
        super.run(name, rule, {
            valid: tests.valid.map((test) => ({
                ...test,
                filename: FILE_NAME,
            })),
            invalid: tests.invalid.map((test) => ({
                ...test,
                filename: FILE_NAME,
            })),
        });
    }
}

const ruleTester = new RuleTester({
    parser,
});

ruleTester.run(
    "no-capitalize-tag-include-doctype",
    rules["no-capitalize-tag-include-doctype"],
    {
        valid: [
            {
                code: `<!doctype html>`,
            },
        ],
        invalid: [
            {
                code: `<!DOCTYPE html>`,
                errors: [{ message: "doctype은 소문자로 사용해야 합니다." }],
            },
        ],
    }
);
