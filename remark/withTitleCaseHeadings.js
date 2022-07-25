const titleCase = require("titlecase");
const visit = require("unist-util-visit");

module.exports = ({ markdownAST }) => {
    visit(markdownAST, "heading", node => {
        node.children = node.children.map(node => {
            if (node.type === "text") {
                return { ...node, value: titleCase(node.value) };
            }
            return node;
        });
    });
    return markdownAST;
};
