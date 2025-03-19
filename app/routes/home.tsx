import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import md from "../files/sample.md?raw";
import type { Route } from "./+types/home";
import "../styles/home.css";

export function meta({}: Route.MetaArgs) {
  return [{ title: "markdown viewer" }];
}

export const loader = async () => {
  const randomString = `株式会社 ${Math.random().toString(36).substring(2, 8)}`;

  const masked = md
    .replace(
      /<!-- START: MASK -->[\s\S]*?<!-- END: MASK -->/g,
      "<!-- Masked -->"
    )
    .replace(
      /<!-- START: MASK-C -->[\s\S]*?<!-- END: MASK-C -->/g,
      randomString
    );

  return {
    props: {
      markdown: masked,
    },
  };
};

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="markdown ml-8">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          p: ({ node, ...props }) => (
            <p {...props} style={{ whiteSpace: "pre-wrap" }} />
          ),
          ul: ({ node, ...props }) => (
            <ul
              {...props}
              style={{ listStyleType: "disc", paddingLeft: "20px" }}
            />
          ),
        }}
      >
        {loaderData.props.markdown}
      </ReactMarkdown>
    </div>
  );
}
