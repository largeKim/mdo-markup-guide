module.exports = {
    meta: {
        type: "problem",
        fixable: "code",
        schema: [],
        messages: {
            useSingleTagSlash: "단일태그에는 슬래시를 사용하지 않습니다.",
        },
    },
    create(context) {
        const SELF_TAG_LIST = [
            "area",
            "base",
            "br",
            "col",
            "command",
            "embed",
            "hr",
            "img",
            "input",
            "keygen",
            "link",
            "menuitem",
            "meta",
            "param",
            "source",
            "track",
            "wbr",
        ];
        return {
            "*"(node) {
                if (
                    SELF_TAG_LIST.includes(node.tagName) &&
                    /((\/)(\s)*>)$/.test(node.value)
                ) {
                    context.report({
                        node: node,
                        tagName: node.tagName,
                        messageId: "useSingleTagSlash",
                    });
                }
            },
        };
    },
};
