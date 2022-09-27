module.exports = {
    meta: {
        type: "problem",
        fixable: "code",
        schema: [],
        messages: {
            useCapitalizeTag: "doctype은 소문자로 사용해야 합니다.",
        },
    },
    create(context) {
        return {
            "*"(node) {
                console.log("node", node);
                if (/^<![A-Z]*\shtml>$/.test(node.value)) {
                    context.report({
                        node: node,
                        tagName: node.tagName,
                        messageId: "useCapitalizeTag",
                    });
                }
            },
        };
    },
};
