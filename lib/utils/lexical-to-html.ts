type LexicalNode = {
  type: string;
  version?: number;
  // text nodes
  text?: string;
  format?: number;
  // element nodes
  tag?: string;
  listType?: "bullet" | "number" | "check";
  checked?: boolean;
  url?: string;
  newTab?: boolean;
  children?: LexicalNode[];
};

type LexicalRoot = {
  root: LexicalNode;
};

const TEXT_FORMAT = {
  BOLD: 1,
  ITALIC: 2,
  STRIKETHROUGH: 4,
  UNDERLINE: 8,
  CODE: 16,
} as const;

function serializeNode(node: LexicalNode): string {
  switch (node.type) {
    case "text": {
      if (!node.text) return "";
      let html = escapeHtml(node.text);
      const fmt = node.format ?? 0;
      if (fmt & TEXT_FORMAT.CODE) html = `<code>${html}</code>`;
      if (fmt & TEXT_FORMAT.BOLD) html = `<strong>${html}</strong>`;
      if (fmt & TEXT_FORMAT.ITALIC) html = `<em>${html}</em>`;
      if (fmt & TEXT_FORMAT.UNDERLINE) html = `<u>${html}</u>`;
      if (fmt & TEXT_FORMAT.STRIKETHROUGH) html = `<s>${html}</s>`;
      return html;
    }
    case "linebreak":
      return "<br>";
    case "paragraph": {
      const inner = serializeChildren(node.children);
      return inner ? `<p>${inner}</p>` : "<p><br></p>";
    }
    case "heading": {
      const tag = node.tag ?? "h2";
      return `<${tag}>${serializeChildren(node.children)}</${tag}>`;
    }
    case "quote":
      return `<blockquote>${serializeChildren(node.children)}</blockquote>`;
    case "horizontalrule":
      return "<hr>";
    case "list": {
      const tag = node.listType === "number" ? "ol" : "ul";
      return `<${tag}>${serializeChildren(node.children)}</${tag}>`;
    }
    case "listitem": {
      const inner = serializeChildren(node.children);
      if (node.checked !== undefined) {
        return `<li class="task-item ${node.checked ? "checked" : ""}">${inner}</li>`;
      }
      return `<li>${inner}</li>`;
    }
    case "link": {
      const href = node.url ? escapeHtml(node.url) : "#";
      const target = node.newTab ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a href="${href}"${target}>${serializeChildren(node.children)}</a>`;
    }
    default:
      // Unknown node types: render children if any, else empty string
      return node.children ? serializeChildren(node.children) : "";
  }
}

function serializeChildren(children?: LexicalNode[]): string {
  if (!children) return "";
  return children.map(serializeNode).join("");
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function lexicalToHtml(value: unknown): string {
  if (!value || typeof value !== "object") return "";
  const root = (value as LexicalRoot).root;
  if (!root) return "";
  return serializeChildren(root.children);
}
