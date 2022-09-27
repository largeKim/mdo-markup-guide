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

ruleTester.run("no-single-tag-slash", rules["no-single-tag-slash"], {
    valid: [
        {
            code: `<img className="hello" id="valid-div-id" >`,
        },
    ],
    invalid: [
        {
            code: `<!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <meta charset="UTF-8"/>
                            <title accesskey="test">Title</title>
                        </head>
                        <body>
                            <img />
                        </body>
                    </html>
`,
            errors: [
                { message: "단일태그에는 슬래시를 사용하지 않습니다." },
                { message: "단일태그에는 슬래시를 사용하지 않습니다." },
            ],
        },
    ],
});
